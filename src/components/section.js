import * as React from "react";
import styled from "styled-components";

let Container = styled.div`
  background: #0b1d26;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto auto 12.5em;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

let Number = styled.div`
  font-size: 15em;
  font-style: italic;
  font-weight: 700;
  opacity: 0.1;
  font-family: Queens;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%) translateY(-50%);
`;

let Image = styled.img`
  width: 45%;
  height: 45em;
  position: relative;
  justify-self: flex-start;
`;

let Subtitle = styled.div`
  color: #549353;
  font-size: 1.125em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
`;

let Title = styled.div`
  font-family: Queens;
  font-size: 4em;
`;

let Description = styled.div`
  font-size: 1em;
  flex-shrink: 3;
  font-weight: 300;
  letter-spacing: 0.03em;
`;

let Action = styled.div`
  color: #549353;
`;

let TextBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 45%;
  justify-self: flex-end;
`;

const Section = ({ number, image, subtitle, title, description, action }) => {
  return (
    <Container>
      <TextBox>
        <Number>{number}</Number>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Action>{action}</Action>
      </TextBox>
      <Image src={image}></Image>
    </Container>
  );
};

export default Section;
