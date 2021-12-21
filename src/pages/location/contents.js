import React, { useState } from "react";
import styled from "styled-components";
import LocationSection from "./section";

import { locations } from "./data";
import { motion, AnimatePresence } from "framer-motion";

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

let Container = styled(motion.div)`
  grid-gap: 30px;
  display: grid;
  flex-direction: row;
  width: 100%;
  max-width: 1320px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 72px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 70px;
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
    <>
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
    </>
  );
};

export default Location;
