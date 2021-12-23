import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "./_theme";

const imageVariants = {
  offscreen: {
    y: -60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 1.2,
    },
  },
};

const numberVariants = {
  offscreen: {
    y: 60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeInOut",
      duration: 0.8,
      delay: 0.4,
    },
  },
};

let Container = styled.div`
  background: var(--dark);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: auto auto 12.5em;

  @media (max-width: ${theme.breakpoints.small}) {
    flex-direction: column;
    margin-bottom: 10em;
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

let ImageContainer = styled(motion.div)`
  width: 45%;
  position: relative;
  justify-self: flex-start;

  @media (max-width: ${theme.breakpoints.small}) {
    width: 100%;
    justify-self: center;
    margin-top: 3em;
  }
`;

let NumberContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

let Subtitle = styled.div`
  color: var(--green);
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
  color: var(--secondary);
`;

let TextBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 45%;
  justify-self: flex-end;

  @media (max-width: 800px) {
    width: 100%;
    justify-self: center;
  }
`;

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
      href={action.url ? action.url : "#"}
      onClick={action.onClick ? action.onClick : () => false}
      initial={{ borderRadius: "8px" }}
      exit={{ borderRadius: "8px" }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      whileHover={{
        backgroundColor: "var(--green)",
        borderRadius: "30px",
      }}
    >
      {action.title}
    </Action>
  );
};

const Section = ({
  number,
  image,
  subtitle,
  title,
  description,
  action,
  // setShowModal,
}) => {
  return (
    <Container>
      <TextBox>
        <NumberContainer
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={numberVariants}>
            <Number>{number}</Number>
          </motion.div>
        </NumberContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <FramerButton action={action} />
      </TextBox>
      <ImageContainer
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={imageVariants}>
          <img src={image} alt="" style={{ borderRadius: "30px" }}></img>
        </motion.div>
      </ImageContainer>
    </Container>
  );
};

export default Section;
