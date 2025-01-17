// import modules
import React from 'react'
import './merch.css'
//import assets 
import Hoodie from '../../assets/merch/hoodie.jpg'
import Lightstick from '../../assets/merch/lightstick.jpg'
import Shirt from '../../assets/merch/shirt.jpg'
import Poster from '../../assets/merch/poster.jpg'
const Merch = () => { // merch component 
  return (
    <div classname="merchandise">
        <div className="merch-cont">
            <div className="merch">
                <div className="img-left">
                    <img src={Hoodie} alt="hoodie" />
                </div>
                <div className="text-right">
                    <h2>NewJeans 'GET UP' X Powerpuff Girls Hoodie</h2>
                    <a href="https://www.newjeans-universe.com/collections/whats-new/products/fan-made-newjeans-get-up-x-powerpuff-girls-hoodie-2"><button type="button">BUY NOW</button></a>
                </div>
            </div>
            <div className="merch">
                <div className="img-left">
                    <img src={Lightstick} alt="lightstick" />
                </div>
                <div className="text-right">
                    <h2>NewJeans Light Stick</h2>
                    <a href="https://www.newjeans-universe.com/products/newjeans-official-light-stick"><button type="button">BUY NOW</button></a>
                </div>
            </div>
            <div className="merch">
                <div className="img-left">
                    <img src={Shirt} alt="shirt" />
                </div>
                <div className="text-right">
                    <h2>NewJeans 'GET UP' Powerpuff Vintage T-shirt</h2>
                    <a href="https://www.newjeans-universe.com/products/fan-made-newjeans-get-up-powerpuff-vintage-t-shirt"><button type="button">BUY NOW</button></a>
                </div>
            </div>
            <div className="merch">
                <div className="img-left">
                    <img src={Poster} alt="poster" />
                </div>
                <div className="text-right">
                    <h2>NewJeans HOW SWEET Adhesive A4 Wallpaper Posters</h2>
                    <a href="https://www.newjeans-universe.com/collections/whats-new/products/fan-made-newjeans-how-sweet-adhesive-wallpaper-posters"><button type="button">BUY NOW</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Merch