
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./style.css";
import { Link } from "react-router-dom";



const responsive = {
  0: { items: 1 },
  2000: { items: 2 },
  3024: { items: 3 },
};

const items = [
   
<div className="item" data-value="1">
<div className="carousel-div">
   <h2>Oh,<br/> Hello Newness </h2>
   <button><Link className="link" to="/bestselling">Explore Bestseller</Link></button>
  </div>
  </div>,

  <div className="item"data-value="3">
   <div className="carousel-div-1">
  <h2>Discover the <br/> Best of the Best</h2>
  <button><Link className="link" to="/bestselling">Explore Bestseller</Link></button>
  </div>
  </div>,

  <div className="item" data-value="5">
     <div className="carousel-div-2">
  <h2>Discover a <br/> world of jewelry</h2>
  <button><Link className="link" to="/bestselling">Explore Bestseller</Link></button>
  </div>
  </div>,

];

const Carousel = () => (
  <React.Fragment>
    <AliceCarousel
      autoPlay
      autoPlayInterval={1500} 
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableButtonsControls
      infinite
    />
  </React.Fragment>
);

export default Carousel;