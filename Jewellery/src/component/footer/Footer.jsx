import { Component } from "react"
import "./style.css"
import React from "react"
import {Link } from 'react-router-dom';

class Footer extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div className="footer-div">
              <div className="footer-img-div">  
                <img src="https://caketheme.com/html/mojuri/media/logo-white.png"/>
                <div className="inner-footer-img-div">
                <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/tel.svg" alt="" />
                <p>+1 246-345-0695</p>
                </div>
                  <div className="inner-footer-img-div">
                <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/email.svg" alt="" />
                <p>info@mojurimail.com</p>
                </div>

                <div className="inner-footer-img-div">
                <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/placeholder.svg" alt="" />
                <p>2972 Westheimer Rd,<br/>
                   Santh Ana,New Yourk</p>
                </div>
                <div className="soc-div">
              <a href="https://img.freepik.com/premium-photo/creative-concept-thank-you-your-attention-text-notebook_292052-1526.jpg?w=2000"> <img  src="https://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="" /></a>
              <a href="https://img.freepik.com/premium-photo/creative-concept-thank-you-your-attention-text-notebook_292052-1526.jpg?w=2000">  <img src="https://i.pinimg.com/originals/ca/3b/f0/ca3bf05cfab74677e5b73b130bd30991.png" alt="" /></a>
              <a href="https://img.freepik.com/premium-photo/creative-concept-thank-you-your-attention-text-notebook_292052-1526.jpg?w=2000"> <img src="https://img.freepik.com/free-icon/twitter_318-788985.jpg" alt="" /></a>
              <a href="https://img.freepik.com/premium-photo/creative-concept-thank-you-your-attention-text-notebook_292052-1526.jpg?w=2000">  <img src="https://www.pngplay.com/wp-content/uploads/12/WhatsApp-Logo-Transparent-Image.png" alt="" /></a>
             
                </div>
               </div>
                <div className="footer-info-div">
                    <div className="btn-footer"> 
                    <h2>ABOUT US</h2>  
                    <button><Link className="link-footer" to="/">HOME</Link></button>
                    <button><Link className="link-footer" to="/aboutus">ABOUT US</Link></button>
                    <button><Link className="link-footer" to="/contact">CONTACT</Link></button>
                    </div>
                    <div className="btn-footer">
                        <h2>SHOP</h2>
                    <button ><Link className="link-footer" to="/rings">RINGS</Link></button>
                    <button ><Link className="link-footer" to="/bracelets">BRACELETS</Link></button>
                    <button ><Link className="link-footer" to="/earrings">EARRINGS</Link></button>
                    <button><Link className="link-footer" to="/necklaces">NECKLACE</Link></button>
                    </div>
                   
                </div>
                <div className="input-div-1">
                    <h2>Subscribe</h2>
                    <div className="form-group ">
                        <input className="form-control  div-input" required placeholder="Enter Your Mail" type="email" name="" id="" />
                        </div>
                    <button>Subscribe</button>
                </div>
            </div>
        )
    }
}

export default Footer