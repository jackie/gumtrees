import React, { useState } from "react";
import styled from "styled-components";
import "../assets/styles/global.css";
import PaddedWrapper from "../components/paddedWrapper";
import Section from "../components/section";
import couple from "../assets/images/jackie-chris.jpg";
import polperro from "../assets/images/polperro.jpg";
import location from "../assets/images/location.jpg";
import { motion } from "framer-motion";
import Modal from "../components/modal";
import Lottie from "react-lottie";
import * as animationData from "../animations/scrollDown.json";

const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.05,
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

let IntroTitle = styled(motion.div)`
  color: var(--secondary);
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

let Title = styled(motion.h1)`
  text-align: center;
  font-size: 5.5em;
  font-weight: 500;
  line-height: 1em;
  margin-bottom: 30px;
`;

let Subtitle = styled(motion.h2)`
  font-size: 3.625em;
  font-weight: 500;
  margin-top: 20px;
`;

let FollowUp = styled(motion.div)`
  color: var(--secondary);
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: 20px;
`;

let Content = styled(motion.div)`
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 90%);
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--white);
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(80, 176, 78, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(80, 176, 78, 1)",
  },
};

const HeaderSection = () => {
  return (
    <Header>
      <Content
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <IntroTitle variants={variants}>
          Jackie &amp; Chris
          <br />
          Invite you to join them
        </IntroTitle>
        <Title variants={variants}>Beneath the Gum Trees</Title>
        <motion.svg
          JustifyContent="flex-end"
          xmlns="http://www.w3.org/2000/svg"
          width="380"
          height="60"
          viewBox="0 0 380 60"
          className="item"
        >
          <motion.path
            d="M47.165 42.69C49.7649 41.282 51.8309 39.772 54.0339 39.538C57.3839 39.181 60.85 38.008 61.462 44.289C62.02 50.008 67.926 51.967 73.97 49.778C83.263 46.413 92.802 43.451 101.595 39.051C117.359 31.164 126.356 37.259 132.665 46.979C137.731 54.785 141.495 55.712 149.608 51.653C153.251 49.83 156.944 48.106 160.613 46.334C170.64 41.494 180.202 40.509 188.882 49.245C192.69 53.078 197.108 52.972 201.763 50.53C208.988 46.739 216.098 42.639 223.608 39.5C240.419 32.472 256.384 34.721 270.439 46.177C274.725 49.67 277.917 49.263 281.845 46.896C284.627 45.219 287.575 43.678 289.987 41.558C297.87 34.625 305.922 27.818 313.204 20.289C323.568 9.576 336.872 6.69 350.654 3.347C359.66 1.163 369.032 4.388 377.556 0.0590041C378.097 -0.215996 379.173 0.549999 380 0.831999C379.394 1.495 378.894 2.574 378.166 2.754C373.867 3.824 369.556 4.988 365.174 5.56C352.83 7.17 340.454 8.64799 329.454 15.049C324.349 18.019 319.106 20.992 314.677 24.823C305.079 33.123 295.769 41.78 286.728 50.678C281.369 55.953 274.015 57.299 268.252 51.534C260.315 43.596 250.122 39.623 238.635 41.38C229.64 42.756 221.093 45.873 213.158 50.437C210.108 52.19 207.193 54.223 204.012 55.692C196.971 58.943 190.699 58.929 184.552 52.779C178.155 46.379 171.415 46.793 161.107 52.573C159.551 53.446 158.36 55.049 156.75 55.726C144.462 60.891 141.45 62.84 132.185 53.055C129.597 50.322 126.966 47.611 124.159 45.107C119.489 40.942 113.99 39.929 108.193 42.176C99.5239 45.537 90.9699 49.191 82.3829 52.759C79.699 53.874 77.1749 55.557 74.394 56.215C66.263 58.14 62.533 56.247 57.087 48.084C55.611 45.871 54.688 45.303 51.7799 47.169C45.9399 50.919 39.5059 53.859 33.0739 56.564C27.3879 58.956 24.61 57.783 21.192 52.886C16.27 45.835 16.2689 45.833 10.1989 51.273C9.73195 51.691 9.31695 52.166 8.85895 52.595C6.47895 54.823 3.60295 59 0.69495 55.143C-1.72605 51.933 2.77195 49.267 5.14495 47.009C6.60995 45.614 8.57595 44.739 10.3219 43.638C15.8279 40.166 17.7359 39.912 21.8779 44.997C27.7149 52.165 32.6759 52.952 41.4729 46.497C43.1339 45.278 44.949 44.266 47.165 42.69Z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
        {/* <motion.svg
          variants={variants}
          width="751"
          height="37"
          viewBox="0 0 751 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M133.514 13.398C125.316 14.9325 117.621 17.154 110.681 20.2686C109.925 20.6122 109.696 21.093 109.628 21.2991C109.513 21.6656 109.559 22.0093 109.742 22.3299C109.857 22.536 110.04 22.788 110.429 22.9483C110.704 23.0628 111.414 23.1543 112.353 23.1314C113.956 23.1085 116.43 22.9254 117.621 22.9254C121.697 22.9712 125.774 22.9481 129.85 23.0168C142.836 23.2458 145.103 23.429 161.798 23.2916C181.288 23.1313 200.824 22.8565 220.336 22.4442C158.318 25.8795 96.3903 29.8874 34.7837 33.6205C34.0966 33.6663 33.5699 34.2619 33.6157 34.949C33.6386 35.6589 34.2568 36.1857 34.9439 36.1399C178.7 27.4371 324.037 17.1768 468.893 16.5127C476.038 16.673 483.16 16.8332 490.26 16.9935C533.156 18.0012 576.074 19.2151 618.924 21.0931C632.871 21.7114 646.819 22.3985 660.789 23.0397C664.911 23.2229 669.057 23.4061 673.202 23.5893C676.546 23.7268 685.157 24.2307 686.37 24.2536C687.47 24.2765 687.745 23.2918 687.768 23.246C687.836 22.9254 687.79 22.5588 687.516 22.2153C687.447 22.1237 687.264 21.8718 686.851 21.7573C686.783 21.7573 686.462 21.7114 685.798 21.6427C651.353 18.8258 616.817 16.8791 582.212 15.6424C586.861 15.6882 591.51 15.7112 596.159 15.757C632.001 16.0318 667.934 17.0166 703.753 15.757C711.906 15.4822 720.082 15.1614 728.213 14.7721C733.686 14.5202 747.771 14.8408 749.763 14.2454C750.679 13.9935 750.885 13.3521 750.908 13.0315C750.931 12.6651 750.863 12.2528 750.45 11.8864C750.267 11.7032 749.695 11.4056 748.618 11.1766C713.464 3.55018 672.331 5.70282 636.536 3.57292C539.316 -2.26712 442.44 1.62641 345.244 5.17624C261.354 8.24512 177.463 8.40539 93.619 12.5736C62.9302 14.0851 31.2797 12.3447 1.02608 18.116C0.339013 18.2534 -0.0962711 18.8944 0.0182392 19.5815C0.155652 20.2685 0.819868 20.7267 1.50693 20.5893C31.6231 14.8409 63.1593 16.6043 93.7336 15.0927C106.994 14.4286 120.254 13.879 133.514 13.398ZM392.88 15.0927C341.511 14.2912 290.142 13.8788 238.727 14.1308C203.458 14.2911 152.065 7.58101 117.025 20.4062C117.277 20.4062 117.483 20.4062 117.666 20.4062C121.743 20.452 125.819 20.406 129.896 20.4976C142.859 20.7266 145.126 20.9098 161.776 20.7724C204.351 20.406 247.04 19.4901 289.592 18.0701C324.06 16.925 358.482 15.8943 392.88 15.0927ZM740.373 12.1383C707.143 6.32115 669.469 8.06196 636.375 6.09238C539.247 0.25234 442.44 4.14559 345.336 7.69541C301.936 9.29856 258.56 10.1001 215.206 11.0849C223.52 11.4055 231.467 11.6345 238.727 11.6116C312.219 11.2451 385.689 12.2301 459.182 13.7874C504.826 13.1004 550.47 12.8485 596.182 13.2149C632.001 13.5126 667.865 14.4745 703.684 13.2378C711.815 12.963 719.968 12.6422 728.098 12.2529C730.869 12.1384 735.885 12.1612 740.373 12.1383Z"
            fill="#50B04E"
          />
        </motion.svg> */}
        <Subtitle variants={variants}>February 3, 2023</Subtitle>
        <FollowUp variants={variants}>Formal invitations to follow</FollowUp>
        <motion.div variants={variants}>
          <Lottie options={defaultOptions} height={40} width={40} />
        </motion.div>
      </Content>
    </Header>
  );
};

const IndexPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <HeaderSection />
      <PaddedWrapper>
        <Section
          number="01"
          subtitle="the date"
          title="February 3, 2023"
          description="Which ever way you say it, 2/3/23 or 3/2/23?, one thing is for sure, it’s summer in Australia. So bring your bathers, sunscreen and hats and be ready to slip slop slap, because we are going to kick off 2023 like nothing else."
          action={{
            onClick: (e) => {
              e.preventDefault();
              return setShowModal(!showModal);
            },
            title: "Add to calendar",
          }}
          image={couple}
        />
        <Section
          number="02"
          subtitle="the venue"
          title="Polperro Winery"
          description="Polperro Vineyard Dining is nestled among the vines and shaded by ancient Angophora Myrtaceae, Polperro is a stunning 25 acre property in Red Hill, the heart of the renown wine region – the Mornington Peninsula."
          action={{ url: "/venue", title: "Polperro" }}
          image={polperro}
        />
        <Section
          number="03"
          subtitle="the location"
          title="Mornington Peninsula"
          description="A scenic 45 minutes (ish) drive from Melbourne.
          Situated south-east of Melbourne, Mornington Peninsula is a region filled with golden beaches, hot springs, boutique wineries, stunning clifftop walks and some pretty amazing food too."
          action={{ url: "/location", title: "Location" }}
          image={location}
        />
      </PaddedWrapper>
    </>
  );
};

export default IndexPage;
