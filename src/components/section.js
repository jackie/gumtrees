import * as React from "react";
import styled from "styled-components";

let Container = styled.div`
  background: #0b1d26;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  margin: auto;
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
  max-width: 565px;
  height: 720px;
  position: relative;
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
  flex-direction: column;
  margin-right: 150px;
  max-width: 650px;
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
