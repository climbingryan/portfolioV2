import React from "react";
import anime from "animejs/lib/anime.es";
import img from "../../assets/images/green-code-typing.png";

const Hero = () => {

  const heroImg = () => {
    anime({
      targets: '.hero-img',
      translateX: [275, -100],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo'
    });
  }
  const heroTextAnime = () => {
    anime({
      targets: '.hero-title',
      translateX: [-300, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo'
    });
    anime({
      targets: '.hero-p',
      translateY: [300, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeInOutExpo',
      delay: 200
    })
  }

  return (
    <div className="hero-handler" onLoad={() => {heroTextAnime()}}>
      <div className="hero-text-handler" >
        <h2 className='hero-title'>Hi, I'm a FullStack Developer</h2>
        <p className='hero-p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="hero-img-handler" onLoad={() => {heroImg()}}>
        <img className="hero-img" src={img} alt="green web dev computer"></img>
      </div>

      <svg className='upper-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#d9cef5"
          fillOpacity="1"
          d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,117.3C672,117,768,171,864,170.7C960,171,1056,117,1152,133.3C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        <a href="https://storyset.com/work">Illustration by Freepik Storyset</a>
      </svg>
    </div>
  );
};

export default Hero;
