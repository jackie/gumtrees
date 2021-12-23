import React from "react";
import styled from "styled-components";
import { BsChevronRight } from "@react-icons/all-files/bs/BsChevronRight";
import { BsChevronLeft } from "@react-icons/all-files/bs/BsChevronLeft";
import theme from "../components/_theme";
import { motion } from "framer-motion";

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

let StyledIconR = styled(BsChevronRight)`
  align-self: center;
  min-height: 36px;
  min-width: 36px;
  color: var(--white);
`;

let StyledIconL = styled(BsChevronLeft)`
  align-self: center;
  min-height: 36px;
  min-width: 36px;
  color: var(--white);
  opacity: 0.3;
`;

let Header = styled.div``;

let Title = styled(motion.h2)`
  text-align: center;
  font-size: 5.5em;
  font-weight: 500;
  line-height: 1em;
`;

let SubTitle = styled(motion.div)`
  text-align: center;
  font-size: 1.3em;
  font-weight: 300;
  line-height: 1em;
  color: var(--secondary);
  margin-top: 20px;
`;

let StyledNumbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 200px;
`;

let StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-top: 200px;
`;

let StyledHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

let NumberSelected = styled(motion.h2)`
  font-size: 3.625em;
  font-weight: 500;
  margin-top: 20px;
  text-align: left;
  line-height: 1.2em;
`;

let NumberToGo = styled(motion.h2)`
  font-size: 2.2em;
  font-weight: 500;
  margin-top: 20px;
  text-align: left;
  line-height: 1.2em;
  opacity: 0.3;
  margin-left: 10px;
`;

let HeaderText = styled.div`
  position: absolute;
  width: 55%;
`;

let Content = styled(motion.div)`
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 90%);
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
`;

const HeaderSection = () => {
  return (
    <Header>
      <Content
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariants}
      >
        <HeaderText>
          <StyledHeader>
            <StyledIconL />
            <StyledHeaderText>
              <Title variants={variants}>Polperro Winery</Title>
              <SubTitle variants={variants}>— Cellar Door</SubTitle>
            </StyledHeaderText>
            <StyledIconR />
          </StyledHeader>
          <StyledNumbers>
            <NumberSelected>01</NumberSelected>
            <NumberToGo>/ 13</NumberToGo>
          </StyledNumbers>
        </HeaderText>
      </Content>
    </Header>
  );
};

const Venue = () => {
  return (
    <>
      <HeaderSection />
    </>
  );
};

export default Venue;
