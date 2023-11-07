import React, { ReactNode, useState } from 'react';
import './Button.scss';

interface DefaulButtonProps {
  onclick: Function;
  datatestid: string;
  icon: ReactNode;
}

export type ButtonProps = DefaulButtonProps;

export const Button: React.FC<ButtonProps> = ({
  onclick,
  datatestid,
  icon
}) => {
  return (
    <button
      onClick={() => {
        onclick();
      }}
      data-testid={datatestid}
    >
      {icon}
    </button>
  );
};

export default Button;
