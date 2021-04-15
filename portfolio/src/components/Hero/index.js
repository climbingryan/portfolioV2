import React from 'react'
import img from '../../assets/images/green-code-typing.png';

const Hero = () => {
    return (
        <div className='hero-handler'>
          <div className='hero-text-handler'>
            <h2>Some Hero Title</h2>
            <p>
              hero text to go below the hero Title
            </p>
          </div>
          <div className='hero-img-handler'>
            <img className='hero-img' src={img} alt='green web dev computer'></img>
          </div>
        </div>
    )
}

export default Hero;