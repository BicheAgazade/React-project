import React, { useEffect, useRef } from 'react';
import "./style.css";
import { Novigation } from "../novigation/Novigation";
import Footer from "../footer/Footer";

function Contact(){
  
const container19Ref = useRef(null);
const container20Ref = useRef(null);
const container21Ref = useRef(null);
const container22Ref = useRef(null);
const container23Ref = useRef(null);
const container24Ref = useRef(null);

useEffect(() => {
    const handleScroll = () => {
    const container19Top = container19Ref.current.getBoundingClientRect().top;
    const container20Top = container20Ref.current.getBoundingClientRect().top;
    const container21Top = container21Ref.current.getBoundingClientRect().top;
    const container22Top = container22Ref.current.getBoundingClientRect().top;
     const container23Top = container23Ref.current.getBoundingClientRect().top;
    const container24Top = container24Ref.current.getBoundingClientRect().top;
   
    const windowHeight = window.innerHeight;

      if (container19Top <= windowHeight * 1) {
        container19Ref.current.classList.add('animate-container-19');
      }else {
      container19Ref.current.classList.remove('animate-container-19')}; 

      if (container20Top <= windowHeight * 1) {
        container20Ref.current.classList.add('animate-container-20');
      }else {
      container20Ref.current.classList.remove('animate-container-20')}
      
      if (container21Top <= windowHeight * 1) {
        container21Ref.current.classList.add('animate-container-21');
      }else {
      container21Ref.current.classList.remove('animate-container-21')}; 

      if (container22Top <= windowHeight * 1) {
        container22Ref.current.classList.add('animate-container-22');
      }else {
      container22Ref.current.classList.remove('animate-container-22')}
       if (container23Top <= windowHeight * 1) {
        container23Ref.current.classList.add('animate-container-23');
      }else {
      container23Ref.current.classList.remove('animate-container-23')}; 

      if (container24Top <= windowHeight * 1) {
        container24Ref.current.classList.add('animate-container-24');
      }else {
      container24Ref.current.classList.remove('animate-container-24')}
       
       
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
      <React.Fragment>
      <Novigation/>
     <div className="contact-info">
       <h2>CONTACT</h2>
          </div>
       <div className="contact-help" ref={container19Ref}>
        <h2>How Can We Help?</h2>
        <p>Find the hairdresser you can't live without! Deweler Jewelry Shop is located 2972 Westheimer Rd, Santa Ana, New York.</p>
            </div>
      <div className="contact-flex-div" ref={container20Ref}>
        <div className="inner-contact">
      <div className="img-contact"> <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/placeholder.svg" alt="" /></div>
       <h3>Our Location</h3>
       <p>2972 Westheimer Rd, <br/>Santh Ana,New Yourk.</p>
        </div>
       <div className="inner-contact">
        <div  className="img-contact">    <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/tel.svg" alt="" /></div>
           <h3>Contact Us</h3>
             <p>Phone: +001 234 567 890 <br/>
               Fax: +001 234 567 890
               </p>
        </div>
      <div className="inner-contact">
         <div   className="img-contact"> 
         <img src="https://rosal-feedmills.com/wp-content/uploads/2021/03/email.svg" alt="" />
         </div>
          <h3>Web Address</h3>
           <p>www.yoursiteaddress.com
            www.yoursiteaddress.com
            </p>
           </div>
          </div>
          <div className="img-contact-div" ref={container21Ref}>
           <img src="https://assets.website-files.com/6425007a596eecb2842b6df4/642bbd5377354976435707d6_video-banner.png" alt="" />
           <div className="work-div" ref={container22Ref}>
           <div className="inner-work-div">
               <h3>Monday - Tuesday</h3>
                <p>9am - 11pm</p>
                  </div>
            <div className="inner-work-div">
                <h3>Wednesday - Thursday</h3>
                  <p>10am - 12pm</p>
                    </div>
              <div className="inner-work-div">
                  <h3>Friday - Saturday</h3>
                   <p>11am - 9pm</p>
                      </div>
               </div>
             </div>
  <div className="form-contact-div">
       <div className="form-info" ref={container23Ref}> 
          <p>SAY HI, MAKE CUSTOM REQUEST</p>
          <h2>We Would Love To Hear From You!</h2>
      </div>
                  
        <form className="form w-75 mx-auto form-div" ref={container24Ref}>
              <div className="form-group w-50 p-2 input-div">
             <input className="form-control " required placeholder="First Name" type="text" />
               </div>

              <div className="form-group w-50 p-2">
                 <input className="form-control" required placeholder="Last Name" type="text" />
                 </div>
              <div className="form-group w-50 p-2">
                  <input className="form-control" required placeholder="Email" type="text" />
                </div>
               <div className="form-group w-50 p-2">
                 <input className="form-control " required placeholder="Subject" type="text" />
                </div>
                <textarea className="w-100 form-control m-2" required placeholder="Your Message" name="" id="" cols="30" rows="10"></textarea>
                <button className="form-btn m-2">SEND MESSAGE</button>

                   </form>

                    </div>

         <div className="footer-aboutus"> <Footer/></div>
    </React.Fragment>
  )
}

export default Contact