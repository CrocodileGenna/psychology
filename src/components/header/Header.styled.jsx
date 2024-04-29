import styled from '@emotion/styled';

export const HEADER_SECTION = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding: 5px 20px;
  max-width: 1300px;
  height: 80px;
`;

export const IMG = styled.img`
  width: 60px;
`;

export const MENU_NAV = styled.nav`
  display: flex;
  width: 740px;
  justify-content: space-around;
  align-items: center;
  padding: 0 0 0 70px;
`;

export const A_DIV = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  width: 100%;
  height: 55px;
`;
export const A = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  color: #cbcac5;
  font-size: 18px;
  font-weight: 400;

  &:hover {
    color: #40c3ba;
    box-shadow: inset 0 -1px 0 black;
  }
`;
export const PHONE_DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  p {
    font-family: cursive;
    font-size: 18px;
    font-weight: 400;
  }
`;
