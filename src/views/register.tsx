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
const Form = styled.form``;

interface Props {
  history: any;
}

const Register = (props: Props) => {
  const [
    {
      user,
      forms: { username, password, firstname, lastname, consent },
    },
    dispatch,
  ] = useStateValue() as any;

  const actions = getActions(dispatch);

  const handleRegistration = (e: FormEvent) => {
    e.preventDefault();
    const qs = parse(props.history.location.search, { ignoreQueryPrefix: true }) || {};
    const redirectUrl = qs.redirect;
    actions.register(username, password, {}, redirectUrl);
  };

  const handleLogout = () => actions.logout();

  const updateUsername = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updateUsername', payload: target.value });

  const updateFirstname = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updateFirstname', payload: target.value });

  const updateLastname = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updateLastname', payload: target.value });

  const updatePassword = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updatePassword', payload: target.value });

  const updateConsent = ({ target }: { target: HTMLInputElement }) =>
    dispatch({ type: 'updateConsent', payload: target.checked });

  return (
    <Container>
      <Header title="Login" user={user} onLogout={handleLogout} />
      {!user && (
        <Body>
          <Form onSubmit={handleRegistration}>
            <TextInput placeholder="Email" value={username} onChange={updateUsername} />
            <TextInput placeholder="First name" value={firstname} onChange={updateFirstname} />
            <TextInput placeholder="Last name" value={lastname} onChange={updateLastname} />
            <TextInput
              placeholder="Password"
              value={password}
              onChange={updatePassword}
              type="password"
            />
            <input type="checkbox" checked={consent} onChange={updateConsent} /> consent
            <Button label="Register" type="submit" />
          </Form>
        </Body>
      )}
    </Container>
  );
};

export default Register;
