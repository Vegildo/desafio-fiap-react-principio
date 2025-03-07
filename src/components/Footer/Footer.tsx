import React from "react";import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #181818;
  color: whitesmoke;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100vw;
  border-top: 2px solid #eff3ea;
  box-shadow: 0 -2px 6px 1px rgba(0, 0, 0, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Criado por Leonardo Braga © 2025</p>
    </FooterContainer>
  );
};

export default Footer;
