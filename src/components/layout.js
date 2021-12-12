import * as React from "react";
import styled from "styled-components";
import background from "../assets/images/header.jpg";
import Nav from "./nav";

const Wrapper = styled.div`
  background: url(${background}) no-repeat bottom center/cover;
  height: 100vh;
  position: relative;

  &:before {
    content: "";
    display: block;
    background: linear-gradient(
      330.24deg,
      rgba(11, 29, 38, 0) 31.06%,
      #0b1d26 108.93%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav>Date</Nav>
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
