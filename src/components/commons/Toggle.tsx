import React, { useState, FC } from 'react';
import styled from 'styled-components';
import { Body } from './Text';

const ToggleContainer = styled.div`
  display:grid; 
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  justify-content: stretch;
  min-height: inherit;
  width:  clamp(280px, 78%, 700px);
  min-height: 45px;
  border-radius: 2vw;
  border: 1px solid #fbfbfb;
  background: transparent;
  text-align: center;
  position: relative;
  outline: none;
  padding: 0;
  cursor: default;
  &:hover{
    box-shadow: -2px -2px 5px 	hsla(0, 0%, 100%, 0.24), 2px 2px 5px hsla(0, 0%, 0%, 0.24);
  }
`;

const ToggleTab = styled.button`
  display:flex;
  flex: 1 1;
  padding: 12px 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-decoration: none;
  border-radius: 2vw;
  border-color: transparent;
  background-color: transparent;
  
  &:active{
    box-shadow: inset 1px 1px 2px hsla(0, 0%, 0%, 0.24), inset -1px -1px 2px 	hsla(0, 0%, 100%, 0.24);
  }
`;

const ToggleSlider = styled.div`
  transition: all .3s ease;
  background-color: hsla(0,0%,98.4%,.5);
  box-shadow: 0 0 6px 1px rgba(245,69,76,.5);
  border-radius: 2vw;
  width: 50%;
  padding: 0;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
`;

interface IToggleProps {
  index0:string;
  index1:string;
  correctAnswer:number;
  onClick:Function;
  setAnswer:any;
}

export const Toggle: FC<IToggleProps> = (props) => {
  const [index, setIndex] = useState(0);
 
  return(
  <ToggleContainer>
    <ToggleTab
       onClick={() => {
        setIndex(0);
        props.onClick(index!==props.correctAnswer);      
      }}
    >
     <Body
      style={{ color: index===0 ? 'hsla(0, 30%, 0%, 0.5)' : 'white' }}
      >
       {props.index0}
     </Body>
    </ToggleTab>
    <ToggleTab
       onClick={() => {
        setIndex(1);
        props.onClick(index!==props.correctAnswer);
      }}
    >
       <Body
        style={{ color: index===1 ? 'hsla(0, 30%, 0%, 0.5)' : 'white' }}
        >
       {props.index1}
     </Body>
    </ToggleTab>
    <ToggleSlider style={{ transform: index===1 ? 'translateX(100%)' : 'translateX(0%)' }}/>
  </ToggleContainer>
  );
}