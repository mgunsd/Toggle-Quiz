import React, { useState } from 'react';
import './Toggle.scss';

interface ToggleProps {
  onToggle: Function;
  locked: Boolean;
  choices: [string[], number];
}

export const Toggle: React.FC<ToggleProps> = ({
  choices,
  onToggle,
  locked,
}) => {
  const [index, setIndex] = useState(Math.round(Math.random()));

  return (
    <div
      className="toggle"
      onClick={
        !locked
          ? () => {
              setIndex(index === 0 ? 1 : 0);
              onToggle(index !== choices[1]);
            }
          : () => {}
      }
    >
      <div className="text">{choices[0][0]}</div>
      <div className="text">{choices[0][1]}</div>
      <div
        className="slider"
        style={{
          transform: index === 0 ? 'translateX(0%)' : 'translateX(100%)',
        }}
      />
    </div>
  );
};
