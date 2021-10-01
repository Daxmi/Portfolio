import React from "react";

const NavList = (props) => {
  const {openList} = props;
  return (
    <div className= {openList ? "nav-list" : "display-nav-list"}>
        
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavList;
