//import modules and library
import React from 'react';
import './about.css';
import Greetings from '../../assets/greetings.mp4';
import Typewriter from 'typewriter-effect';


const About = () => { // about component with typewriter effect and video greetings
  return (
    <div className='about'>
      <div className="about-container">
        <div className="text-left">
          <h1>WHO ARE NEWJEANS?</h1>
          <Typewriter
            options={{
              autoStart: true,
              loop: true, 
              delay: 75, 
            }}
            onInit={(Typewriter) => {
              Typewriter
              .typeString('NewJeans is a South Korean girl group formed by ADOR, a subsidiary of HYBE Corporation. <br/> <br /> Debuting in 2022, the group quickly gained international recognition for their fresh and youthful approach to K-pop. Known for blending retro and modern pop sounds, NewJeans captivates fans with their unique style, catchy melodies, and vibrant performances. Their name symbolizes timelessness, like a favorite pair of jeans, appealing to fans of all ages.')
              .start();
            }}
          ></Typewriter>
        </div>
        <div className="video-right">
          <video src={Greetings} autoPlay loop controls />
        </div>
      </div>
    </div>
  )
}

export default About