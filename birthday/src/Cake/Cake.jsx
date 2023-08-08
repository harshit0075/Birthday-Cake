import React, { useState, useEffect } from 'react';
import './Cake.css';
import birthdaySong from '../Audio/audio.mp3';

const Cake = () => {
  const [decorations, setDecorations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const addDecoration = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width * 100;
    const y = (event.clientY - rect.top) / rect.height * 100;

    setDecorations([...decorations, { x, y }]);
    setIsPlaying(true);
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
      <div className="birthday-note">
      Dear [Akash Mishra],<br/><br/>

Happy Birthday! 🎉🎂 On this special day, I want to take a moment to celebrate you and the incredible person you are. Another year has come and gone, and I am so grateful to have you in my life.<br/><br/>

You bring so much joy, laughter, and positivity to every moment. Your friendship has been a guiding light, and I'm truly lucky to call you my friend. Whether it's our hilarious inside jokes, the countless adventures we've embarked on, or the late-night heart-to-heart conversations, every memory we've created together is a cherished treasure.<br/><br/>

As you blow out the candles and make a wish, know that my wish for you is a year filled with even more success, happiness, and unforgettable moments. May your journey ahead be as bright and exciting as you are.<br/><br/>

Thank you for being an amazing friend, for all the support you've given me, and for the countless memories we've shared. Here's to you, your dreams, and the wonderful times that lie ahead. May your birthday be as incredible as you are!<br/><br/>

Cheers to another year of friendship and making wonderful memories together. Have an absolutely fantastic birthday, my dear friend!<br/><br/>

Wishing you all the love, laughter, and joy in the world.<br/><br/>

Happy Birthday!<br/><br/>

With love and warmest wishes,<br/>
[Developers ]
      </div>
    </div>
  );
};

export default Cake;




