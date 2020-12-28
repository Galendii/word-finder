import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const PrimaryButton = ({ title, ...rest }: ButtonProps): ReactElement => {
  return <Button {...rest}>{title}</Button>;
};
export default PrimaryButton;
