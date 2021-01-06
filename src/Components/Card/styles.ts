import { BsArrowLeftShort, BsArrowRightShort, BsX } from 'react-icons/bs';
import styled, { css } from 'styled-components';

export const Holder = styled.div`
  position: absolute;
  width: min(600px, 100%);
`;

export const Container = styled.div`
  position: relative;
  min-height: 80vh;

  padding: 20px;

  background: #e2e6fb;

  border-radius: 5px;
`;
export const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
`;
export const Title = styled.h2``;
export const Text = styled.span``;
export const ButtonRow = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
`;

const iconCss = css`
  fill: #333;
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;

export const Previous = styled(BsArrowLeftShort)`
  ${iconCss}
`;
export const Next = styled(BsArrowRightShort)`
  ${iconCss}
`;

export const Close = styled(BsX)`
  ${iconCss};
  position: absolute;
  top: 10px;
  right: 20px;
`;
