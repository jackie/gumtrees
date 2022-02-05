import React from "react";
import styled from "styled-components";
import homeHeader from "../assets/images/header.jpg";
import locationHeader from "../assets/images/header-location.jpg";
import venueHeader from "../assets/images/header-venue.jpg";
import Nav from "./layout/nav";
import { motion } from "framer-motion";
import Footer from "./layout/footer";

import "../assets/styles/global.css";

const Wrapper = styled(motion.div)`
  background: var(--dark) none no-repeat bottom center/cover;
  height: 100vh;
  position: relative;

  &:before {
    content: "";
    display: block;
    background: linear-gradient(
      330.24deg,
      rgba(11, 29, 38, 0) 31.06%,
      #0b1d26 108.93%
    );
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const headerImage = (route) => {
  switch (route) {
    case "location":
      return locationHeader;
    case "venue":
      return venueHeader;
    default:
      return homeHeader;
  }
};

const containerVariants = {
  initial: {
    opacity: 0,
    y: -30,
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeInOut",
      duration: 1.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const Layout = ({ location, path, children }) => {
  return (
    <>
      <Nav />
      <Wrapper
        style={{
          backgroundImage: `url(${headerImage(
            location.pathname.split("/")[1]
          )}`,
        }}
        key={location.pathname}
        initial="initial"
        variants={containerVariants}
        exit="exit"
        animate="visible"
      >
        {children}
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
