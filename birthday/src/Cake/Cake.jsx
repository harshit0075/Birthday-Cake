import React, { useState, useEffect } from 'react';
import './Cake.css';
import birthdaySong from './birthday-song.mp3'; // Import your audio file

const Cake = () => {
  const [decorations, setDecorations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const addDecoration = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

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
            style={{ top: decoration.y, left: decoration.x }}
          ></div>
        ))}
      </div>
      <div className="banner">Happy Birthday!</div>
    </div>
  );
};

export default Cake;
