import * as React from "react";
import styled from "styled-components";
import "../assets/styles/global.css";
import PaddedWrapper from "../components/paddedWrapper";
import Section from "../components/section";
import couple from "../assets/images/jackie-chris.png";
import polperro from "../assets/images/polperro.png";
import accommodation from "../assets/images/accommodation.png";
import { motion } from "framer-motion";

const containerVariants = {
  onscreen: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.3,
    }
  },
  offscreen: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    }
  }
};

const variants = {
  onscreen: {
    y: 0,
    opacity: 1,
  },
  offscreen: {
    y: 50,
    opacity: 0,
  }
};

let Header = styled.div``;

let IntroTitle = styled(motion.div)`
  font-size: 1em;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  margin-bottom: 20px;
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
  opacity: 0.4;
  margin-top: 40px;
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
  color: white;
`;

const HeaderSection = () => {
  return (
    <Header>
      <Content
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariants}
      >
        <IntroTitle variants={variants}>
          Jackie &amp; Chris
          <br />
          Invite you to join them
        </IntroTitle>
        <Title variants={variants}>Beneath the Gum Trees</Title>
        <svg
          width="600"
          height="54"
          viewBox="0 0 600 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M359.081 24.664C279.232 25.6231 199.343 29.4278 119.842 36.2287C82.0441 39.4627 38.1499 39.0584 1.49101 50.0841C-0.335611 50.639 0.0122627 52.3035 0.0517999 52.47C0.130874 52.8108 0.463072 53.9442 1.91804 53.9997C2.07619 54.0076 3.19106 53.8491 3.61806 53.7936C14.4433 52.3669 25.2291 50.7024 36.0623 49.3549C73.4645 44.6863 110.977 41.159 148.546 38.0677C198.41 33.9618 248.701 31.774 298.7 30.0619C326.068 29.1266 354.092 30.371 381.546 28.437C391.628 28.3815 401.71 28.3737 411.792 28.4054C453.939 28.556 496.038 30.1571 538.114 32.3528C551.643 33.0582 561.962 33.8191 575.207 34.3344C580.237 34.5325 588.215 34.6673 593.766 34.7545C594.581 34.7703 596.66 34.786 597.522 34.794C597.609 34.8098 597.696 34.8098 597.791 34.8098C598.123 34.8098 598.281 34.786 598.313 34.786C600.195 34.5086 600.021 32.7252 599.974 32.4557C599.966 32.4002 599.681 30.8942 598.06 30.8387C597.673 30.8228 594.897 30.8071 593.829 30.7913C588.31 30.7041 580.363 30.5693 575.358 30.3791C562.137 29.8639 551.825 29.1029 538.319 28.3975C496.18 26.2019 454.018 24.5928 411.808 24.4422C406.652 24.4263 401.489 24.4184 396.333 24.4263C396.159 23.9745 395.772 23.4672 394.918 23.2453C394.119 23.0392 388.402 22.8569 386.196 22.6746C369.867 21.3271 370.349 21.3905 352.384 20.2887C325.174 18.6163 321.031 18.2356 292.73 17.5302C241.324 16.2461 189.894 16.3493 138.48 16.4761C113.097 16.5474 85.9187 18.2674 60.1483 15.0572C68.6409 14.0585 77.1652 13.3293 85.6736 12.497C114.726 9.65933 143.801 7.89958 172.972 6.66305C242.945 3.69857 313.028 2.51762 382.978 6.5601C368.088 6.70278 353.206 7.03559 338.316 7.2496C277.706 8.13736 216.51 7.47161 156.026 12.0769C154.943 12.1641 154.128 13.1152 154.207 14.2011C154.286 15.295 155.243 16.1114 156.327 16.0322C216.731 11.4269 277.84 12.1006 338.372 11.2128C360.861 10.8878 383.341 10.3013 405.83 10.4757C413.548 10.5391 421.265 10.8245 428.983 10.9196C430.509 10.9434 434.439 11.2446 435.001 11.1178C436.242 10.8404 436.511 9.92085 436.59 9.46904C436.629 9.19955 436.756 7.64596 434.858 7.09111C421.906 3.30228 398.002 3.47666 385.413 2.73157C314.602 -1.46944 243.648 -0.296356 172.806 2.69984C143.564 3.94429 114.417 5.71199 85.2861 8.55758C75.1093 9.54839 64.9087 10.4044 54.7713 11.7202C53.1345 11.9342 49.4576 12.2434 47.6784 12.5684C46.9351 12.7032 46.3974 12.8933 46.1601 13.028C45.235 13.5512 45.0689 14.3121 45.0689 14.8273C45.061 15.2236 45.2271 16.6187 47.1644 16.9992C76.6829 22.7934 108.803 20.5186 138.487 20.4393C189.87 20.3125 241.26 20.2093 292.635 21.4934C320.865 22.1988 324.992 22.5716 352.146 24.244C354.827 24.4026 357.096 24.5451 359.081 24.664Z"
            fill="#50B04E"
          />
        </svg>
        <Subtitle variants={variants}>February 3, 2023</Subtitle>
        <FollowUp variants={variants}>Formal invitations to follow</FollowUp>
      </Content>
    </Header>
  );
};

const IndexPage = () => {
  return (
    <>
      <HeaderSection />
      <PaddedWrapper>
        <Section
          number="01"
          subtitle="the date"
          title="February 3, 2023"
          description="2/3/23 or 3/2/23? Whatever way you say it, one thing is for sure, it’s summer in Australia. So bring your bathers, sunscreen and hats because we are going to kick off 2023 like nothing else."
          action="Add to Calendar"
          image={couple}
        />
        <Section
          number="02"
          subtitle="the venue"
          title="Polperro Winery"
          description="Polperro Vineyard Dining is nestled among the vines and shaded by ancient Angophora Myrtaceae, Polperro is a stunning 25 acre property in Red Hill, the heart of the renown wine region – the Mornington Peninsula."
          action="Polperro"
          image={polperro}
        />
        <Section
          number="03"
          subtitle="the location"
          title="Mornington Peninsula"
          description="A scenic 45 minutes (ish) drive from Melbourne.
          Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too."
          action="Location"
          image={accommodation}
        />
      </PaddedWrapper>
    </>
  );
};

export default IndexPage;
