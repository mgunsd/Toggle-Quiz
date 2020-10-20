import styled, { css } from 'styled-components';
import { Color, Font } from 'styles';

//Master text styles
export const Typography = css`
  color: ${Color('text')};
  text-decoration: none;
`;

//Titles
export const H4 = styled.h4`
  font: normal 800 17px / 1.5em ${Font('body')};
  letter-spacing: .25px;
  ${Typography}
`;

//General
export const Regular = css`
  font: normal 700 14px / 18px ${Font('body')};
  letter-spacing: .38px;
  ${Typography}
`;

export const Body = styled.p`
  ${Regular}
`;

export const A = styled.a`
  ${Regular}
`;