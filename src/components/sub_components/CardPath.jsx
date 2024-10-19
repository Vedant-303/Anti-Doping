import React, { useEffect, useRef } from 'react';
import './CardPath.css'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';


gsap.registerPlugin(ScrollTrigger);
const CardPath = ({className, description = "No Description" , title = "No Title", number="no Num"}) => {

    const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current, 
      { opacity: 0, y: 50 },  
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: cardRef.current,  
          start: "top 80%",         
          toggleActions: "play none none none",  
        },
      }
    );
  }, []);
  return (
    <div ref={cardRef} className={`card-path ${className}`}>
      <h1 className="card-number">{number}</h1>
      <h2 className="card-title">{title}</h2>
      <p className="card-description">
        {description}
      </p>
      <button className="card-button">Learn now</button>
    </div>
  );
};

export default CardPath;
