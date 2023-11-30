import React, { useState, useTransition } from 'react';
import { connect } from "react-redux";
import "./style.css"; 




function Trendingnow(props) {

  const [hoveredImages, setHoveredImages] = useState({});

 
  const handleMouseEnter = (index) => {
    setHoveredImages({ ...hoveredImages, [index]: true });
  };

  const handleMouseLeave = (index) => {
    setHoveredImages({ ...hoveredImages, [index]: false });
  };

  return (
    <React.Fragment>
      <div className="info-div-1">
        <p>POPULAR PRODUCTS</p>
        <h2>TRENDING NOW</h2>
        <hr />
      </div>
      <div className="product-div-1">
        {props.pages.trending.map((obj, index) => (
         <div className="inner-div-1 " key={index}>
         <img 
                src={hoveredImages[index] ? obj.img_url_2 : obj.img_url}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
            <h3>{obj.name}</h3>
            <p>{obj.price}</p>
          </div>
       
     
      
            ))}
         </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
 return state
  
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Trendingnow);
