import React, { useEffect, useRef } from 'react';
import "./style.css"

function Unique(){
  const container6Ref = useRef(null);
  const container7Ref = useRef(null);
  const container8Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
    const container6Top = container6Ref.current.getBoundingClientRect().top;
    const container7Top = container7Ref.current.getBoundingClientRect().top;
    const container8Top = container8Ref.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

      if (container6Top <= windowHeight * 1) {
        container6Ref.current.classList.add('animate-container-6');
      }else {
      container6Ref.current.classList.remove('animate-container-6')}; 

      if (container7Top <= windowHeight * 1) {
        container7Ref.current.classList.add('animate-container-7');
      }else {
      container7Ref.current.classList.remove('animate-container-7')}
       if (container8Top <= windowHeight * 1) {
        container8Ref.current.classList.add('animate-container-8');
      }else {
      container8Ref.current.classList.remove('animate-container-8')}
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
        <div className="unique-div">
            <div className="inner-unique" ref={container6Ref}>
                <h2>Jewelry Unique Styles</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour,  randomised words which don't look even slightly believable. If you  going to use a passage of Lorem Ipsum, you need to be sure ther anything embarrassing hidden in the</p>
                <button>READ MORE</button>
                </div>
            <div className="img-unique">
                <img ref={container7Ref} className="img-unique-1" src="https://assets.website-files.com/6425007a596eecb2842b6df4/6428fe2713003e4a2fd914dc_about-1.png" />
                <img ref={container8Ref} className="img-unique-2" src="https://assets.website-files.com/6425007a596eecb2842b6df4/6428fe56f9d51a4a11901776_about-2.png" />
                </div>
            </div>
    )
}
export default Unique