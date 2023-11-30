
import"./style.css"
import React, { useState } from "react"
import { connect } from "react-redux"
import { Novigation } from "../novigation/Novigation";
import Footer from "../footer/Footer";
import addToBasket from "../redux/Actions";


function Selling(props){
  const [hoveredImages, setHoveredImages] = useState({});

 
  const handleMouseEnter = (index) => {
    setHoveredImages({ ...hoveredImages, [index]: true });
  };

  const handleMouseLeave = (index) => {
    setHoveredImages({ ...hoveredImages, [index]: false });
  };
  
        return (
          <React.Fragment>
             <Novigation/>
               <div className="selling-info-1">
                  <h2>BEST SELLING</h2>
                </div>

                <div className="selling-div" >
                   {props.pages.bestseller.map((obj, index)=>
             <div className="selling-inner-div" key={index} >
                   
                 <img
                src={hoveredImages[index] ? obj.img_url_2 : obj.img_url}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
                      <h3>{obj.name}</h3>
                       <p>{obj.price}</p>
                      <button className="selling-add-btn" onClick={()=>props.addToBasket(obj.index)}>ADD TO BASKET</button>
                         </div>
                       )} 
                    </div>
                    <div className="footer-aboutus"> <Footer/></div>
                </React.Fragment>
        )
     }
     
    const mapStateToProps=(state)=>{
            return state;
          };
          const mapDispatchToProps=(dispatch)=>{
            return{
              addToBasket:(index)=> dispatch(addToBasket(index))
            }
          }


export default connect(mapStateToProps,mapDispatchToProps)(Selling)

