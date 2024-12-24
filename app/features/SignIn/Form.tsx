"use client";

import React from "react";
import { Formik, Form, Field } from "formik";
import Input from "@/app/components/Form/Input";
import Button from "@/app/components/Form/Button";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import * as userService from "@/app/service/user";
import { SignInSchema } from "@/app/validation/signIn";

const SignInForm = () => {
  const { signIn } = useAuth();
  const router = useRouter();
  const handleSubmit = async (
    values: { email: string; password: string; rememberMe: boolean },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await userService.login(values);
      await signIn({
        email: values.email,
        id: response.id,
        rememberMe: values.rememberMe,
      });
      router.push("/movie-list");
    } catch (error: any) {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false }}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
      validateOnBlur={true}
    >
      {({ isSubmitting, errors, handleSubmit }) => (
        <Form className="flex flex-col gap-1">
          <Input type="email" name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Password" />
          <div className="flex gap-1  mb-5 items-center">
            <Field name="rememberMe">
              {({ field, form }: { field: any; form: any }) => (
                <input
                  type="checkbox"
                  id="check"
                  className="w-[18px] h-[17px] bg-[#224957] appearance-none checked:bg-green-400 rounded-[5px]"
                  checked={field.value}
                  onChange={() =>
                    form.setFieldValue("rememberMe", !field.value)
                  }
                />
              )}
            </Field>
            <label
              htmlFor="check"
              className="font-primary text-white font-[400] text-[14px] leading-[24px] text-center"
            >
              Remember me
            </label>
          </div>
          <Button
            buttonText="Sign in"
            isSubmitting={isSubmitting}
            type="submit"
            disabled={isSubmitting || !!Object.keys(errors).length}
            onClick={handleSubmit as any}
            className="w-[300px]"
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
