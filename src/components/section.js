import * as React from "react";
import styled from "styled-components";
import "../assets/styles/global.css";
import { motion } from "framer-motion";

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
  color: #50b04e;
  font-size: 1.125em;
  text-transform: uppercase;
  letter-spacing: 0.5em;
`;

let Title = styled.div`
  font-family: Queens;
  font-size: 4em;
  line-height: 1.2em;
  margin-bottom: 20px;
`;

let Description = styled.div`
  font-size: 1em;
  flex-shrink: 3;
  font-weight: 300;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
`;

let TextBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 45%;
  justify-self: flex-end;
`;

let Action = styled(motion.div)`
  background-color: #27333a;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  font-size: 0.825em;
  letter-spacing: 0.05em;
  width: 50%;
  text-transform: uppercase;
  cursor: pointer;
`;

const FramerButton = ({ children }) => {
  return (
    <Action
      initial={{ borderRadius: "8px" }}
      exit={{ borderRadius: "8px" }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      whileHover={{
        backgroundColor: "#50B04E",
        borderRadius: "30px",
      }}
    >
      {children}
    </Action>
  );
};

const Section = ({ number, image, subtitle, title, description, action }) => {
  return (
    <Container>
      <TextBox>
        <Number>{number}</Number>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FramerButton>{action}</FramerButton>
      </TextBox>
      <Image src={image}></Image>
    </Container>
  );
};

export default Section;
