import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  width: 100vw;
  background-color: #181818;
  color: whitesmoke;
  justify-content: center;
  padding: 20px;
  border-bottom: 2px solid #eff3ea;
  box-shadow: 0 2px 6px 1px rgba(0, 0, 0, 0.1);
`;

const HeaderTitle = styled.h1`
  text-align: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Task List</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
