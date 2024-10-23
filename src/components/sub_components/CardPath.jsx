import React, { useEffect, useRef } from "react";
import "./CardPath.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import imgsvg from "./ImagesSvgs";
import { display } from "@mui/system";

gsap.registerPlugin(ScrollTrigger);

const CardPath = ({
  className,
  description = "No Description",
  title = "No Title",
  number = "no Num",
  style, 
  flexReverse,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
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

  const absoluteStyle = {
    display:"flex",
    // position: "absolute",
    marginTop: "2px",
    zIndex: '-1',
    transition: "top 0.5s ease, left 0.5s ease",
  };
  const cardstyle = {
    display:"flex",
  };
  
  const combinedStyle = { ...cardstyle, ...flexReverse };
  const combinedStyle2 = { ...absoluteStyle, ...style };

  return (
    <div className="card-main" style={combinedStyle}>
      <div ref={cardRef} className={`card-path ${className}`}>
        <h1 className="card-number">{number}</h1>
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn now</button>
      </div>
      <img
        src={imgsvg.poly} // Ensure imgsvg.poly is defined and imported correctly
        className="poly"
        style={combinedStyle2}
        alt=""
      />
    </div>
  );
};

export default CardPath;
