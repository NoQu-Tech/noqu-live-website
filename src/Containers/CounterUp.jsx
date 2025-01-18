import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ targetNumber, counting }) => {
  const [counter, setCounter] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null); // create a ref to store the container element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 1.0 });

    if (containerRef.current) { // check if the ref exists
      observer.observe(containerRef.current); // observe the container element
    }

    return () => {
      if (containerRef.current) { // check if the ref exists
        observer.unobserve(containerRef.current); // unobserve the container element
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let timer = null;
      if (targetNumber > 0) {
        const incrementInterval = 3000 / targetNumber;
        timer = setInterval(() => {
          if (counter < targetNumber) {
            setCounter((prevCounter) => prevCounter + counting);
          } else {
            clearInterval(timer);
          }
        }, incrementInterval);
      }
      return () => {
        if (timer) {
          clearInterval(timer);
        }
      };
    }
  }, [isVisible, targetNumber, counter]);

  return (
    <div ref={containerRef} id="counter-container"> {/* assign the ref to the container element */}
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;