import React, { FormEvent } from 'react';
import styled from 'styled-components';
import { parse } from 'qs';

import { useStateValue } from '../state';
import getActions from '../state/actions';

import { Header } from '../components/header';
import { TextInput } from '../components/text-input';
import { Button } from '../components/button';

const Container = styled.div``;
const Body = styled.div``;
export const Form = styled.form``;

interface Props {
  history: any;
}

const Login = (props: Props) => {
  const [
    {
      user,
      forms: { username, password },
    },
    dispatch,
  ] = useStateValue() as any;

  const actions = getActions(dispatch);

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const qs = parse(props.history.location.search, { ignoreQueryPrefix: true }) || {};
    const redirectUrl = qs.redirect;
    actions.login(username, password, redirectUrl);
  };

  const handleLogout = () => actions.logout();

  const updateUsername = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updateUsername', payload: target.value });

  const updatePassword = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updatePassword', payload: target.value });

  return (
    <Container>
      <Header title="Login" user={user} onLogout={handleLogout} />
      {!user && (
        <Body>
          <Form onSubmit={handleLogin}>
            <TextInput placeholder="Email" value={username} onChange={updateUsername} />
            <TextInput
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              type="password"
            />
            <Button label="Login" type="submit" />
          </Form>
        </Body>
      )}
    </Container>
  );
};

export default Login;
