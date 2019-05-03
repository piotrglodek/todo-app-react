import styled from 'styled-components';
export const Container = styled.div`
  margin: 0 12px;
  margin-top: 30px;
 `,
 Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 12px;
  grid-auto-rows: 46px;
  font-size: 16px;
  @media screen and (min-width: 576px) {
   grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 997px) {
   grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1280px) {
   grid-template-columns: repeat(4, 1fr);
  }
 `;
