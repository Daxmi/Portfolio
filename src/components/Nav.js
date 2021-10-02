import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavList from "./NavList";
import Avatar from "./Avatar";



const Nav = () => {

  const [openList, setopenList] = useState(false);
  const [navbar, setNavbar] = useState(false)
  const setLink = () => {
    if(window.innerWidth > 998) {
      setopenList(true);
    } else {
      setopenList(false);
    }
  }
  window.addEventListener("load", () => setLink());
  window.addEventListener("resize", () => setLink());

  const changeBackground = () => {
    if(window.scrollY >=400) {
      setNavbar(true);
    }else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={navbar?"nav-bar active":"nav-bar"}>
        <div className="photo-bar">
        <Avatar />
          <div className="bars" onClick={() => setopenList(!openList)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
          <div>
            <NavList openList ={openList}/>
          </div>
    </nav>
  );
};

export default Nav;
