import React, { useEffect } from 'react';

const Ping = ({ id }) => {
  useEffect(() => {
    // Generate random values for top, left, and z-index

    const handleScroll = () => {
        const randomTop = Math.random() * (window.innerHeight - 40);
        const randomLeft = Math.random() * (window.innerWidth - 40);
        const randomZIndex = Math.floor(Math.random() * 2) - 1; // -1 or 0
    
        // Apply inline styles to the element
        const pingElement = document.getElementById(id);
        if (pingElement) {
          pingElement.style.top = `${randomTop}px`;
          pingElement.style.left = `${randomLeft}px`;
          pingElement.style.zIndex = randomZIndex.toString();
        }
        console.log('User scrolled down!');
      };
  
      // Attach the event listener
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Detach the event listener on component unmount
        window.removeEventListener('scroll', handleScroll);
      };
  }, [id]);

  return (
    <div
      id={id}
      className="w-10 h-10 bg-blue-500 rounded-full animate-ping fixed transition-all ease-in duration-500"
    ></div>
  );
};

export default Ping;