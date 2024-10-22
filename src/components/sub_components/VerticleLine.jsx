import React, {useEffect, useState}  from 'react'
import './VerticleLine.css'


function VerticleLine({ScrollPosition, style, growStyle}) {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          // console.log('Scroll position:', window.scrollY);
          if (scrollPosition > ScrollPosition) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [ScrollPosition]);

      const combinedStyle = isVisible ? { ...style, ...growStyle } : style;
  return (
    <>
      <div style={combinedStyle} className={`vertical-line ${isVisible ? 'grow' : ''}`}></div>
    </>
  )
}

export default VerticleLine
