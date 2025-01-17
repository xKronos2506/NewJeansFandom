//imports modules necessary 
import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect'; // typewriter module import
import videoBg from '../../assets/bg-home.mp4';

// jsx declaration
const Home = () => {
  return (
    // main div element, with background music video, and text overlay on the right side
    <div className="home">
      <video autoPlay loop muted className="video-bg">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="right-content">
        <Typewriter //typewriter element from typewriter module
        /**/
          options={{
            autoStart: true,
            loop: true, 
            delay: 75, 
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('WELCOME!')
              .pauseFor(1000)
              .typeString('<br>안녕하세요 뉴진스입니다!')
              .pauseFor(300)
              .typeString('<br>Welcome to the NewJeans fandom, you make like no other...')
              .pauseFor(2000)
              .typeString('Discover our collection, hear about our latest releases, and make your own unique NewJeans!')
              .start();
          }}
          />
        </div>
      </div>
  );
};

export default Home;


