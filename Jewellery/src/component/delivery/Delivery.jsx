import "./style.css"
import React, { useEffect, useRef } from 'react';

function Delivery() {
const container9Ref = useRef(null);
const container10Ref = useRef(null);
const container11Ref = useRef(null);
const container12Ref = useRef(null);
 useEffect(() => {
    const handleScroll = () => {
    const container9Top = container9Ref.current.getBoundingClientRect().top;
    const container10Top = container10Ref.current.getBoundingClientRect().top;
    const container11Top = container11Ref.current.getBoundingClientRect().top;
    const container12Top = container12Ref.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

      if (container9Top <= windowHeight * 1) {
        container9Ref.current.classList.add('animate-container-9');
      }else {
      container9Ref.current.classList.remove('animate-container-9')}; 

      if (container10Top <= windowHeight * 1) {
        container10Ref.current.classList.add('animate-container-10');
      }else {
      container10Ref.current.classList.remove('animate-container-10')}
       if (container11Top <= windowHeight * 1) {
        container11Ref.current.classList.add('animate-container-11');
      }else {
      container11Ref.current.classList.remove('animate-container-11')};
       if (container12Top <= windowHeight * 1) {
        container12Ref.current.classList.add('animate-container-12');
      }else {
      container12Ref.current.classList.remove('animate-container-12')}
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
        return(
            <div className="main-1">
                <div ref={container9Ref}>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-04.png"/>
                    <h2>BIG DISCOUNTS</h2>
                    <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                </div>
                 <div ref={container10Ref}>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-01.png"/>
                    <h2>FREE SHIPPING</h2>
                    <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                </div>
                 <div ref={container11Ref}>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-02.png"/>
                    <h2>SECURE PAYMENTS</h2>
                    <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                </div>
                 <div ref={container12Ref}>
                    <img src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/icon-03.png"/>
                    <h2>ORDER TRACKING</h2>
                    <p>Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.</p>
                </div>
                
            </div>
        )
    }


export default Delivery