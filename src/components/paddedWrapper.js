import * as React from "react";
import styled from "styled-components";

let Container = styled.div`
  background: #0b1d26;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

let Content = styled.div`
  width: 100%;
  max-width: 1180px;
`;

const PaddedWrapper = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}

export default PaddedWrapper
