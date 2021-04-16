import React from 'react'
import img from '../../assets/images/green-code-typing.png';

const Hero = () => {
    return (
        <div className='hero-handler'>
          <div className='hero-text-handler'>
            <h2>Hi, I'm a FullStack Developer</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum.
            </p>
          </div>
          <div className='hero-img-handler'>
            <img className='hero-img' src={img} alt='green web dev computer'></img>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#E5DEF7" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,133.3C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
    )
}

export default Hero;