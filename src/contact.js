import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSms } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

let myContact = {
    contacts: [
        {
            id: 1,
            href: "https://mobile.twitter.com/mazidavid_og",
            target: "_blank",
            title: "tweet at me",
            className: "handle",
            text: "@mazidavid_OG",
            icon: FaTwitter
        },
        {
            id: 2,
            href: "#",
            target: "",
            title: "Call me",
            className: "handle",
            text: "+2349015401642",
            icon: FaPhone
        },
        {
            id: 3,
            href: "https://api.whatsapp.com/message/K6O7FIZT6DOXA1",
            target: "_blank",
            title: "send a Whatsapp Message",
            className: "handle",
            text: "+2347053250220",
            icon: FaWhatsapp
        },
        
        {
            id: 4,
            href: "https://api.whatsapp.com/message/K6O7FIZT6DOXA1",
            target: "_blank",
            title: "leave a text",
            className: "handle",
            text: "+2347053250220",
            icon: FaSms
        },
        {
            id: 5,
            href: "https://www.linkedin.com/in/david-ogobonnaya-42b314129",
            target: "_blank",
            title: "check my LinkedIn",
            className: "handle",
            text: "Nwanneka Ogbonnaya",
            icon: FaLinkedin
        },
        {
            id: 6,
            href: "https://github.com/Daxmi",
            target: "_blank",
            title: "check my Github",
            className: "handle",
            text: "Daxmi",
            icon: FaGithub
        },
    ]
}

export default myContact;