import React from "react";
import { connect } from "react-redux";

function BasketItemCount(props) {
  
  return( 

  <div className="basket-item-count">
   {props.itemCount}
    </div> 
    )
}

const mapStateToProps = (state) => {
  return {
    itemCount: state.shop.basket.length,
  };
};

export default connect(mapStateToProps)(BasketItemCount);