import React, { useState } from "react";
import styled from "styled-components";
import LocationSection from "./section";
import PaddedWrapper from "../../components/paddedWrapper";

import { locations } from "./_data";
import { motion } from "framer-motion";

let LocationHeading = styled.div`
  font-family: Queens;
  font-size: 2.2em;
  line-height: 1.2em;
  display: flex;
  flex-direction: row;
  max-width: 1320px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  align-self: flex-start;
`;

let Container = styled(motion.div)`
  grid-gap: 1.875em;
  display: grid;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5em;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 4.375em;
`;

const List = ({ list }) => {
  return (
    <>
      {list?.map((location) => {
        return <LocationSection key={location.id} {...location} />;
      })}
    </>
  );
};

const Location = () => {
  return (
    <PaddedWrapper>
      <LocationHeading>Accomodations</LocationHeading>
      <Container variants={{ exit: { transition: { staggerChildren: 1 } } }}>
        <List
          list={locations.filter((location) => location.type === "accom")}
        />
      </Container>
      <LocationHeading>Cellar Doors &amp; Restaurants</LocationHeading>
      <Container variants={{ exit: { transition: { staggerChildren: 1 } } }}>
        <List
          list={locations.filter((location) => location.type === "cellar")}
        />
      </Container>
      <LocationHeading>Things to do</LocationHeading>
      <Container
        key="thingstodo"
        variants={{ exit: { transition: { staggerChildren: 1 } } }}
      >
        <List
          list={locations.filter((location) => location.type === "things")}
        />
      </Container>
    </PaddedWrapper>
  );
};

export default Location;
