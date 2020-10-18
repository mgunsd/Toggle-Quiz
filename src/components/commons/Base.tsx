import React, { FC } from "react";
import styled from "styled-components";
import { Color } from 'utils';

const BaseContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color: ${Color('base')};
  height: 100vh;
`;

export const Base: FC= ({ children }) =>
    <BaseContainer>
      {children}
    </BaseContainer>
