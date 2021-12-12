import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

let Backdrop = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 29, 38, 0.8);
  z-index: 100;
  justify-content: center;
  align-items: center;
`;

let Container = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  padding: 30px;
  display: flex;
  flex-direction: column;
  background-color: var(--dark);
  max-width: 650px;
  max-height: 450px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.1);
`;

let Logos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <Backdrop
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Container>
            Save the date!
            <Logos>
              <a
                href="https://www.addevent.com/event/nR10739008+apple"
                title="Apple"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-apple-t1.png"
                  alt="Apple"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>
              <a
                href="https://www.addevent.com/event/nR10739008+google"
                title="Google"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-google-t1.png"
                  alt="Google"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>{" "}
              <a
                href="https://www.addevent.com/event/nR10739008+office365"
                title="Office 365"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-office365-t1.png"
                  alt="Office 365"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>{" "}
              <a
                href="https://www.addevent.com/event/nR10739008+outlook"
                title="Outlook"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-outlook-t1.png"
                  alt="Outlook"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>{" "}
              <a
                href="https://www.addevent.com/event/nR10739008+outlookcom"
                title="Outlook.com"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-outlookcom-t1.png"
                  alt="Outlook.com"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>{" "}
              <a
                href="https://www.addevent.com/event/nR10739008+yahoo"
                title="Yahoo"
                target="_blank"
                style={{ display: "inline" }}
              >
                <img
                  src="https://www.addevent.com/gfx/icon-emd-share-yahoo-t1.png"
                  alt="Yahoo"
                  width="45"
                  border="0"
                  style={{ display: "inline" }}
                ></img>
              </a>
            </Logos>
          </Container>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
