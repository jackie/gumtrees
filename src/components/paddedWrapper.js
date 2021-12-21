import * as React from "react";
import styled from "styled-components";

let Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  width: 100%;
  max-width: 1320px;
  padding: 0 1em;
  margin: auto;
`;

const PaddedWrapper = ({ children, flexDirection, ...props }) => {
  return (
    <Container flexDirection={flexDirection} {...props}>
      {children}
    </Container>
  );
};

PaddedWrapper.defaultProps = {
  flexDirection: "column",
};

export default PaddedWrapper;
