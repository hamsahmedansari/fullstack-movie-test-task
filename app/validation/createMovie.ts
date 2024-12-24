import * as Yup from "yup";


export const MovieCreateSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  year: Yup.number()
    .required("Year is required")
    .min(1888, "Year must be later than 1888")
    .max(new Date().getFullYear(), "Year cannot be in the future"),
  image: Yup.mixed().required("Image is required"),
});