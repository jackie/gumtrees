import React, { useState } from "react";
import Modal from "../../components/modal";
import styled from "styled-components";
import LocationSection from "./section";
import Georges from "../../assets/images/accomodations/Georges.jpg";
import HartsFarm from "../../assets/images/accomodations/HartsFarm.jpg";
import HavenRedHill from "../../assets/images/accomodations/HavenRedHill.jpg";
import Jackalope from "../../assets/images/accomodations/Jackalope.jpg";
import PortPhillipEstate from "../../assets/images/accomodations/PortPhillipEstate.jpg";
import Quattro from "../../assets/images/accomodations/Quattro.jpg";
import RedHillFarm from "../../assets/images/accomodations/RedHillFarm.jpg";
import TheCabin from "../../assets/images/accomodations/TheCabin.jpg";
import Foxeys from "../../assets/images/wineries/Foxeys.jpg";
import MainRidge from "../../assets/images/wineries/MainRidge.jpg";
import Montalto from "../../assets/images/wineries/Montalto.jpg";
import PtLeo from "../../assets/images/wineries/PtLeo.jpg";
import Quealy from "../../assets/images/wineries/Quealy.jpg";
import RedHillEstate from "../../assets/images/wineries/RedHillEstate.jpg";
import TenMinutes from "../../assets/images/wineries/TenMinutes.jpg";
import TGallant from "../../assets/images/wineries/TGallent.jpg";
import Portsea from "../../assets/images/todo/Portsea.jpg";
import Sorrento from "../../assets/images/todo/Sorrento.jpg";
import Maze from "../../assets/images/todo/Maze.jpg";
import Horse from "../../assets/images/todo/Horse.jpg";
import CapeShank from "../../assets/images/todo/CapeShank.jpg";
import BeachBox from "../../assets/images/todo/BeachBox.jpg";
import HotSprings from "../../assets/images/todo/HotSprings.jpg";
import SculpturePark from "../../assets/images/todo/SculpturePark.jpg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const accomLocations = [
  {
    id: "ppe",
    title: "Port Phillip Estate",
    subtitle: "2 min from Polperro",
    image: PortPhillipEstate
  },
  {
    id: "harts",
    subtitle: "9 min from Polperro",
    title: "Harts Farm",
     image: HartsFarm,
  },
  {
    id: "hh",
    subtitle: "4 min from Polperro",
    title: "Havent Hill",
    image: HavenRedHill,
  },
  {
    id: "rhf",
    subtitle: "3 min from Polperro",
    title: "Red Hill Farm",
    image: RedHillFarm,
  },
  {
    id: "qh",
    subtitle: "8 min from Polperro",
    title: "Quattro Hotel",
    image: Quattro,
  },
  {
    id: "ga",
    subtitle: "11 min from Polperro",
    title: "George's on Arthur's",
    image: Georges,
  },
  {
    id: "jh",
    subtitle: "7 min from Polperro",
    title: "Jackalope Hotel",
    image: Jackalope,
  },
  {
    id: "tcrh",
    subtitle: "8 min from Polperro",
    title: "The Cabin @ Red Hill",
    image: TheCabin,
  },
];

const cellarLocations = [
  {
    id: "montalto",
    subtitle: "6 min from Polperro",
    title: "Montalto",
    image: Montalto,
  },
  {
    id: "mainridge",
    subtitle: "11 min from Polperro",
    title: "Main Ridge",
    image: MainRidge,
  },
  {
    id: "tenminutes",
    subtitle: "8 min from Polperro",
    title: "Ten Minutes by Traktor",
    image: TenMinutes,
  },
  {
    id: "",
    subtitle: "6 min from Polperro",
    title: "Foxey's Hangout",
    image: Foxeys,
  },
  {
    id: "redhillestate",
    subtitle: "5 min from Polperro",
    title: "Red Hill Estate",
    image: RedHillEstate,
  },
  {
    id: "tgallant",
    subtitle: "8 min from Polperro",
    title: "T'Gallant",
    image: TGallant,
  },
  {
    id: "quealy",
    subtitle: "8 min from Polperro",
    title: "Quealy ",
    image: Quealy,
  },
  {
    id: "quealy",
    subtitle: "8 min from Polperro",
    title: "Pt. Leo Estate",
    image: PtLeo,
  }
];

const thingsLocations = [
  {
    id: "hotsprings",
    subtitle: "23 min from Polperro",
    title: "Pennisula Hot Springs",
    image: HotSprings,
  },
  {
    id: "pp",
    subtitle: "36 min from Polperro",
    title: "Portsea Pub",
    image: Portsea,
  },
  {
    id: "rockpools",
    subtitle: "33 min from Polperro",
    title: "Sorrento rock pools",
    image: Sorrento,
  },
  {
    id: "beachboxes",
    subtitle: "18 min from Polperro",
    title: "Mt Martha Beach Boxes",
    image: BeachBox,
  },
  {
    id: "maze",
    subtitle: "7 min from Polperro",
    title: "Ashcombe Maze",
    image: Maze,
  },
  {
    id: "capeshank",
    subtitle: "22 min from Polperro",
    title: "Capee Shank Lighthouse",
    image: CapeShank,
  },
  {
    id: "horse",
    subtitle: "25 min from Polperro",
    title: "Gunnamatta Twilight Ride",
    image: Horse,
  },
  {
    id: "sculptures",
    subtitle: "26 min from Polperro",
    title: "McClelland Sculpture Park",
    image: SculpturePark,
  },
];

const List = ({ match, history, list }) => (
  <>
    {list?.map(location => (
      <LocationSection
        key={location.id}
        isSelected={match?.params.id === location.id}
        history={history}
        {...location}
      />
    ))}
  </>
);

const Location = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <LocationHeading>Accomodations</LocationHeading>
      <Container>
        <Router>
          <Routes>
            <Route path="/location/:id" element={<List list={accomLocations} />} />
            <Route path="/location" element={<List list={accomLocations} />} />
          </Routes>
        </Router>
      </Container>
      <LocationHeading>Cellar Doors &amp; Restaurants</LocationHeading>
      <Container>
        <Router>
          <Routes>
            <Route path="/location/:id" element={<List list={cellarLocations} />} />
            <Route path="/location" element={<List list={cellarLocations} />} />
          </Routes>
        </Router>
      </Container>
      <LocationHeading>Things to do</LocationHeading>
      <Container>
        <Router>
          <Routes>
            <Route path="/location/:id" element={<List list={thingsLocations} />} />
            <Route path="/location" element={<List list={thingsLocations} />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
};

export default Location;
