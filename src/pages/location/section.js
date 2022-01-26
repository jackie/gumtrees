import React from "react";
import styled from "styled-components";
import { IoMdStopwatch } from "@react-icons/all-files/io/IoMdStopwatch";
import { motion } from "framer-motion";
import { Link } from "gatsby";

let Image = styled.img`
  display: flex;
  justify-self: flex-start;
  margin-bottom: 10px;
  max-width: 100%;
  border-radius: 10px;
  object-fit: contain;
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

let TextBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
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

let Container = styled(motion.div)`
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

  &:hover ${Image} {
    opacity: 0.7;
    transition: 0.3s ease;
  }

  &:hover ${Title} {
    color: var(--green);
    transition: 0.3s ease;
  }
`;

const exit = {
  exit: {
    opacity: 0,
  },
};

const LocationSection = ({ id, key, image, subtitle, title }) => {
  return (
    <a href={`/location/${id}`} key={`link-${id}`}>
      <Container key={key} {...exit}>
        <Image src={image} alt="" />
        <TextBox>
          <Title>{title}</Title>
          <LocationBox>
            <StyledIcon />
            <Subtitle>{subtitle}</Subtitle>
          </LocationBox>
        </TextBox>
      </Container>
    </a>
  );
};

export default LocationSection;
