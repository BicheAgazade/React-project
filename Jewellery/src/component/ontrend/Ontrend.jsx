import React, { useEffect, useRef } from 'react';
import "./style.css";

function Ontrend() {
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
   const container3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container1Top = container1Ref.current.getBoundingClientRect().top;
      const container2Top = container2Ref.current.getBoundingClientRect().top;
    const container3Top = container3Ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (container1Top <= windowHeight * 1) {
        container1Ref.current.classList.add('animate-container-1');
      }else {
      container1Ref.current.classList.remove('animate-container-1')}; 

      if (container2Top <= windowHeight * 1) {
        container2Ref.current.classList.add('animate-container-2');
      }else {
      container2Ref.current.classList.remove('animate-container-2')}
       if (container3Top <= windowHeight * 1) {
        container3Ref.current.classList.add('animate-container-3');
      }else {
      container3Ref.current.classList.remove('animate-container-3')}
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-div">
      <div className="info-1" ref={container1Ref}>
                     <h3>UNIQUE PIECES</h3>
                     <h2>BE ALWAYS ON TREND</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button>SHOP NOW</button>
      </div>
      <div className="img-div" >
       <img className="img-1"  ref={container2Ref} src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1900/https://blog.allepaznokcie.pl/wp-content/uploads/kszta%C5%82t-brwi-1900x2376.jpg" />
       <img className="img-2"  ref={container3Ref} src="https://websitedemos.net/blingg-jewelry-store-04/wp-content/uploads/sites/1119/2022/08/bg-02.jpg"/>
      </div>
    </div>
  );
}

export default Ontrend;








