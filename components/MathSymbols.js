import React, { useEffect, useState } from 'react';

const MathSymbols = () => {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    const generateRandomSymbol = () => {
      const symbolsList = ['+', '-', '×', '÷', '=', '√', 'π', '≤', '≥', '≠'];
      const randomSymbol = symbolsList[Math.floor(Math.random() * symbolsList.length)];
      return randomSymbol;
    };

    const generateRandomPosition = () => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      return { x: randomX, y: randomY };
    };

    const generateSymbols = () => {
      const newSymbols = Array.from({ length:  75 }, (_, index) => ({
        id: index,
        symbol: generateRandomSymbol(),
        position: generateRandomPosition(),
      }));
      setSymbols(newSymbols);
    };

    generateSymbols();

    // Re-generate symbols every 10 seconds
    const interval = setInterval(generateSymbols, 10000);

    return () => clearInterval(interval);
  }, []); // Run only once on component mount

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1]">
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          className="absolute animate-spin transition-all ease-in duration-500"
          style={{
            top: symbol.position.y + 'px',
            left: symbol.position.x + 'px',
            fontSize: '40px',
            color: 'black', // Customize color if needed
          }}
        >
          {symbol.symbol}
        </div>
      ))}
    </div>
  );
};

export default MathSymbols;
