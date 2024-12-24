import React from "react";
import Spinner from "../Spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  buttonText: string;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({
  isSubmitting,
  buttonText,
  disabled,
  onClick,
  className,
  color= "bg-[#2BD17E]",
  ...rest
}) => {
  const buttonClasses = `${className} text-center text-white font-primary font-[700] text-[16px] leading-[24px] flex items-center justify-center`;
  const containerClasses = `${className} cursor-pointer h-[54px] ${
    isSubmitting || disabled ? "bg-gray-400" : color
  } rounded-[10px] flex items-center justify-center`;

  return (
    <div className={containerClasses} onClick={onClick as any}>
      <button
        {...rest}
        disabled={isSubmitting || disabled}
        className={buttonClasses}
      >
        {isSubmitting ? <Spinner /> : buttonText}
      </button>
    </div>
  );
};

export default Button;
