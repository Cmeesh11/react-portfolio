import React, { useState } from 'react';

function HoverableCard({ imageSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const style = {
    card: {
      width: '18.6rem',
    },
  };

  return (
    <div
      className={`card m-3 ${isHovered ? 'hovered' : ''}`}
      style={style.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageSrc} alt="project" className="card-img" />
    </div>
  );
}

export default HoverableCard;
