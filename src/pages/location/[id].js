import React from "react";
import styled from "styled-components";
import { IoMdStopwatch } from "@react-icons/all-files/io/IoMdStopwatch";
import { motion } from "framer-motion";

import { locations } from "./data";
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

let Header = styled.div``;

let Subtitle = styled(motion.h2)`
  font-size: 3.625em;
  font-weight: 500;
  margin-top: 20px;
  text-align: left;
  width: 45%;
  line-height: 1.2em;
`;

let Description = styled(motion.div)`
  font-size: 1em;
  flex-shrink: 3;
  font-weight: 300;
  letter-spacing: 0.03em;
  color: var(--secondary);
  text-align: left;
  width: 45%;
  margin-top: 20px;
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

let StyledSvg = styled.div`
  margin-left: 350px;
`;

const LocationSection = ({ id }) => {
  console.log("dgksjhdgjksdg", id);
  let search = locations.filter((item) => item.id === id)[0];
  console.log(search);
  return (
    <Header>
      <Content
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariants}
      >
        <HeaderText>
          <Subtitle variants={variants}>{search.title}</Subtitle>
          <Description variants={variants}>{search.subtitle}</Description>
        </HeaderText>
      </Content>
    </Header>
  );
};

export default LocationSection;
