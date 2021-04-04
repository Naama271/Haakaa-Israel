
import './headerStyle.css';
//import Li from "./Li.js";

import React from "react";
import { ReactNavbar } from "react-responsive-animate-navbar";
import logoimage from './images/Israelogo150.png'
 
function Example() {

  return (
    <ReactNavbar
      color="rgb(25, 25, 25)"
      logo={logoimage}
      menu={[
        { name: "הסיפור שלנו", to: "/about" },
        { name: "המוצרים שלנו", to: "/products" },
        { name: "נקודות הפצה", to: "/distributors" },
        { name: "צרי איתנו קשר", to: "/contact" },
      ]}
      social={[
        {
          name: "Youtube",
          url: "https://www.youtube.com/channel/UC8u24ahAPEMu33Gw4ASqpog/videos",
          icon: ["fab", "youtube"],
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/HaakaaIsrael",
          icon: ["fab", "facebook-f"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/alphamomb/",
          icon: ["fab", "instagram"],
        },
      ]}
    />
  );

};

export default  Example;
