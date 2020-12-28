import React, { InputHTMLAttributes, ReactElement } from 'react';

import { Container, Input } from './styles';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}

const defaultProps: Partial<TextInputProps> = {
  color: '#333',
};

const TextInput = ({ color, ...rest }: TextInputProps): ReactElement => {
  return (
    <Container>
      <Input style={{ color }} {...rest} />
    </Container>
  );
};

TextInput.defaultProps = defaultProps;

export default TextInput;
