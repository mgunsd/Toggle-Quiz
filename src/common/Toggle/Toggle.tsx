import React, { useState } from 'react';
import './Toggle.scss';

interface ToggleProps {
  children: React.ReactNode;
  onToggle: Function;
}

export const Toggle: React.FC<ToggleProps> = ({ children, onToggle }) => {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="toggle"
      onClick={() => {
        setIndex(index === 0 ? 1 : 0);
        onToggle();
      }}
    >
      <div className="text">Option1</div>
      <div className="text">Option2</div>
      <div
        className="slider"
        style={{
          transform: index === 0 ? 'translateX(0%)' : 'translateX(100%)',
        }}
      />
    </div>
  );
};
