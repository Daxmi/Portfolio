import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header">
      <div className="my-name">
      <h1>Hi. I'm David.</h1>
      <Typed 
      className="typed-text"
      strings={["A Web Designer", "A Web Developer"]}
      typeSpeed={120}
      backSpeed={10}
      loop
      />
      </div>
    </div>
  );
};

export default Header;
