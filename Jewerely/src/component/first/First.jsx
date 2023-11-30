import { Link } from "react-router-dom";
import "./style.css";



function First(){
    return(
  <div className="first-div">
<div className="inner-1-div">
  <h2>NEW ARRIVALS</h2>
  <button>SHOP NOW</button>
  
  </div>
  <div className="inner-2-div">
  <h2>BEST SELLER</h2>
   <button><Link className="link-1" to="/bestselling">SHOP NOW</Link></button>
  
  </div>
  <div className="inner-3-div">
  <h2>CLEARANCE SALE</h2>
    <button>SHOP NOW</button>
  
  </div>

    </div>
    )
}



export default First

