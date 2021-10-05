import React from "react";

const NavList = (props) => {
  const {openList} = props;
  return (
    <div className= {openList ? "nav-list" : "nav-list active"}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#works">Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default NavList;
