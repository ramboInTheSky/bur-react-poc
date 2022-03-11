import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { User } from '../types/user';
import { logout } from '../utils/auth';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1``;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;

    li {
      padding: 10px;
    }
  }
`;

export const Logout = styled.button`
  background: none;
  border: 0;
  outline: none;
  color: red;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

interface Props {
  readonly title: string;
  readonly onLogout: () => void;
  readonly user?: User;
}

export const Header: FC<Props> = ({ onLogout, title, user }) => {
  const handleLogout = () => logout().then(() => onLogout());

  return (
    <Container>
      <Title>{title}</Title>
      <Nav>
        {!!user && (
          <p>
            welcome {user.email},{' '}
            <Logout onClick={handleLogout}>logout</Logout>
          </p>
        )}
        {!user && (
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        )}
      </Nav>
    </Container>
  );
};
