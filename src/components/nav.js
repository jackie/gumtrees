import * as React from "react";
import styled from "styled-components";

let Navigation = styled.div`
height: 100px;
`;

const Nav = ({ children }) => {
  return (
    <Navigation>nav{children}</Navigation>
  )
}

export default Nav
