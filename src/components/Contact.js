import React from "react";
import myContact from "../contact";

const Contact = () => {
  const { contacts } = myContact;
  return (
    <div className="contact-container" id="contact">
      <div className="header-container">
        <header className="header-text"> Contact Me</header>
      </div>
      <div className="contact">
        <div className="grid-container">
          {contacts.map((contact) => (
            <a
              href={contact.href}
              target={contact.target}
              rel = "noreferrer"
              title={contact.title}
              className="handle"
              key = {contact.id}
            >
              <div className="handle-icon">
                {<contact.icon style={{ fontSize: "30px" }}/>}
              </div>
              <div className="handle-text">{contact.text}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
