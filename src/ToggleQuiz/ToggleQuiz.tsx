import React from 'react';
import { Card, Toggle } from '../common';
import './ToggleQuiz.scss';

interface ToggleQuizProps {}

export const ToggleQuiz: React.FC<ToggleQuizProps> = () => {
  return (
    <Card>
      <div className="statement">Stetement</div>
      <Toggle onToggle={() => {}}>"toggle</Toggle>
      <div className="text">Subtext</div>
    </Card>
  );
};
