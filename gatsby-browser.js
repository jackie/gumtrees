const React = require("react");
const { AnimatePresence } = require("framer-motion");

const Layout = require("./src/components/layout").default;
require("./src/assets/styles/global.css");

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

exports.shouldUpdateScroll = () => {
  return false;
};
