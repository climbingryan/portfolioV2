import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d9cef5"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,272C672,288,768,288,864,282.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="contact-handler" id="contact">
        <h2 className="icon">Get in Touch with me</h2>
        <div className="icon-container">
          <a
            href="mailto:simmons5family@gmail.com?subject=Developer Portfolio"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaRegEnvelope size="42px" className="icon" />
          </a>
          <a
            href="https://github.com/climbingryan"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaGithub size="42px" className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevinrsimmons1/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <FaLinkedinIn size="42px" className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
