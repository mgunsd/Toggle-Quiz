import { css } from "styled-components";

export const Card = css`
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  margin:8px;
  border-radius: 8px;
  background: #fbfbfb;
  box-shadow: 0 0 8px 2px hsla(0,0%,67%,.4);
  width: clamp(304px, 65%, 1024px);
  height: clamp(365px, 50%, 80%);
  padding: 24px;
  overflow: hidden;
`;

// Can be reusable as a plaincard as well 

// const CardContainer =styled.div`
// ${Card}
// `;

// export const PlainCard: FC= ({ children }) => 
//   <CardContainer>
//     {children}
//   </CardContainer>;
 