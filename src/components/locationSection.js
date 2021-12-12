import * as React from "react";
import styled from "styled-components";
import "../assets/styles/global.css";

let Container = styled.div`
  background: var(--dark);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

let ImageContainer = styled.div`
  display: flex;
  max-width: 300px;
  max-height: 300px;
  justify-self: flex-start;
  margin-bottom: 10px;
`;

let Subtitle = styled.div`
  color: var(--white);
  opacity: 0.3;
  font-size: 1em;
`;

let Title = styled.div`
  font-family: Queens;
  font-size: 1.2em;
  line-height: 1.2em;
  margin-bottom: 5px;
`;

let TextBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  justify-self: flex-start;
`;

const LocationSection = ({ image, subtitle, title }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={image} alt="" style={{ borderRadius: "10px" }}></img>
      </ImageContainer>
      <TextBox>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextBox>
    </Container>
  );
};

export default LocationSection;
