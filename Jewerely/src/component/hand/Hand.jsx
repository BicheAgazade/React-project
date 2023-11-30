import React, { useEffect, useRef } from 'react';
import"./style.css"


function Hand (){
     const container4Ref = useRef(null);
     const container5Ref = useRef(null);
     useEffect(() => {
    const handleScroll = () => {
      const container4Top = container4Ref.current.getBoundingClientRect().top;
      const container5Top = container5Ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

      if (container4Top <= windowHeight * 1) {
        container4Ref.current.classList.add('left-animation');
      }else {
      container4Ref.current.classList.remove('left-animation')}; 
      

      if (container5Top <= windowHeight * 1) {
        container5Ref.current.classList.add('right-animation');
      }else {
      container5Ref.current.classList.remove('right-animation'); 
    }};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return(
      
        <div className="main-container">
            <div  className="img-div-1" ref={container4Ref}> 
              <img src="https://splashythemes.com/opencart/OPC02/OPC020098/image/cache/catalog/demo/product/22-503x567.jpg"/>
              
            </div> 
         <div className="inner-container" ref={container5Ref}>
            
            <h2 >HANDCRAFTE & ETHICALLY SOURCED</h2>
            <div className="flex-div" >
                <img src="https://cdn-icons-png.flaticon.com/512/2385/2385941.png" />
                <div className="flex-div-1">
                    <h3>FAIR PRICING</h3>
                    <p>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra</p>
                    </div>
            </div>
             <div className="flex-div" >
                <img src="https://cdn-icons-png.flaticon.com/512/2237/2237677.png" />
                <div className="flex-div-1">
                    <h3>HIGH QUALITY</h3>
                    <p>Nullam quis ante. Pellentesque libero tortor, tincidunt et, tinciduntamet est.In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra</p>
                    </div>
            </div>
          
            <button>LEARN MORE</button> 
            </div> 
            </div>
        
      
     
    )
}
export default Hand



