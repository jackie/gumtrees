import React, { useState } from "react";
import Modal from "../components/modal";
import styled from "styled-components";
import "../assets/styles/global.css";
import LocationSection from "../components/locationSection";
import Georges from "../assets/images/accomodations/Georges.jpg";
import HartsFarm from "../assets/images/accomodations/HartsFarm.jpg";
import HavenRedHill from "../assets/images/accomodations/HavenRedHill.jpg";
import Jackalope from "../assets/images/accomodations/Jackalope.jpg";
import PortPhillipEstate from "../assets/images/accomodations/PortPhillipEstate.jpg";
import Quattro from "../assets/images/accomodations/Quattro.jpg";
import RedHillFarm from "../assets/images/accomodations/RedHillFarm.jpg";
import TheCabin from "../assets/images/accomodations/TheCabin.jpg";
import Foxeys from "../assets/images/wineries/Foxeys.jpg";
import MainRidge from "../assets/images/wineries/MainRidge.jpg";
import Montalto from "../assets/images/wineries/Montalto.jpg";
import PtLeo from "../assets/images/wineries/PtLeo.jpg";
import Quealy from "../assets/images/wineries/Quealy.jpg";
import RedHillEstate from "../assets/images/wineries/RedHillEstate.jpg";
import TenMinutes from "../assets/images/wineries/TenMinutes.jpg";
import TGallent from "../assets/images/wineries/TGallent.jpg";
import Portsea from "../assets/images/todo/Portsea.jpg";
import Sorrento from "../assets/images/todo/Sorrento.jpg";
import Maze from "../assets/images/todo/Maze.jpg";
import Horse from "../assets/images/todo/Horse.jpg";
import CapeShank from "../assets/images/todo/CapeShank.jpg";
import BeachBox from "../assets/images/todo/BeachBox.jpg";
import HotSprings from "../assets/images/todo/HotSprings.jpg";
import SculpturePark from "../assets/images/todo/SculpturePark.jpg";

import { motion } from "framer-motion";

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

let Subtitle = styled(motion.h2)`
  font-size: 3.625em;
  font-weight: 500;
  margin-top: 20px;
  text-align: left;
  width: 45%;
  line-height: 1.2em;
`;

let Description = styled(motion.div)`
  font-weight: 300;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: left;
  width: 45%;
`;

let HeaderText = styled.div`
  width: 60%;
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

let LocationHeading = styled.div`
  font-family: Queens;
  font-size: 2.2em;
  line-height: 1.2em;
  display: flex;
  flex-direction: row;
  max-width: 1320px;
  align-items: center;
  justify-content: space-between;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
