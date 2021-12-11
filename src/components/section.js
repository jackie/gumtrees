import * as React from "react";
import styled from "styled-components";

let Container = styled.div`
  background: #0B1D26;
  position: relative;
`;
let Number = styled.div`
  font-size: 15em;
  font-style: italic;
  font-weight: 700;
  opacity: .1;
  font-family: Queens;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
`;
let Image = styled.div``;
let Subtitle = styled.div`
  color: #549353;
  font-size: 1.125em;
  text-transform: uppercase;
  letter-spacing: .5em;
`;

let Title = styled.div`
  font-family: Queens;
  font-size: 4em;
`;
let Description = styled.div`
  font-size: 1.125em;
`;
let Action = styled.div`
  color: #549353;
`;

const Section = ({ number, image, subtitle, title, description, action }) => {
  return (
    <Container>
      <Number>{number}</Number>
      <Image>{image}</Image>
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Action>{action}</Action>
    </Container>
  )
}

export default Section