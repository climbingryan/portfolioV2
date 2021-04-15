import React from 'react'
import img from '../../assets/images/green-code-typing.png';

const Hero = () => {
    return (
        <div className='hero-handler'>
          <div className='hero-text-handler'>
            <h2>Some Hero Title</h2>
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
        </div>
    )
}

export default Hero;