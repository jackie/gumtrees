import React from "react";
import styled from "styled-components";
import PaddedWrapper from "../../components/paddedWrapper";
import { motion } from "framer-motion";
import { locations } from "./_data";

const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

const variants = {
  offscreen: {
    y: 60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 1.6,
    },
  },
};

let Subtitle = styled(motion.h2)`
  font-size: 3.625em;
  font-weight: 500;
  margin-top: 20px;
  text-align: left;
  line-height: 1.2em;
  margin-bottom: 0.5em;
`;

let Description = styled(motion.div)`
  font-size: 1em;
  flex-shrink: 3;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: var(--secondary);
  text-align: left;
`;

let HeaderText = styled.div`
  width: 45%;
`;

let Info = styled(motion.div)`
  width: 45%;
`;

let InfoTitle = styled.h3`
  font-weight: 300;
`;

let HeaderContent = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  position: relative;
  display: flex;
  color: var(--white);
  flex-direction: column;

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(transparent 0, var(--dark) 60%);
  }
`;

let StyledPaddedWrapper = styled(PaddedWrapper)`
  justify-content: space-between;
  align-self: flex-end;
  margin-bottom: 4em;
  position: relative;
`;

const LocationSection = ({ id }) => {
  let search = locations.filter((item) => item.id === id)[0];
  if (!search) return;
  return (
    <HeaderContent
      initial="offscreen"
      whileInView="onscreen"
      variants={containerVariants}
      style={{ backgroundImage: `url(${search.image})` }}
    >
      <StyledPaddedWrapper flexDirection="row">
        <HeaderText>
          <Subtitle variants={variants}>{search.title}</Subtitle>
          <Description variants={variants}>{search.description}</Description>
        </HeaderText>
        <Info variants={variants}>
          <InfoTitle>email</InfoTitle>
          <InfoTitle>phone number</InfoTitle>
          <InfoTitle>website</InfoTitle>
        </Info>
      </StyledPaddedWrapper>
    </HeaderContent>
  );
};

export default LocationSection;
