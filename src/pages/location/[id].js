import React from "react";
import styled from "styled-components";
import PaddedWrapper from "../../components/paddedWrapper";
import { motion } from "framer-motion";
import { locations } from "./_data";
import FramerButton from "../../components/button";
import theme from "../../components/layout/_theme";

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

  @media (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }
`;

let Info = styled(motion.div)`
  width: 45%;

  @media (max-width: ${theme.breakpoints.small}) {
    width: 100%;
  }
`;

let InfoRow = styled.div`
  margin-bottom: 30px;
`;

let InfoTitle = styled.h3`
  font-weight: 300;
`;

let InfoLink = styled.a`
  color: var(--secondary);
  transition: color 0.3s ease;

  &:hover {
    color: var(--green);
  }
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
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 90%);
  }

  @media (max-width: ${theme.breakpoints.small}) {
    height: auto;
    min-height: 100vh;
  }
`;

let StyledPaddedWrapper = styled(PaddedWrapper)`
  justify-content: space-between;
  align-self: flex-end;
  margin-bottom: 4em;
  position: relative;

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
  }
`;

let Action = styled(motion.a)`
  background-color: var(--green);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 0.825em;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--white);
  align-items: center;
  display: inline-flex;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    width: 100%;
    justify-self: center;
  }
`;

const BackButton = () => {
  return (
    <Action
      onClick={(e) => {
        e.preventDefault();
        return window.history.back();
      }}
      initial={{ borderRadius: "30px" }}
      exit={{ borderRadius: "30px" }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      whileHover={{
        backgroundColor: "var(--darkerGreen)",
        borderRadius: "30px",
      }}
    >
      &larr; Back
    </Action>
  );
};

const LocationSection = ({ id, action }) => {
  let search = locations.filter((item) => item.id === id)[0];
  if (!search) return;
  return (
    <HeaderContent
      initial="offscreen"
      whileInView="onscreen"
      variants={containerVariants}
      style={{ backgroundImage: `url(${search.imageBig})` }}
    >
      <StyledPaddedWrapper flexDirection="row">
        <HeaderText>
          <BackButton action={action} />
          <Subtitle variants={variants}>{search.title}</Subtitle>
          <Description variants={variants}>{search.description}</Description>
        </HeaderText>
        <Info variants={variants}>
          <InfoRow>
            <InfoTitle>website</InfoTitle>
            <InfoLink href={search.website}>{search.website}</InfoLink>
          </InfoRow>
          <InfoRow>
            <InfoTitle>email</InfoTitle>
            <InfoLink href={`mailto:${search.email}`}>{search.email}</InfoLink>
          </InfoRow>
          <InfoRow>
            <InfoTitle>phone number</InfoTitle>
            <InfoLink href={`tel:${search.tel}`}>{search.tel}</InfoLink>
          </InfoRow>
          <FramerButton
            action={{
              url: search.maps,
              title: "View in Google Maps",
              target: "_blank",
            }}
          />
        </Info>
      </StyledPaddedWrapper>
    </HeaderContent>
  );
};

export default LocationSection;
