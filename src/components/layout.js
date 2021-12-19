import * as React from "react";
import styled from "styled-components";
import homeHeader from "../assets/images/header.jpg";
import locationHeader from "../assets/images/header-location.jpg";
import venueHeader from "../assets/images/header-venue.jpg";
import Nav from "./nav";

import "../assets/styles/global.css";

const Wrapper = styled.div`
  background: none no-repeat bottom center/cover;
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

const Content = styled.div`
  position: relative;
`;

let ItemText = styled.span`
  position: relative;
  color: var(--white);
`;

let Item = styled.a`
  display: flex;
  flex-direction: column;
  font-size: 0.825em;
  font-weight: 400;
  letter-spacing: 0.1em;
  color: var(--white);
  margin: 5px;
  padding: 20px 0 0 0;
  border-radius: 999px;
  text-transform: uppercase;

  &:hover ${ItemText} {
    transition: 0.3s ease;
    color: var(--green);
  }
`;

const Footer = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  margin-top: 120px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin-bottom: 100px;
  text-align: right;
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const FooterText = styled.div`
  font-size: 0.875em;
  color: var(--white);
  opacity: 0.3;
  margin-bottom: 105px;
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

const Layout = ({ location, children }) => {
  console.log(location.pathname.split("/")[1]);
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${headerImage(location.pathname.split("/")[1])}`,
      }}
    >
      <Nav>Date</Nav>
      <Content>{children}</Content>
      <Footer>
        <FooterLogo>
          <svg
            width="50"
            height="55"
            viewBox="0 0 50 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5231 36.5176C10.6333 36.5176 8.91089 36.2308 7.35597 35.657C5.82497 35.0833 4.50927 34.2585 3.40886 33.1828C2.30846 32.0831 1.45923 30.7922 0.861186 29.31C0.287062 27.804 0 26.1305 0 24.2898C0 22.449 0.287062 20.7756 0.861186 19.2696C1.43531 17.7396 2.24865 16.4128 3.30121 15.2892C4.35378 14.1657 5.59771 13.3051 7.03302 12.7074C8.46833 12.0859 10.0472 11.7751 11.7695 11.7751C12.559 11.7751 13.3005 11.8348 13.9943 11.9544C14.7119 12.0739 15.3459 12.1934 15.8961 12.313C16.4463 12.4325 16.8888 12.4923 17.2237 12.4923C17.7022 12.4923 18.1088 12.313 18.4437 11.9544H18.7667L19.0179 20.1302H18.5873C17.7022 17.644 16.6974 15.7674 15.5731 14.5004C14.4488 13.2094 13.2407 12.564 11.949 12.564C10.2027 12.564 8.83912 13.4724 7.85833 15.2892C6.90145 17.1061 6.42302 19.6521 6.42302 22.9272C6.42302 24.744 6.56655 26.4294 6.85361 27.9832C7.16459 29.5371 7.59519 30.8998 8.14539 32.0711C8.71951 33.2186 9.37736 34.1151 10.1189 34.7606C10.8605 35.406 11.6739 35.7287 12.559 35.7287C13.8507 35.7287 15.011 35.0474 16.0396 33.6848C17.0682 32.3222 18.0251 30.1945 18.9102 27.3019H19.3767L19.0537 36.3383H18.7308C18.3959 35.9558 17.9533 35.7646 17.4031 35.7646C17.0443 35.7646 16.6137 35.8363 16.1114 35.9797C15.609 36.0993 15.0588 36.2188 14.4608 36.3383C13.8627 36.4579 13.2168 36.5176 12.5231 36.5176Z"
              fill="white"
            />
            <path
              d="M21.4466 55C19.15 55 17.0136 54.6546 15.0374 53.9638C13.1147 53.2198 11.4589 52.2101 10.0703 50.9348C8.68161 49.6063 7.5867 48.0386 6.78555 46.2319C6.03781 44.4251 5.66394 42.4324 5.66394 40.2536C5.66394 36.9589 6.65203 34.0362 8.6282 31.4855C10.6578 28.8816 13.7556 26.5435 17.9216 24.471C17.7613 24.2585 17.5744 24.0459 17.3608 23.8333C15.1175 21.1763 13.4351 18.7585 12.3135 16.5797C11.2453 14.3478 10.7112 12.3019 10.7112 10.442C10.7112 9.00724 10.9782 7.65217 11.5123 6.37681C12.0999 5.10145 12.901 3.98551 13.9158 3.02898C14.9306 2.07246 16.1056 1.3285 17.4409 0.797101C18.8295 0.2657 20.325 0 21.9273 0C23.583 0 25.1052 0.2657 26.4939 0.797101C27.8825 1.27536 29.0843 1.99275 30.0991 2.94928C31.1673 3.85265 31.9684 4.94203 32.5025 6.21739C33.09 7.43961 33.3838 8.79468 33.3838 10.2826C33.3838 12.0894 32.9565 13.7899 32.1019 15.3841C31.2474 16.9251 29.8854 18.4396 28.0161 19.9275C26.2001 21.3623 23.8234 22.8237 20.8858 24.3116C22.7552 26.5435 24.5978 28.7222 26.4138 30.8478C28.2297 32.9734 29.9922 34.9928 31.7014 36.9058C33.4639 38.8188 35.0929 40.5725 36.5884 42.1667C36.9623 41.1039 37.3094 39.9348 37.6299 38.6594C38.0038 37.3841 38.3509 35.9758 38.6714 34.4348C39.0453 32.8406 39.4191 31.0338 39.793 29.0145C40.1669 27.1015 40.5942 25.5604 41.0748 24.3913C41.6089 23.2222 42.2499 22.372 42.9976 21.8406C43.7988 21.3092 44.7868 21.0435 45.9619 21.0435C46.9767 21.0435 47.8045 21.2826 48.4454 21.7609C49.0864 22.2391 49.4068 22.8502 49.4068 23.5942C49.4068 24.1256 49.2466 24.5773 48.9261 24.9493C48.6057 25.2681 48.1517 25.4275 47.5642 25.4275C47.1903 25.4275 46.8431 25.3478 46.5227 25.1884C46.2556 25.029 46.0153 24.8696 45.8016 24.7101C45.588 24.4976 45.3476 24.3116 45.0806 24.1522C44.8135 23.9928 44.5198 23.913 44.1993 23.913C43.7186 23.913 43.2914 24.0725 42.9175 24.3913C42.597 24.7101 42.3033 25.2415 42.0362 25.9855C41.8226 26.6763 41.5822 27.6328 41.3152 28.8551C40.9413 30.6618 40.5942 32.256 40.2737 33.6377C39.9532 35.0193 39.6595 36.2681 39.3924 37.3841C39.1254 38.5 38.8316 39.5362 38.5112 40.4928C38.2441 41.4493 37.9503 42.3527 37.6299 43.2029C38.8049 44.4251 39.8731 45.5145 40.8345 46.471C42.3834 47.9589 43.7186 49.2077 44.8403 50.2174C45.9619 51.1739 46.9767 51.9179 47.8846 52.4493C48.7926 52.9807 49.6739 53.4058 50.5284 53.7246V54.442L49.4068 54.2826C47.8045 54.0169 46.1755 53.4058 44.5198 52.4493C42.8641 51.4396 41.0481 49.9251 39.072 47.9058C38.3242 47.1087 37.5231 46.285 36.6685 45.4348C34.6923 48.7295 32.4758 51.1473 30.019 52.6884C27.5621 54.2295 24.7046 55 21.4466 55ZM19.3636 22.4783C19.6841 22.8502 19.9778 23.2222 20.2449 23.5942C22.862 22.1594 24.9717 20.7778 26.574 19.4493C28.1763 18.1208 29.3246 16.7391 30.019 15.3043C30.7667 13.8696 31.1406 12.2754 31.1406 10.5217C31.1406 9.1401 30.9002 7.86473 30.4195 6.69565C29.9922 5.52657 29.3513 4.51691 28.4968 3.66667C27.6422 2.81642 26.6541 2.15217 25.5325 1.67391C24.4109 1.19565 23.1825 0.956519 21.8472 0.956519C20.5654 0.956519 19.3636 1.16908 18.242 1.5942C17.1738 2.01932 16.2391 2.63043 15.438 3.42753C14.6368 4.22464 14.0226 5.15459 13.5953 6.21739C13.1681 7.28019 12.9544 8.44927 12.9544 9.72464C12.9544 11.4251 13.4618 13.3116 14.4766 15.3841C15.5448 17.4565 17.1738 19.8213 19.3636 22.4783ZM8.38786 40.0145C8.38786 41.9807 8.70832 43.814 9.34924 45.5145C10.0436 47.1618 10.9782 48.6232 12.1533 49.8985C13.3817 51.1739 14.7971 52.1836 16.3994 52.9275C18.0017 53.6184 19.7375 53.9638 21.6069 53.9638C27.5888 53.9638 32.2889 50.7754 35.7071 44.3985C33.2503 41.7947 30.553 38.872 27.6155 35.6304C24.7313 32.3357 21.7137 28.8816 18.5625 25.2681C16.159 26.5435 14.2096 27.8985 12.7141 29.3333C11.2186 30.715 10.1237 32.2826 9.42935 34.0362C8.73502 35.7899 8.38786 37.7826 8.38786 40.0145Z"
              fill="#50B04E"
            />
            <path
              d="M28.6656 43.803C27.2925 43.803 26.1001 43.6353 25.0883 43.2998C24.0766 42.9403 23.2937 42.437 22.7396 41.79C22.1856 41.1429 21.9086 40.376 21.9086 39.4893C21.9086 38.986 22.0411 38.5906 22.306 38.303C22.5951 37.9915 22.9805 37.8357 23.4623 37.8357C24.4018 37.8357 24.9438 38.4229 25.0883 39.5971C25.2088 40.8194 25.4497 41.6821 25.811 42.1854C26.1964 42.6647 26.7866 42.9043 27.5816 42.9043C28.4969 42.9043 29.1714 42.461 29.605 41.5743C30.0387 40.6636 30.2555 39.2616 30.2555 37.3684V22.8815C30.2555 21.8989 30.1109 21.1799 29.8218 20.7246C29.5569 20.2693 29.051 19.9337 28.3042 19.7181V19.3586H37.4099V19.7181C36.9041 19.8618 36.5427 20.1614 36.3259 20.6168C36.1332 21.0481 36.0368 21.6952 36.0368 22.5579V36.7932C36.0368 41.4664 33.5798 43.803 28.6656 43.803Z"
              fill="white"
            />
            <path
              d="M35.6757 41.25L28.9905 33.8347L27.5 35.4743L34.1892 42.7365L35.6757 41.25Z"
              fill="#50B04E"
            />
            <path
              d="M9.61381 34.2818C8.77912 33.3279 8.27235 32.3938 8.1233 32.0461C7.03025 32.7665 5.09755 34.3862 6.1111 35.1016C7.12465 35.8171 8.47108 36.0953 9.01761 36.145C9.56413 35.9214 10.4485 35.2358 9.61381 34.2818Z"
              fill="white"
            />
          </svg>
          <FooterText> Below the Blue Gums - Jackie &amp; Chris 2023</FooterText>
        </FooterLogo>
        <FooterLinks>
          <Item href="/">
            <ItemText>Save the date</ItemText>
          </Item>

          <Item href="/venue">
            <ItemText>Venue</ItemText>
          </Item>
          <Item href="/location">
            <ItemText>Location</ItemText>
          </Item>
        </FooterLinks>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
