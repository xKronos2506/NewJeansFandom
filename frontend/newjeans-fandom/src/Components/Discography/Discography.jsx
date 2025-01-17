// import module and library 
import React from 'react'
import './discography.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import assets for the discography albums
import debutPic from "../../assets/discography/debut.jpg";
import NJWMXPic from "../../assets/discography/njwmx.jpg";
import GetUpPic from "../../assets/discography/get-up.jpg";
import DebutSong from "../../assets/discography/hype-boy.mp3";
import NJWMXSong from "../../assets/discography/ditto.mp3";
import GetUpSong from "../../assets/discography/get-up.mp3";

const Discography = () => { // discography component for the newjeans albums and tracks
  const albums = [ // data array for the albums and tracks image song and description
    {
      name: "New Jeans",
      img: debutPic,
      song: DebutSong,
      content: "The debut extended play (EP), released in August 1 2022, following the release of 'Attention', with no prior marketing or publicity."
    },
    {
      name: "NJWMX",
      img: NJWMXPic,
      song: NJWMXSong,
      content: "First ever remix album published, which features six remixed versions of their two projects 'New Jeans' and 'OMG'."
    },
    {
      name: "Get Up",
      img: GetUpPic,
      song: GetUpSong,
      content: "Second EP released around July 21, 2023, which has six tracks and a unique production style, inspired by R&B, dance styles such as House Music, Jersey and Baltimore Club Sound and UK Garage. With their most famous singles such as 'Super Shy'"
    }
  ]

  const settings = { //carosel settings and presets
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }; 
 
  return ( // Discography component with slider and albums and tracks with tailwind css
    <div className="discography">

        <div className="w-3/4 bg-white rounded-3xl">
          <Slider {...settings}>
            {albums.map((album, index) => (
              <div key={index} className="album-slide">
                  <img src={album.img} alt={album.name} className="album-image" />
                  <div className="album-content">
                    <h2 className="album-name">{album.name}</h2>
                    <p className="album-description">{album.content}</p>
                    <audio controls>
                      <source src={album.song} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default Discography;