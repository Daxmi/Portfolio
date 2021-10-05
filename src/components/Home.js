import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Header from "./Header";
import Nav from "./Nav";

import React from "react";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
