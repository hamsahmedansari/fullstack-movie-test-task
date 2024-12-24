"use client"
import axios from "axios";

export interface Movie {
  title: string;
  year: number;
  img: string;
  id?: string;
}

const apiClient = axios.create({
  baseURL: "/api",
});

const handleResponse = (response: any) => response.data;

const handleError = (error: any) => {
  throw error;
};

export const getAll = async () => {
  try {
    const response = await apiClient.get("/movies");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getById = async (id: string) => {
  try {
    const response = await apiClient.get("/movie/" + id);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const save = async (values: Movie) => {
  const data = {
    title: values.title,
    year: values.year,
    img: values.img,
  };

  try {
    const response = await apiClient.post("/movie/new", data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const update = async (values: Movie) => {
  const data = {
    title: values.title,
    year: values.year,
    img: values.img,
  };

  try {
    const response = await apiClient.put(`/movie/${values.id}`, data);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};