`;

let Container = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1320px;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 72px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 70px;
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
          <Subtitle variants={variants}>Mornginton Pennisula</Subtitle>
          <Description variants={variants}>
            A scenic 45 minutes (ish) drive from Melbourne. Situated south-east
            of Melbourne, Mornington Peninsula is a boot-shaped region filled
            with golden beaches, bubbling hot springs, boutique wineries, a
            stunning clifftop walk known as the Millionaire’s Walk and some
            pretty amazing food too.
          </Description>
        </HeaderText>
        <svg
          width="297"
          height="667"
          viewBox="0 0 297 667"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.722 655L4.95 650.104H3.762V655H1.242V642.436H5.958C6.93 642.436 7.758 642.61 8.442 642.958C9.126 643.294 9.636 643.756 9.972 644.344C10.32 644.92 10.494 645.568 10.494 646.288C10.494 647.116 10.254 647.866 9.774 648.538C9.294 649.198 8.58 649.654 7.632 649.906L10.638 655H7.722ZM3.762 648.214H5.868C6.552 648.214 7.062 648.052 7.398 647.728C7.734 647.392 7.902 646.93 7.902 646.342C7.902 645.766 7.734 645.322 7.398 645.01C7.062 644.686 6.552 644.524 5.868 644.524H3.762V648.214ZM22.0433 649.798C22.0433 650.158 22.0193 650.482 21.9713 650.77H14.6813C14.7413 651.49 14.9933 652.054 15.4373 652.462C15.8813 652.87 16.4273 653.074 17.0753 653.074C18.0113 653.074 18.6773 652.672 19.0733 651.868H21.7913C21.5033 652.828 20.9513 653.62 20.1353 654.244C19.3193 654.856 18.3173 655.162 17.1293 655.162C16.1693 655.162 15.3053 654.952 14.5373 654.532C13.7813 654.1 13.1873 653.494 12.7553 652.714C12.3353 651.934 12.1252 651.034 12.1252 650.014C12.1252 648.982 12.3353 648.076 12.7553 647.296C13.1753 646.516 13.7633 645.916 14.5193 645.496C15.2753 645.076 16.1453 644.866 17.1293 644.866C18.0773 644.866 18.9233 645.07 19.6673 645.478C20.4233 645.886 21.0053 646.468 21.4133 647.224C21.8333 647.968 22.0433 648.826 22.0433 649.798ZM19.4333 649.078C19.4213 648.43 19.1873 647.914 18.7313 647.53C18.2753 647.134 17.7173 646.936 17.0573 646.936C16.4333 646.936 15.9053 647.128 15.4733 647.512C15.0533 647.884 14.7953 648.406 14.6993 649.078H19.4333ZM23.2346 649.978C23.2346 648.97 23.4326 648.076 23.8286 647.296C24.2366 646.516 24.7886 645.916 25.4846 645.496C26.1806 645.076 26.9546 644.866 27.8066 644.866C28.4546 644.866 29.0726 645.01 29.6606 645.298C30.2486 645.574 30.7166 645.946 31.0646 646.414V641.68H33.6206V655H31.0646V653.524C30.7526 654.016 30.3146 654.412 29.7506 654.712C29.1866 655.012 28.5326 655.162 27.7886 655.162C26.9486 655.162 26.1806 654.946 25.4846 654.514C24.7886 654.082 24.2366 653.476 23.8286 652.696C23.4326 651.904 23.2346 650.998 23.2346 649.978ZM31.0826 650.014C31.0826 649.402 30.9626 648.88 30.7226 648.448C30.4826 648.004 30.1586 647.668 29.7506 647.44C29.3426 647.2 28.9046 647.08 28.4366 647.08C27.9686 647.08 27.5366 647.194 27.1406 647.422C26.7446 647.65 26.4206 647.986 26.1686 648.43C25.9286 648.862 25.8086 649.378 25.8086 649.978C25.8086 650.578 25.9286 651.106 26.1686 651.562C26.4206 652.006 26.7446 652.348 27.1406 652.588C27.5486 652.828 27.9806 652.948 28.4366 652.948C28.9046 652.948 29.3426 652.834 29.7506 652.606C30.1586 652.366 30.4826 652.03 30.7226 651.598C30.9626 651.154 31.0826 650.626 31.0826 650.014ZM50.7929 642.436V655H48.2729V649.654H42.8909V655H40.3709V642.436H42.8909V647.602H48.2729V642.436H50.7929ZM54.5513 643.84C54.1073 643.84 53.7353 643.702 53.4353 643.426C53.1473 643.138 53.0033 642.784 53.0033 642.364C53.0033 641.944 53.1473 641.596 53.4353 641.32C53.7353 641.032 54.1073 640.888 54.5513 640.888C54.9953 640.888 55.3613 641.032 55.6493 641.32C55.9493 641.596 56.0993 641.944 56.0993 642.364C56.0993 642.784 55.9493 643.138 55.6493 643.426C55.3613 643.702 54.9953 643.84 54.5513 643.84ZM55.7933 645.028V655H53.2733V645.028H55.7933ZM60.803 641.68V655H58.283V641.68H60.803ZM65.8128 641.68V655H63.2928V641.68H65.8128Z"
            fill="white"
          />
          <path
            d="M131.94 45.436V58H129.42V49.828L126.054 58H124.146L120.762 49.828V58H118.242V45.436H121.104L125.1 54.778L129.096 45.436H131.94ZM143.701 52.798C143.701 53.158 143.677 53.482 143.629 53.77H136.339C136.399 54.49 136.651 55.054 137.095 55.462C137.539 55.87 138.085 56.074 138.733 56.074C139.669 56.074 140.335 55.672 140.731 54.868H143.449C143.161 55.828 142.609 56.62 141.793 57.244C140.977 57.856 139.975 58.162 138.787 58.162C137.827 58.162 136.963 57.952 136.195 57.532C135.439 57.1 134.845 56.494 134.413 55.714C133.993 54.934 133.783 54.034 133.783 53.014C133.783 51.982 133.993 51.076 134.413 50.296C134.833 49.516 135.421 48.916 136.177 48.496C136.933 48.076 137.803 47.866 138.787 47.866C139.735 47.866 140.581 48.07 141.325 48.478C142.081 48.886 142.663 49.468 143.071 50.224C143.491 50.968 143.701 51.826 143.701 52.798ZM141.091 52.078C141.079 51.43 140.845 50.914 140.389 50.53C139.933 50.134 139.375 49.936 138.715 49.936C138.091 49.936 137.563 50.128 137.131 50.512C136.711 50.884 136.453 51.406 136.357 52.078H141.091ZM148.061 44.68V58H145.541V44.68H148.061ZM153.071 49.486C153.395 49.006 153.839 48.616 154.403 48.316C154.979 48.016 155.633 47.866 156.365 47.866C157.217 47.866 157.985 48.076 158.669 48.496C159.365 48.916 159.911 49.516 160.307 50.296C160.715 51.064 160.919 51.958 160.919 52.978C160.919 53.998 160.715 54.904 160.307 55.696C159.911 56.476 159.365 57.082 158.669 57.514C157.985 57.946 157.217 58.162 156.365 58.162C155.621 58.162 154.967 58.018 154.403 57.73C153.851 57.43 153.407 57.046 153.071 56.578V58H150.551V44.68H153.071V49.486ZM158.345 52.978C158.345 52.378 158.219 51.862 157.967 51.43C157.727 50.986 157.403 50.65 156.995 50.422C156.599 50.194 156.167 50.08 155.699 50.08C155.243 50.08 154.811 50.2 154.403 50.44C154.007 50.668 153.683 51.004 153.431 51.448C153.191 51.892 153.071 52.414 153.071 53.014C153.071 53.614 153.191 54.136 153.431 54.58C153.683 55.024 154.007 55.366 154.403 55.606C154.811 55.834 155.243 55.948 155.699 55.948C156.167 55.948 156.599 55.828 156.995 55.588C157.403 55.348 157.727 55.006 157.967 54.562C158.219 54.118 158.345 53.59 158.345 52.978ZM167.178 58.162C166.218 58.162 165.354 57.952 164.586 57.532C163.818 57.1 163.212 56.494 162.768 55.714C162.336 54.934 162.12 54.034 162.12 53.014C162.12 51.994 162.342 51.094 162.786 50.314C163.242 49.534 163.86 48.934 164.64 48.514C165.42 48.082 166.29 47.866 167.25 47.866C168.21 47.866 169.08 48.082 169.86 48.514C170.64 48.934 171.252 49.534 171.696 50.314C172.152 51.094 172.38 51.994 172.38 53.014C172.38 54.034 172.146 54.934 171.678 55.714C171.222 56.494 170.598 57.1 169.806 57.532C169.026 57.952 168.15 58.162 167.178 58.162ZM167.178 55.966C167.634 55.966 168.06 55.858 168.456 55.642C168.864 55.414 169.188 55.078 169.428 54.634C169.668 54.19 169.788 53.65 169.788 53.014C169.788 52.066 169.536 51.34 169.032 50.836C168.54 50.32 167.934 50.062 167.214 50.062C166.494 50.062 165.888 50.32 165.396 50.836C164.916 51.34 164.676 52.066 164.676 53.014C164.676 53.962 164.91 54.694 165.378 55.21C165.858 55.714 166.458 55.966 167.178 55.966ZM183.642 48.028V58H181.104V56.74C180.78 57.172 180.354 57.514 179.826 57.766C179.31 58.006 178.746 58.126 178.134 58.126C177.354 58.126 176.664 57.964 176.064 57.64C175.464 57.304 174.99 56.818 174.642 56.182C174.306 55.534 174.138 54.766 174.138 53.878V48.028H176.658V53.518C176.658 54.31 176.856 54.922 177.252 55.354C177.648 55.774 178.188 55.984 178.872 55.984C179.568 55.984 180.114 55.774 180.51 55.354C180.906 54.922 181.104 54.31 181.104 53.518V48.028H183.642ZM188.649 49.576C188.973 49.048 189.393 48.634 189.909 48.334C190.437 48.034 191.037 47.884 191.709 47.884V50.53H191.043C190.251 50.53 189.651 50.716 189.243 51.088C188.847 51.46 188.649 52.108 188.649 53.032V58H186.129V48.028H188.649V49.576ZM198.932 47.884C200.12 47.884 201.08 48.262 201.812 49.018C202.544 49.762 202.91 50.806 202.91 52.15V58H200.39V52.492C200.39 51.7 200.192 51.094 199.796 50.674C199.4 50.242 198.86 50.026 198.176 50.026C197.48 50.026 196.928 50.242 196.52 50.674C196.124 51.094 195.926 51.7 195.926 52.492V58H193.406V48.028H195.926V49.27C196.262 48.838 196.688 48.502 197.204 48.262C197.732 48.01 198.308 47.884 198.932 47.884ZM214.576 52.798C214.576 53.158 214.552 53.482 214.504 53.77H207.214C207.274 54.49 207.526 55.054 207.97 55.462C208.414 55.87 208.96 56.074 209.608 56.074C210.544 56.074 211.21 55.672 211.606 54.868H214.324C214.036 55.828 213.484 56.62 212.668 57.244C211.852 57.856 210.85 58.162 209.662 58.162C208.702 58.162 207.838 57.952 207.07 57.532C206.314 57.1 205.72 56.494 205.288 55.714C204.868 54.934 204.658 54.034 204.658 53.014C204.658 51.982 204.868 51.076 205.288 50.296C205.708 49.516 206.296 48.916 207.052 48.496C207.808 48.076 208.678 47.866 209.662 47.866C210.61 47.866 211.456 48.07 212.2 48.478C212.956 48.886 213.538 49.468 213.946 50.224C214.366 50.968 214.576 51.826 214.576 52.798ZM211.966 52.078C211.954 51.43 211.72 50.914 211.264 50.53C210.808 50.134 210.25 49.936 209.59 49.936C208.966 49.936 208.438 50.128 208.006 50.512C207.586 50.884 207.328 51.406 207.232 52.078H211.966Z"
            fill="white"
          />
          <path
            d="M83 0C90.875 0 98 6.118 98 15.58C98 21.888 92.9938 29.355 83 38C73.0063 29.355 68 21.888 68 15.58C68 6.118 75.125 0 83 0Z"
            fill="white"
          />
          <circle cx="83" cy="14" r="6" fill="#50B04E" />
          <circle
            cx="83"
            cy="14"
            r="7"
            stroke="#0B1D26"
            stroke-opacity="0.9"
            stroke-width="2"
          />
          <path
            d="M100 597C107.875 597 115 603.118 115 612.58C115 618.888 109.994 626.355 100 635C90.0063 626.355 85 618.888 85 612.58C85 603.118 92.125 597 100 597Z"
            fill="white"
          />
          <circle cx="100" cy="611" r="6" fill="#50B04E" />
          <circle
            cx="100"
            cy="611"
            r="7"
            stroke="#0B1D26"
            stroke-opacity="0.9"
            stroke-width="2"
          />
          <path
            opacity="0.5"
            d="M81.4155 69C78.3676 85.1175 92.7756 82.6165 102.196 82.6165C111.617 82.6165 131.566 80.1155 135.168 87.8964C138.77 95.6773 155.949 114.018 169.526 109.85C183.102 105.681 192.8 128.746 204.437 143.752C216.074 158.758 234.639 150.143 249.601 155.423C264.563 160.703 274.815 186.547 288.668 197.662C302.522 208.778 284.512 214.891 288.668 236.845C292.825 258.798 287.837 257.13 284.512 266.023C281.187 274.915 284.512 284.364 284.512 300.481C284.512 316.599 280.91 348.556 263.732 350.223C246.553 351.89 259.575 365.785 263.732 373.288C267.888 380.791 270.936 394.685 270.936 409.691C270.936 424.697 263.732 461.934 249.601 461.934C235.47 461.934 234.639 489.167 231.037 503.895C227.435 518.624 218.014 537.798 200.281 537.242C182.548 536.686 176.73 540.855 173.682 549.747C170.634 558.639 163.153 564.475 155.949 572.256C148.745 580.037 156.503 580.593 145.42 589.485C136.554 596.599 141.726 617.459 145.42 627C147.613 637.167 146.5 657.2 124.5 656C102.5 654.8 101 659.833 103 662.5"
            stroke="white"
            stroke-width="6"
            stroke-linecap="round"
          />
          <circle cx="83" cy="58" r="10" fill="white" />
          <circle
            cx="83"
            cy="58"
            r="11"
            stroke="#0B1D26"
            stroke-opacity="0.6"
            stroke-width="2"
          />
          <circle cx="100" cy="655" r="10" fill="white" />
          <circle
            cx="100"
            cy="655"
            r="11"
            stroke="#0B1D26"
            stroke-opacity="0.6"
            stroke-width="2"
          />
        </svg>
      </Content>
    </Header>
  );
};

const Location = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <HeaderSection />
      <LocationHeading> Accomodations</LocationHeading>
      <Container>
        <LocationSection
          subtitle="2 min from Polperro"
          title="Prot Phillip Estate"
          image={PortPhillipEstate}
        />
        <LocationSection
          subtitle="9 min from Polperro"
          title="Harts Farm"
          image={HartsFarm}
        />
        <LocationSection
          subtitle="4 min from Polperro"
          title="Havent Hill"
          image={HavenRedHill}
        />
        <LocationSection
          subtitle="3 min from Polperro"
          title="Red Hill Farm"
          image={RedHillFarm}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="Quattro Hotel"
          image={Quattro}
        />
        <LocationSection
          subtitle="11 min from Polperro"
          title="George's on Arthur's"
          image={Georges}
        />
        <LocationSection
          subtitle="7 min from Polperro"
          title="Jackalope Hotel"
          image={Jackalope}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="The Cabin @ Red Hill"
          image={TheCabin}
        />
      </Container>
      <LocationHeading> Cellar Door’s & Restaurants</LocationHeading>
      <Container>
        <LocationSection
          subtitle="6 min from Polperro"
          title="Montalto"
          image={Montalto}
        />
        <LocationSection
          subtitle="11 min from Polperro"
          title="Main Ridge"
          image={MainRidge}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="Ten Minutes by Traktor"
          image={TenMinutes}
        />
        <LocationSection
          subtitle="6 min from Polperro"
          title="Foxey's Hangout"
          image={Foxeys}
        />
        <LocationSection
          subtitle="5 min from Polperro"
          title="Red Hill Estate"
          image={RedHillEstate}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="T'Gallent"
          image={TGallent}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="Quealy "
          image={Quealy}
        />
        <LocationSection
          subtitle="8 min from Polperro"
          title="Pt. Leo Estate"
          image={PtLeo}
        />
      </Container>
      <LocationHeading> Things to do</LocationHeading>
      <Container>
        <LocationSection
          subtitle="23 min from Polperro"
          title="Pennisula Hot Springs"
          image={HotSprings}
        />
        <LocationSection
          subtitle="36 min from Polperro"
          title="Portsea Pub"
          image={Portsea}
        />
        <LocationSection
          subtitle="33 min from Polperro"
          title="Sorrento rock pools"
          image={Sorrento}
        />
        <LocationSection
          subtitle="18 min from Polperro"
          title="Mt Martha Beach Boxes"
          image={BeachBox}
        />
        <LocationSection
          subtitle="7 min from Polperro"
          title="Ashcombe Maze"
          image={Maze}
        />
        <LocationSection
          subtitle="22 min from Polperro"
          title="Capee Shank Lighthouse"
          image={CapeShank}
        />
        <LocationSection
          subtitle="25 min from Polperro"
          title="Gunnamatta Twilight Ride"
          image={Horse}
        />
        <LocationSection
          subtitle="26 min from Polperro"
          title="McClelland Sculpture Park"
          image={SculpturePark}
        />
      </Container>
    </>
  );
};

export default Location;
