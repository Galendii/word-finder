import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100vw;
  min-height: 100vh;
  background: rgb(0, 112, 135);
  background: linear-gradient(
    180deg,
    rgba(0, 112, 135, 1) 0%,
    rgba(0, 112, 135, 1) 25%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 100%);
  min-height: 90vh;
  z-index: 1;
`;

export const Title = styled.h1`
  color: #dfdfdf;
`;

export const Description = styled.h4`
  color: #dfdfdf;
`;

export const Footer = styled.img`
  position: absolute;

  bottom: 0;
  z-index: 0;
  width: 100%;
  height: auto;
`;