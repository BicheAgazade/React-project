import "./style.css"
import React from 'react';
import {Link } from 'react-router-dom';




function Category(){

 return(
 
   <React.Fragment>
       <div className="hr-div">
        <h2>TOP CATEGORIES</h2>
        <hr />
       </div>
        <div className="category-div">
            <div className="inner-category-1">
           <button ><Link className="link-1" to="/earrings">EARRINGS</Link></button>
              </div>
              <div className="inner-category-2">
             <button><Link className="link-1" to="/necklaces">NECKLACE</Link></button>
            </div>
              <div className="inner-category-3">
             
                <button ><Link className="link-1" to="/rings">RINGS</Link></button>
            </div>
              <div className="inner-category-4">
          
                <button ><Link className="link-1" to="/bracelets">BRACELETS</Link></button>
            </div>
        </div>
   
    </React.Fragment>

 )}

export default Category



















