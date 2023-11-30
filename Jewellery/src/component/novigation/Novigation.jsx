import Basket from "../basket/Basket";
import Carousel from "../corusel/Corusel";
import "./style.css";
import React, { Component } from "react";
import {Link } from 'react-router-dom';




 export class Novigation extends Component {


    constructor() {
        super()
        this.state = {
            isArrowHovered: false,
            isHovered: false 
    }}


   

    render(){
        return (
          <React.Fragment>
              <div className="novigation-div">
                <img  src="https://caketheme.com/html/mojuri/media/logo-white.png"/>
                
                <div className="arrow-container">
                    <button
                        className={`arrow-button ${this.state.isArrowHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => this.setState({ isArrowHovered: true })}
                        onMouseLeave={() => this.setState({ isArrowHovered: false })}
                    >
                       <Link className="link" to="/shops"> SHOP ▼</Link> 
                    </button>
                    
                </div>
                {this.state.isArrowHovered && (
                    <div
                        className={`additional-buttons ${this.state. isArrowHovered ? 'hovered' : ''}`}
                        onMouseEnter={() => this.setState({  isArrowHovered: true })}
                        onMouseLeave={() => this.setState({  isArrowHovered: false })}
                    >
                        <button><Link className="link" to="/rings">RINGS</Link></button>
                        <button><Link className="link" to="/bracelets">BRACELETS</Link></button>
                        <button><Link className="link" to="/earrings">EARRINGS</Link></button>
                        <button><Link className="link" to="/necklaces">NECKLACE</Link></button>
                    </div>
                )}
                 <div >
                    <button><Link className="link" to="/">HOME</Link></button>
                    <button><Link className="link" to="/aboutus">ABOUT US</Link></button>
                    <button><Link className="link" to="/contact">CONTACT</Link></button>
                   
                </div>
              
           
            
            </div>
  
             <Basket/>
             
       
          </React.Fragment>
        )
    }
}

class Novcar extends Component {
    render() {
        return (
            <div className="app-container">
                <Novigation/>
                <Carousel/>
               
            </div>
        )
    }
}

export default Novcar;








