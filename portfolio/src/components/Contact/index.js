import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-handler">
      <h2 className='icon'>Get in Touch with me</h2>
      <div className='icon-container'>
        <a href='mailto:simmons5family@gmail.com?subject=Developer Portfolio' target='_blank' rel='noreferrer' className='icon'><FaRegEnvelope size="42px" className='icon' /></a>
        <a href='https://github.com/climbingryan' target='_blank' rel='noreferrer' className='icon'><FaGithub size="42px" className='icon' /></a>
        <a href='https://www.linkedin.com/in/kevinrsimmons1/' target='_blank' rel='noreferrer' className='icon' ><FaLinkedinIn size='42px' className='icon' /></a>
      </div>
    </div>
  );
};

export default Contact;
