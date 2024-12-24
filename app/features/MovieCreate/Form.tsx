import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Input from "@/app/components/Form/Input";
import Button from "@/app/components/Form/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";
import { MovieCreateSchema } from "@/app/validation/createMovie";
import * as movieService from "@/app/service/movies";
import Image from "next/image";

interface ownProps {
  img?: string;
  title?: string; 
  year?: string;
  id?: string;
}

const MovieCreateForm = ({ id, img,title,year }: ownProps) => {
  const [image, setImage] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (id) {
      setImage(img || "");
    }
  },[id, img])

  const handleDrop = (e: any) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];

    if (droppedFile && droppedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(droppedFile);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
   },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          setImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      const data = {
        title: values.title,
        year: values.year,
        img: image,
        id
      };

      let response: any;
      if (id) {
        response = await movieService.update(data);
      } else {
        response = await movieService.save(data);
      }
      if (response.success) {
        router.push("/movie-list");
        toast.success(response.message);
        setImage("");
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      console.error("Error adding movie:", error);
      toast.error(error.response.data.message);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Formik
      initialValues={{ title, year, image: img }}
      validationSchema={MovieCreateSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ setFieldValue, isSubmitting }) => (
        <Form className="pt-[80px] flex gap-28 mb-createmovie">
          <div className="flex flex-col gap-16">
            <div
              className="mb-createmovie-image w-[473px] h-[504px] rounded-[10px] border-2 border-white border-dotted"
              {...getRootProps()}
              onDrop={(e) => {
                handleDrop(e);
                setFieldValue("image", e.dataTransfer.files[0]);
              }}
              onDragOver={handleDragOver}
            >
              <input
                {...getInputProps()}
                onChange={(e: any) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event: any) => {
                      const fileBase64 = event.target.result;
                      setImage(fileBase64);
                      setFieldValue("image", fileBase64);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              {image ? (
                <img
                  src={image}
                  alt="Dropped"
                  className="w-full h-full rounded-[10px]"
                  width={473}
                  height={504}
                />
              ) : (
                <div className="flex flex-col justify-center items-center h-full cursor-pointer">
                  <img src="/assets/svg/arrow.svg" alt="Arrow" />
                  <p className="font-primary text-white font-[400px] text-[14px] leading-[24px] text-center">
                    Drop an image here or click to upload
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-between mb-createmovie-button_1">
              <button
                type="button"
                className="w-[167px] h-[56px] text-white rounded-[10px] border border-white font-primary font-[700] text-[16px] leading-[24px] text-center"
              >
                Cancel
              </button>
              <Button className="w-[167px]" buttonText="Submit" isSubmitting={isSubmitting} />
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-5">
              <Input
                type="text"
                name="title"
                placeholder="Title"
                className="mb-createmovie-input text-white focus:border-2 focus:border-[#224957] focus:bg-white focus:text-[#224957] w-[362px] h-[45px] rounded-[10px] text-[14px] bg-[#224957] leading-[24px] pl-5 outline-none font-primary"
              />
              <Input
                type="number"
                name="year"
                maxLength={4}
                placeholder="Publishing year"
                className="mb-createmovie-input text-white focus:border-2 focus:border-[#224957] focus:bg-white focus:text-[#224957] w-[216px] h-[45px] rounded-[10px] text-[14px] bg-[#224957] leading-[24px] pl-5 outline-none font-primary"
              />
            </div>
            <div className="flex gap-5 justify-center mb-createmovie-button">
              <Button
              type="button"
                buttonText="Cancel"
                color=" "
                onClick={handleGoBack}
                className="w-[167px] h-[56px] text-white rounded-[10px] border border-white font-primary font-[700] text-[16px] leading-[24px] text-center"
              />
              <Button
                buttonText="Submit"
                className="w-[167px]"
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MovieCreateForm;
