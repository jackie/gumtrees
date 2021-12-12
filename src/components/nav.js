import * as React from "react";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";

let Navigation = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(11, 29, 38, 0) 0%, #0b1d26 100%);
  color: white;
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0px;
  padding: 0 25px;
  z-index: 100;
`;

let Menu = styled.div`
  align-items: center;
  display: flex;
`;

let Items = styled.div`
  font-size: 0.825em;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
  margin: 10px;
  padding: 5px 20px;
  // background: rgba(11, 29, 38, 0.6);
  border-radius: 999px;
`;

export default function Nav() {
  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <Navigation
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <Menu>
        <Items href="/home">Home</Items>
        <Items href="/date">Date</Items>
        <Items href="/venue">Venue</Items>
        <Items href="/location">Location</Items>
      </Menu>
    </Navigation>
  );
}
