import React from "react";
import './button.css'

declare const ButtonSizes: ['small', 'medium', 'large'];
type ButtonSize = typeof ButtonSizes[number];

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button = ({
  onClick, 
  text, 
  className, 
  size, 
  disabled
}: ButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className={className || `color-white bg-color-primary border-none border-radius-5 size-${size ?? 'medium'}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}