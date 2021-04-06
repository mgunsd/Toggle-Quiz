import React from 'react';
import './Card.scss';

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};
