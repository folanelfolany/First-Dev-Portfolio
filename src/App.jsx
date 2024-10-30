/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */
import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Nadder Ragi",
  title: "Full-Stack Software Developer",
  email: "nadderragi@gmail.com",
  gitHub: "folanelfolany",
  instagram: "nadderragi",
  linkedIn: "nadderragi",
  medium: "",
  twitter: "",
  youTube: "",
};
/* change the primary color so its light black and the secondary color to a light green  using const primarycolor and const secondarycolor */

const primaryColor = "#333333"; // light black
const secondaryColor = "#90EE90"; // light green

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
