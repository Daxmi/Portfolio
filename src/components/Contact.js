import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header-container">
        <header className="header-text"> Contact Me</header>
      </div>
      <div className="contact">
        <div className="grid-container">
        <a
            href="#"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaTwitter style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">@mazidavid_OG</div>
          </a>
          <a
            href="#"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaWhatsapp style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">+2347053250220</div>
          </a>
          <a
            href="#"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaPhone style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">+2349015401642</div>
          </a>
          <a
            href="https://github.com/Daxmi"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaGithub style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">Daxmi</div>
          </a>
          <a
            href="#"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaSms style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">+2347053250220</div>
          </a>
          <a
            href="#"
            target="_blank"
            title="kindly give me a call"
            className="handle"
          >
            <div className="handle-icon">
              <FaLinkedin style={{ fontSize: "30px" }} />
            </div>
            <div className="handle-text">Nwanneka Ogbonnaya</div>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
