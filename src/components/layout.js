import * as React from "react";
import styled from "styled-components";
import background from "../assets/images/header.jpg";
import Nav from "./nav";

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;

  &:before {
    content: "";
    display: block;
    background: linear-gradient(
      330.24deg,
      rgba(11, 29, 38, 0) 31.06%,
      #0b1d26 108.93%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Content = styled.div`
  position: relative;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Nav />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
