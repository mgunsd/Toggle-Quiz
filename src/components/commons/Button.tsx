import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { Font } from 'styles';

export const ButtonText = styled.p`
  font: normal bold 17px / 1.5em ${Font('body')};
  color: hsla(0, 0%, 0%, 0.48);
  margin: 0 10px;
  `;

export const ButtonStyles = css`
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 10px;
  border-color: transparent;
  background-color: transparent;
  box-shadow: -5px -5px 20px 	hsla(0, 0%, 100%, 0.24),  5px 5px 20px hsla(0, 0%, 0%, 0.24);

  &:hover{
    box-shadow: -2px -2px 5px 	hsla(0, 0%, 100%, 0.24), 2px 2px 5px hsla(0, 0%, 0%, 0.24);
  }
  &:active{
    box-shadow: inset 1px 1px 2px hsla(0, 0%, 0%, 0.24), inset -1px -1px 2px 	hsla(0, 0%, 100%, 0.24);
  }
`;

export const ButtonContainer: FC = styled.button`
  ${ButtonStyles};
  ${ButtonText};
`;

export const Button:FC = ({ children, ...props }) =>
    <ButtonContainer {...props}>
      {children && <ButtonText>{children}</ButtonText>}
    </ButtonContainer>