import React from "react"
import "./style.css"
import { connect } from "react-redux";
import addToBasket from "../redux/Actions";
import BasketItemCount from "../basketcount/BasketItemCount";




function Basket(props){
  
  
    return(
        <React.Fragment>
           <div className="basket-count-1"> <BasketItemCount/></div>
       <img className="img-basket" data-toggle="modal" data-target="#basket_modal" src="https://cdn-icons-png.flaticon.com/512/118/118096.png" alt="" />
        <div className="modal fade" id="basket_modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>BASKET ITEMS</h2>
                    </div>
                    <div className="modal-body">
                     <div className="inner-modal">  
                        {props.basket.map((obj)=>(
                   <div >  
                    <img  src={obj.img_url}/>
                    <h3>{obj.name}</h3>
                    <p>{obj.price}</p>
                      </div>) )}
                       </div>  
                   
                    </div>
                    <div className="modal-footer">
                        <button   className="btn-basket"    data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
                       }

       const mapStateToProps=(state)=>{
            return{
                basket: state.shop.basket
            }
          };
          const mapDispatchToProps=(dispatch)=>{
                return {
    addToBasket: (item) => dispatch(addToBasket(item))
  }};
         


export default connect(mapStateToProps,mapDispatchToProps)(Basket)









