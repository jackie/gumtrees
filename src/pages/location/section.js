import * as React from "react";
import styled from "styled-components";
import { IoMdStopwatch } from "@react-icons/all-files/io/IoMdStopwatch";

const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

let ImageContainer = styled.div`
  display: flex;
  max-width: 300px;
  max-height: 300px;
  justify-self: flex-start;
  margin-bottom: 10px;
`;

let Subtitle = styled.div`
  align-self: center;
  color: var(--white);
  opacity: 0.3;
  font-size: 0.95em;
`;

let Title = styled.div`
  color: var(--white);
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

let LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;
`;

let StyledIcon = styled(IoMdStopwatch)`
  align-self: flex-start;
  margin-right: 8px;
  min-height: 20px;
  min-width: 20px;
  color: var(--white);
  opacity: 0.3;
`;

let Container = styled.a`
  background: var(--dark);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  &:hover ${StyledIcon} {
    opacity: 1;
    transition: 0.3s ease;
  }

  &:hover ${Subtitle} {
    opacity: 0.6;
    transition: 0.3s ease;
  }

  &:hover ${ImageContainer} {
    opacity: 0.7;
    transition: 0.3s ease;
  }

  &:hover ${Title} {
    color: var(--green);
    transition: 0.3s ease;
  }
`;

const LocationSection = ({ id, image, subtitle, title }) => {
  return (
    <Container href={id}>
      <ImageContainer>
        <img src={image} alt="" style={{ borderRadius: "10px" }}></img>
      </ImageContainer>
      <TextBox>
        <Title>{title}</Title>
        <LocationBox>
          <StyledIcon />
          <Subtitle>{subtitle}</Subtitle>
        </LocationBox>
      </TextBox>
    </Container>
  );
};

export default LocationSection;
