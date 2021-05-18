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
          d="M0,160L60,149.3C120,139,240,117,360,133.3C480,149,600,203,720,192C840,181,960,107,1080,74.7C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
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
