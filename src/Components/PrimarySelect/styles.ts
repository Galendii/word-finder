import styled from 'styled-components';

export const Select = styled.select`
  padding: 12px 24px;
  background: transparent;
  width: min(300px, 100%);
  margin: 10px 0;

  text-align: center;
  font-weight: bold;
  color: #eee;
  font-family: var(--title-font);

  -webkit-box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 4px 15px 5px rgba(0, 0, 0, 0.2);
  outline: none;

  border: 1px solid #007087;
  border-radius: 5px;

  option {
    text-align: center;
    color: #333;
  }
  option:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`;
