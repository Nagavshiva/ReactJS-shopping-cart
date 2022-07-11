import React from 'react';
import Cart from './Cart';
import {Carousel} from 'react-bootstrap'

const Banner = () => {
  return (
    <>
  <Carousel>
      <Carousel.Item className='' style={{backgroundColor:'whitesmoke',textShadow: '2px 2px 5px red'}}>
        <img
          className="d-block w-100 imagee"
          src="https://wallpaperaccess.com/full/1808486.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ textShadow: '2px 2px 5px red'}}>{`MOBILE PHONE BIG SALE SPECIAL OFFER 15% >>>>`} </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imagee"
          src="https://cdn.ecoustics.com/db0/wblob/17BA35E873D594/1F06/40238/QCXz6Oxa3Q-_1WYtcB1wusS1jj2wOxr66zi0xpUhCgY/apple-watch-series4-2018.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3  style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'}}>THE FUTURE OF THE HEALTH IS ON YOUR WRIST</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 imagee" 
          src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681__340.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ textShadow: '0 0 3px #FF0000, 0 0 5px #0000FF'}}>MARSHALL HEADPHONE</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Cart/>
    </>
  )
}

export default Banner;


