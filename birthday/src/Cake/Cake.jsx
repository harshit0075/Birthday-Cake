import React, { useState, useEffect } from 'react';
import './Cake.css';
import birthdaySong from '../Audio/audio.mp3';

const Cake = () => {
  const [decorations, setDecorations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLines, setShowLines] = useState(false);

  const addDecoration = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 100;
    const y = (event.clientY - rect.top) / rect.height * 100;

    setDecorations([...decorations, { x, y }]);
    setIsPlaying(true);
    setShowLines(true);
  };

  useEffect(() => {
    if (isPlaying) {
      const audio = new Audio(birthdaySong);
      audio.play();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  return (
    <div className="cake-container">
      <div className="cake" onClick={addDecoration}>
        {decorations.map((decoration, index) => (
          <div
            key={index}
            className="decoration"
            style={{ top: decoration.y + '%', left: decoration.x + '%' }}
          ></div>
        ))}
        <div className="candle"></div>
        <div className="text">Happy Birthday!</div>
      </div>
      <div className="banner">Happy Birthday!</div>
      <div className="birthday-note" style={{ display: showLines ? 'block' : 'none' }}>
        <p>Dear [Akash Mishra],</p>
        <p>Happy Birthday! 🎉🎂 On this special day, I want to take a moment to celebrate you and the incredible person you are. Another year has come and gone, and I am so grateful to have you in my life.</p>
        <p>You bring so much joy, laughter, and positivity to every moment. Your friendship has been a guiding light, and I'm truly lucky to call you my friend. Whether it's our hilarious inside jokes, the countless adventures we've embarked on, or the late-night heart-to-heart conversations, every memory we've created together is a cherished treasure.</p>
        <p>As you blow out the candles and make a wish, know that my wish for you is a year filled with even more success, happiness, and unforgettable moments. May your journey ahead be as bright and exciting as you are.</p>
        <p>Thank you for being an amazing friend, for all the support you've given me, and for the countless memories we've shared. Here's to you, your dreams, and the wonderful times that lie ahead. May your birthday be as incredible as you are!</p>
        <p>Cheers to another year of friendship and making wonderful memories together. Have an absolutely fantastic birthday, my dear friend!</p>
        <p>Wishing you all the love, laughter, and joy in the world.</p>
        <p>Happy Birthday!</p>
        <p>With love and warmest wishes,</p>
        <p>[Developers]</p>
      </div>
    </div>
  );
};

export default Cake;
