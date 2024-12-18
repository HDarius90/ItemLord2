import { FC, ButtonHTMLAttributes } from 'react';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';
import { BUTTON_TYPE_CLASSES } from '../../enum';

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

export type ButtonProps = {
  children?: React.ReactNode;
  buttonType?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  ...otherProps
}) => {
  const CustomeButton = getButton(buttonType);
  return (
    <CustomeButton disabled={isLoading} {...otherProps}>
      {isLoading ? 'LOADING' : children}
    </CustomeButton>
  );
};

export default Button;
