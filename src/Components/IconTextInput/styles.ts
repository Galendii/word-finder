import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(300px, 100%);
  border-radius: 5px;
  margin: 10px;

  /* border: 1px solid #a57d43;
  &:focus-within {
    border-color: #d6a2
    39;
  } */
  cursor: text;
`;

export const IconHolder = styled.button`
  width: 20%;
  border-left: 1px solid rgba(0, 0, 0, 0.7);
  background: #aaa;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #007087;
  background: #007087;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  outline: unset;

  &:hover {
    background: #003e92;
    border: 1px solid #003e92;
  }
`;

export const Input = styled.input`
  font-size: 1.4rem;
  width: 80%;
  text-align: center;
  height: 25px;
  display: flex;
  border: unset;
  background: unset;
  color: unset;
  padding: unset;
  outline: none;
  letter-spacing: 5px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  font-weight: bold;
  &&::placeholder {
    font-size: 1.2rem;
    letter-spacing: 10px;
    color: #fff;
  }
  padding: 10px 20px;
  border: 1px solid #007087;
`;
