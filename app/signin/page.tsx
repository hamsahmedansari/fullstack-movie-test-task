"use client";
import React from "react";
import SignInForm from "../features/SignIn/Form";

const SignIn = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <h1 className="text-[64px] text-white leading-[80px] text-center font-[600] font-primary">
        Sign in
      </h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
