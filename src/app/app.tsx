import React, {  Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styled from 'styled-components';

import { State } from '../types/state';
import { getAccount } from '../utils/auth';
import { StateContext } from '../state';

import Login from '../views/login';
import Register from '../views/register';

const Wrapper = styled.div``;

class App extends Component<{}, State> {
  static contextType = StateContext;

  public componentDidMount() {
    const [, dispatch] = this.context;
    getAccount().then(user => {
      if (user) {
        dispatch({ type: 'updateUser', payload: user });
      }
    });
  }

  render = () => (
    <Wrapper>
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Router>
    </Wrapper>
  );
};

export default App;
