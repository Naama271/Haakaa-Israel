
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
          name: "Linkedin",
          url: "https://www.linkedin.com/in/nazeh-taha/",
          icon: ["fab", "linkedin-in"],
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/nazeh200/",
          icon: ["fab", "facebook-f"],
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/nazeh_taha/",
          icon: ["fab", "instagram"],
        },
        {
          name: "Twitter",
          url: "http://nazehtaha.herokuapp.com/",
          icon: ["fab", "twitter"],
        },
      ]}
    />
  );

};

export default  Example;
