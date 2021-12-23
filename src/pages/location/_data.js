import Georges from "../../assets/images/accomodations/Georges.jpg";
import GeorgesBig from "../../assets/images/accomodations/GeorgesBig.jpg";
import HartsFarm from "../../assets/images/accomodations/HartsFarm.jpg";
import HartsFarmBig from "../../assets/images/accomodations/HartsFarmBig.jpg";
import HavenRedHill from "../../assets/images/accomodations/HavenRedHill.jpg";
import HavenRedHillBig from "../../assets/images/accomodations/HavenRedHillBig.jpg";
import Jackalope from "../../assets/images/accomodations/Jackalope.jpg";
import JackalopeBig from "../../assets/images/accomodations/JackalopeBig.jpg";
import PortPhillipEstate from "../../assets/images/accomodations/PortPhillipEstate.jpg";
import PortPhillipEstateBig from "../../assets/images/accomodations/PortPhillipEstateBig.jpg";
import Quattro from "../../assets/images/accomodations/Quattro.jpg";
import QuattroBig from "../../assets/images/accomodations/QuattroBig.jpg";
import RedHillFarm from "../../assets/images/accomodations/RedHillFarm.jpg";
import RedHillFarmBig from "../../assets/images/accomodations/RedHillFarmBig.jpg";
import TheCabin from "../../assets/images/accomodations/TheCabin.jpg";
import TheCabinBig from "../../assets/images/accomodations/TheCabinBig.jpg";
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

const locations = [
  {
    type: "accom",
    id: "ppe",
    title: "Port Phillip Estate",
    subtitle: "2 min from Polperro",
    image: PortPhillipEstate,
    imageBig: PortPhillipEstateBig,
    description:
      "Port Phillip Estate offers unique luxury accommodation on the Mornington Peninsula. The six contemporary designed suites enjoy spectacular vineyard and coastal views, private terraces and interiors that exude the utmost luxury.",
  },
  {
    type: "accom",
    id: "harts",
    subtitle: "9 min from Polperro",
    title: "Harts Farm",
    image: HartsFarm,
    imageBig: HartsFarmBig,
    description:
      "Harts Farm aims to provide a simple yet beautiful and sophisticated experience for their guests.  They are situated in the rural Hinterland of Shoreham and so have access to natural bushland and the sea. Enjoy fine dining, vineyards, shops, galleries and spas as well as world-class golf courses all within a 15 minute drive.",
  },
  {
    type: "accom",
    id: "hh",
    subtitle: "4 min from Polperro",
    title: "Haven Red Hill",
    image: HavenRedHill,
    imageBig: HavenRedHillBig,
    description:
      "Haven Red Hill has three beautiful, bespoke suites that will elevate you from your everyday. Immerse yourself in natural beauty without having to compromise on comfort or contemporary style. Whether its two nights or more, your stay will delight the senses. Explore the 11 acres, help yourself to the organic fruit and fragrant herbs, soak up the views or sit around the log fire under the stars.",
  },
  {
    type: "accom",
    id: "rhf",
    subtitle: "3 min from Polperro",
    title: "Red Hill Barm",
    image: RedHillFarm,
    imageBig: RedHillFarmBig,
    description:
      "Completed in March 2019. Surrounded by vineyards, coastal walks and gourmet food and wine experiences, this beautiful architecturally designed barn is so warm and inviting, you’ll never want to leave. There is so much to enjoy in Red Hill / Main Ridge and its surrounds.",
  },
  {
    type: "accom",
    id: "qh",
    subtitle: "8 min from Polperro",
    title: "Quattro Hotel",
    image: Quattro,
    imageBig: QuattroBig,
    description:
      "The property features Quattro Restaurant, which is a unique, regional venue with views across the vines. This tranquil restaurant offers an intimate and relaxed Mediterranean inspired dining experience, to be enjoyed with estate-produced wine.",
  },
  {
    type: "accom",
    id: "ga",
    subtitle: "11 min from Polperro",
    title: "George's on Arthur's",
    image: Georges,
    imageBig: GeorgesBig,
    description:
      "A place where tranquility meets modern beauty…welcome to this unique contemporary HOTEL! A high quality, purpose built and architecturally designed masterpiece, Georges re-defines the boutique hotel experience",
  },
  {
    type: "accom",
    id: "jh",
    subtitle: "7 min from Polperro",
    title: "Jackalope Hotel",
    image: Jackalope,
    imageBig: JackalopeBig,
    description:
      "Delivering unparalleled comfort and luxury for a most memorable stay, these spacious suites (85 sqm) offer sunset views over Willow Creek Vineyard. The Lair's open floorplan, loft ceilings and an expansive terrace create a sense of tranquillity and space, but the revel is in the detail.",
  },
  {
    type: "accom",
    id: "tcrh",
    subtitle: "8 min from Polperro",
    title: "The Cabin @ Red Hill",
    image: TheCabin,
    imageBig: TheCabinBig,
    description:
      "The Cabin has been decorated in a charming french provincial style with enough space for a family to enjoy a weekend getaway or a week long stay. It also has a lovely large deck to enjoy the views of Port Phillip Bay while enjoying a glass of Pinot and watching the sunset.",
  },
  {
    type: "cellar",
    id: "montalto",
    subtitle: "6 min from Polperro",
    title: "Montalto",
    image: Montalto,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "mainridge",
    subtitle: "11 min from Polperro",
    title: "Main Ridge",
    image: MainRidge,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "tenminutes",
    subtitle: "8 min from Polperro",
    title: "Ten Minutes by Tractor",
    image: TenMinutes,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "",
    subtitle: "6 min from Polperro",
    title: "Foxey's Hangout",
    image: Foxeys,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "redhillestate",
    subtitle: "5 min from Polperro",
    title: "Red Hill Estate",
    image: RedHillEstate,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "tgallant",
    subtitle: "8 min from Polperro",
    title: "T'Gallant",
    image: TGallant,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "quealy",
    subtitle: "8 min from Polperro",
    title: "Quealy ",
    image: Quealy,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "cellar",
    id: "ptleo",
    subtitle: "8 min from Polperro",
    title: "Pt. Leo Estate",
    image: PtLeo,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "hotsprings",
    subtitle: "23 min from Polperro",
    title: "Pennisula Hot Springs",
    image: HotSprings,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "pp",
    subtitle: "36 min from Polperro",
    title: "Portsea Pub",
    image: Portsea,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "rockpools",
    subtitle: "33 min from Polperro",
    title: "Sorrento rock pools",
    image: Sorrento,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "beachboxes",
    subtitle: "18 min from Polperro",
    title: "Mt Martha Beach Boxes",
    image: BeachBox,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "maze",
    subtitle: "7 min from Polperro",
    title: "Ashcombe Maze",
    image: Maze,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "capeshank",
    subtitle: "22 min from Polperro",
    title: "Cape Shank Lighthouse",
    image: CapeShank,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "horse",
    subtitle: "25 min from Polperro",
    title: "Gunnamatta Twilight Ride",
    image: Horse,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
  {
    type: "things",
    id: "sculptures",
    subtitle: "26 min from Polperro",
    title: "McClelland Sculpture Park",
    image: SculpturePark,
    imageBig: PortPhillipEstateBig,
    description:
      "A scenic 45 minutes (ish) drive from Melbourne. Situated south-east of Melbourne, Mornington Peninsula is a boot-shaped region filled with golden beaches, bubbling hot springs, boutique wineries, a stunning clifftop walk known as the Millionaire’s Walk and some pretty amazing food too.",
  },
];

export { locations };