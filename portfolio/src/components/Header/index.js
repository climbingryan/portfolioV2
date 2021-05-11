import React from "react";

const Header = () => {



  return (
    <header id='home'>
      <div className="logo">Kevin Simmons</div>
      <nav>
        <ul className="nav-list">
          <li onFocus={(e) => {
            console.log(e.currentTarget);
            console.log(e.target)
          }}>
            <a href="#home" className='list-element'>Home</a>
          </li>
          <li>
            <a href="#projects" className='list-element'>Projects</a>
          </li>
          <li>
            <a href='#contact' className='list-element'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
