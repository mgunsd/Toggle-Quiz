import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
  status: 'correct' | 'almost' | 'false' | 'idle';
}

export const Card: React.FC<CardProps> = ({ children, status }) => {
  return <div className={`card-${status}`}>{children}</div>;
};
