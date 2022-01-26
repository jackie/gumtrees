import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

let Action = styled(motion.a)`
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
  color: var(--white);

  @media (max-width: 800px) {
    width: 100%;
    justify-self: center;
  }
`;

const FramerButton = ({ action }) => {
  return (
    <Action
      href={action?.url ? action.url : "#"}
      onClick={action?.onClick ? action.onClick : () => false}
      initial={{ borderRadius: "8px" }}
      exit={{ borderRadius: "8px" }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      whileHover={{
        backgroundColor: "var(--green)",
        borderRadius: "30px",
      }}
      target={action?.target ? action.target : null}
    >
      {action?.title}
    </Action>
  );
};

export default FramerButton;
