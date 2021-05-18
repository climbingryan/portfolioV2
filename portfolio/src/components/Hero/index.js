import React from "react";
import anime from "animejs/lib/anime.es";
import img from "../../assets/images/green-code-typing.png";

const Hero = () => {

  const heroImg = () => {
    anime({
      targets: '.hero-img',
      translateX: [150, -10],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo'
    });
  }
  const heroTextAnime = () => {
    anime({
      targets: '.hero-title',
      translateX: [-200, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo'
    });
    anime({
      targets: '.hero-p',
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo',
      delay: 200
    });
  }

  return (
    <div className="hero-handler" onLoad={() => {heroTextAnime()}}>
      <div className="hero-text-handler">
        <h2 className='hero-title'>Hi, My name's Kevin Simmons</h2>
        <p className='hero-p'>
          I'm a recent graduate from the UT coding bootcamp for Fullstack web development.
          The internet and websites in general have always facinated me, so
          learning how to create them was a must! Until recently when I dipped
          my toes into the world of crypto. Once I began my research into how blockchain
          technology worked, I was amazed and still am as I teach my self 
          how to write smartContracts to be used on the Ethereum blockchain. I feel this
          Technology is and will be the future, not only in the financial world, but 
          across all parts of society, specifically the IoT. Which I fully intend to 
          mess and experiment with in the near future.
        </p>
      </div>
      <div className="hero-img-handler" onLoad={() => {heroImg()}}>
        <img className="hero-img" src={img} alt="green web dev computer"></img>
      </div>
    </div>
  );
};

export default Hero;
