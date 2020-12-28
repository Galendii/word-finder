import React, { ComponentType, InputHTMLAttributes, ReactElement } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, IconHolder, Input } from './styles';

interface IconTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  iconColor?: string;
  textColor?: string;
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultProps: Partial<IconTextInputProps> = {
  iconColor: '#fff',
  textColor: '#fff',
};

const IconTextInput = ({
  icon: Icon,
  iconColor,
  textColor,
  clickHandler,
  ...rest
}: IconTextInputProps): ReactElement => {
  return (
    <Container>
      <Input style={{ color: textColor }} {...rest} />
      <IconHolder onClick={clickHandler}>
        <Icon size={25} color={iconColor} />
      </IconHolder>
    </Container>
  );
};

IconTextInput.defaultProps = defaultProps;

export default IconTextInput;
