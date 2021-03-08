import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 12px 24px;

  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  font-family: var(--title-font);

  background: #007087;
  border: unset;
  outline: unset;
  border-radius: 3px;

  margin: 10px;

  transition: all ease-in-out 0.2s;

  &:hover {
    background: #003e92;
    -webkit-box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.4);
    box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.2);
  }
`;
