import styled from '@emotion/styled';

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 140px auto 0;
  max-width: 100%;
  height: 60vh;
`;

export const SliderContent = styled.div`
  max-width: 100%;
`;

export const SLIDER_DIV = styled.div`
  display: flex;
  margin: 0 50px;
  width: 640px;
  height: 292px;
  background-color: white;
`;
export const SLIDER_IMG = styled.img``;
export const SLIDER_TEXT_P = styled.p``;

export const STARS_DIV = styled.div`
  text-align: center;
`;
export const STAR_DIV = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    to bottom,
    rgba(197, 196, 196, 1) 0%,
    rgba(180, 179, 178, 1) 100%
  );
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    right: 1px;
    background: linear-gradient(
      to bottom,
      rgba(221, 220, 219, 1) 0%,
      rgba(209, 208, 206, 1) 100%
    );
    z-index: 1;
  }
`;
