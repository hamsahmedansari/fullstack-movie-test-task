"use client";
import React from "react";
import { useField } from "formik";

interface InputProps {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  placeholder,
  required = false,
  disabled = false,
  className,
  maxLength
}) => {
  const [field, meta] = useField(name);
  const error = meta.touched && meta.error ? meta.error : "";

  const inputClassNames = error
    ? "border-[#EB5757] border-2 bg-none text-black"
    : "bg-[#224957] text-white";

  const focusClassNames =
    "focus:border-2 focus:border-[#224957] focus:bg-white focus:text-[#224957]";

  return (
    <div className="input-container">
      <input
        {...field}
        id={name}
        name={name}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`${inputClassNames} ${className} w-[300px] h-[45px] rounded-[10px] pl-5 outline-none font-primary ${focusClassNames}`}
      />
      <div className="h-5">
        {error && (
          <p className="text-[#EB5757] text-[12px] leading-[16px] font-primary font-[400] pl-2 pt-1">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
