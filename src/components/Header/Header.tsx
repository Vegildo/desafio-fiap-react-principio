import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 80px;
  background-color: #181818;
  color: whitesmoke;
  justify-content: center;
  padding: 20px;
  border-bottom: 2px solid #eff3ea;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  text-decoration: none;
  color: #6200ea;

  &:hover {
    color: #3700b3;
  }
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6200ea;

  &:hover {
    color: #3700b3;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Task List</HeaderTitle>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/completed-tasks">Completed Tasks</StyledLink>
        <StyledLink to="/pending-tasks">Pending Tasks</StyledLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
