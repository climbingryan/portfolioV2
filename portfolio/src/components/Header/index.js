import React from "react";

const Header = () => {

  return (
    <header id='home'>
      <div className="logo">Kevin Simmons</div>
      <nav>
        <ul className="nav-list">
          <li className='nav-home'>
            <a href="#home" className='nav-list-element'>Home</a>
          </li>
          <li className='nav-projects'>
            <a href="#projects" className='nav-list-element nav-projects'>Projects</a>
          </li>
          <li className='nav-contact'>
            <a href='#contact' className='nav-list-element nav-contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
