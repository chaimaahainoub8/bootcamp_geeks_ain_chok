import React, { useState } from 'react';
import quotes from './quotesDb';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [bgColor, setBgColor] = useState('#282c34');

  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateQuote = () => {
    let newIndex;
    let newQuote;
    
    // Loop to ensure we don't get the same quote twice in a row
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[newIndex];
    } while (newQuote === currentQuote);

    setCurrentQuote(newQuote);
    setBgColor(randomColor());
  };

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '400px', padding: '50px', transition: '0.5s' }}>
      <div className="card p-5 mx-auto" style={{ maxWidth: '600px', borderRadius: '15px' }}>
        <h2 style={{ color: bgColor }}>"{currentQuote.quote}"</h2>
        <p className="text-end mt-3 text-secondary">- {currentQuote.author}</p>
        
        <button 
          onClick={generateQuote} 
          className="btn text-white mt-4" 
          style={{ backgroundColor: bgColor }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;