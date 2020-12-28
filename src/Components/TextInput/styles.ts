import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  -webkit-box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.2);
  width: min(240px, 100%);
  border: 1px solid #a57d43;
  margin: 10px;

  &:focus-within {
    border-color: #d6a239;
  }
  cursor: text;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  display: flex;
  border: unset;
  background: unset;
  color: unset;
  padding: unset;
  outline: none;
  letter-spacing: 5px;
  font-weight: bold;
  text-align: center;
  &&::placeholder {
    font-size: 1.2rem;
    letter-spacing: 10px;
    color: #fff;
  }
`;
