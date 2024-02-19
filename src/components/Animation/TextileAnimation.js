import React, { useEffect, useState } from 'react';
import { Element, scroller } from 'react-scroll';
import './TextileAnimation.css'; // Import your CSS file

const TextileAnimation = () => {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0 && scrollDirection !== 'down') {
        setScrollDirection('down');
      } else if (currentScrollY === 0 && scrollDirection !== 'up') {
        setScrollDirection('up');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  const scrollToNextSection = () => {
    scroller.scrollTo('processedProducts', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  const scrollToPreviousSection = () => {
    scroller.scrollTo('rawMaterial', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <Element name="rawMaterial">
        <img
          className={`image ${scrollDirection === 'up' ? 'animateIn' : 'animateOut'}`}
          src="/Images/1.jpg"  // Replace with your raw material image path
          alt="Raw Material"
        />
      </Element>

      <Element name="processedProducts">
        <img
          className={`image ${scrollDirection === 'down' ? 'animateIn' : 'animateOut'}`}
          src="/Images/2.jpg"  // Replace with your processed products image path
          alt="Processed Products"
        />
      </Element>

      {scrollDirection === 'up' && (
        <button onClick={scrollToNextSection}>Scroll Down</button>
      )}
      {scrollDirection === 'down' && (
        <button onClick={scrollToPreviousSection}>Scroll Up</button>
      )}
    </div>
  );
};

export default TextileAnimation;
