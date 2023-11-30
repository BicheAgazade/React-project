import Footer from "../footer/Footer";
import { Novigation } from "../novigation/Novigation"
import "./style.css"
import React, { useEffect, useRef } from 'react';

function AboutUs(){
const container13Ref = useRef(null);
const container14Ref = useRef(null);
const container15Ref = useRef(null);
const container16Ref = useRef(null);
const container17Ref = useRef(null);
const container18Ref = useRef(null);

 useEffect(() => {
    const handleScroll = () => {
    const container13Top = container13Ref.current.getBoundingClientRect().top;
    const container14Top = container14Ref.current.getBoundingClientRect().top;
    const container15Top = container15Ref.current.getBoundingClientRect().top;
    const container16Top = container16Ref.current.getBoundingClientRect().top;
     const container17Top = container17Ref.current.getBoundingClientRect().top;
    const container18Top = container18Ref.current.getBoundingClientRect().top;
   
    const windowHeight = window.innerHeight;

      if (container13Top <= windowHeight * 1) {
        container13Ref.current.classList.add('animate-container-13');
      }else {
      container13Ref.current.classList.remove('animate-container-13')}; 

      if (container14Top <= windowHeight * 1) {
        container14Ref.current.classList.add('animate-container-14');
      }else {
      container14Ref.current.classList.remove('animate-container-14')}
      
      if (container15Top <= windowHeight * 1) {
        container15Ref.current.classList.add('animate-container-15');
      }else {
      container15Ref.current.classList.remove('animate-container-15')}; 

      if (container16Top <= windowHeight * 1) {
        container16Ref.current.classList.add('animate-container-16');
      }else {
      container16Ref.current.classList.remove('animate-container-16')}
       if (container17Top <= windowHeight * 1) {
        container17Ref.current.classList.add('animate-container-17');
      }else {
      container17Ref.current.classList.remove('animate-container-17')}; 

      if (container18Top <= windowHeight * 1) {
        container18Ref.current.classList.add('animate-container-18');
      }else {
      container18Ref.current.classList.remove('animate-container-18')}
       
       
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
   
    return(
       <React.Fragment>
          <Novigation/>
          <div className="aboutus-info">
             <h2>ABOUT US</h2>
                </div>
                <div className="aboutus-container">
                    <h2>mojuri</h2>
                    <p>Mojuri was created on the white shores of the island of Ibiza. Its name is inspired by the Sanskrit word 'mojuri' which means “she who moves through the water”.</p>
                    <p>Because of its powerful symbolic meaning and captivating glamour, the dragonfly was immediately chosen as the core inspiration source and logo of the brand.</p>
                </div>
                <div className="aboutus-inner-div">
                    <img  ref={container13Ref} src="https://www.anapsara.com/cdn/shop/files/Aboutus_Anapsara_2_48e7bcdb-aa51-4413-b02d-a565fc93323f_1000x.jpg?v=1614288930"  />
                    <div className="aboutus-inner-div-info"  ref={container14Ref}>
                        <h2>The dragonfly is always the main character of the mojuri world.</h2>
                        <p>The dragonfly is a symbol of evolution and transformation, representing resilience and positive change, it finds its strenght in intellectual and emotional maturity which brings inner balance and understanding of the deepest meaning of life.</p>
                    </div>
                </div>
                <div className="aboutus-inner-div">
                  
                    <div className="aboutus-inner-div-info" ref={container16Ref} >
                        <h2>Eugenia Shekhtman</h2>
                        <p>Eugenia Shekhtman decided to create mojuri after a long-lasting twenty years' career in the fashion world as a the result of her personal and spiritual growth.</p>
                        <p>Born in Ukraine, Eugenia grew up in New York and later moved to Italy where she opened her own showroom dedicated to showcasing young and innovative designers.</p>
                        <p>She has always been focused on high-end fashion and is now sharing her time between Milan and Antwerp, where -together with her husband - she owns "Verso", a well-known concept store.</p>
                    </div>
                      <img ref={container15Ref} src="https://www.anapsara.com/cdn/shop/files/WhatsApp_Image_2021-04-28_at_21.17.35_1000x.jpg?v=1619728854"  />
                </div>
                <div className="aboutus-inner-div">
                    <img ref={container17Ref}    src="https://www.anapsara.com/cdn/shop/files/Aboutus_Anapsara_1000x.jpg?v=1614288929"  />
                    <div className="aboutus-inner-div-info" ref={container18Ref}   >
                        <h2>The mojuri universe is in constant change</h2>
                        <p>The collection is characterized by essential and stylized lines featuring sacred geometrical shapes such as triangles, rhombuses and octagons. A touch of the Art Deco period has its presence, adding flare and spark to the feminine undertone of the mojuri collection.</p>
                   <h3>"In my opinion, jewels are fundamental elements of fashion. They represent the final touch making every look complete." Eugenia Shekhtman states.</h3>
                    
                    </div>
                </div>

                <div className="footer-aboutus"> <Footer/></div>
               
       </React.Fragment>
    )
}

export default AboutUs
