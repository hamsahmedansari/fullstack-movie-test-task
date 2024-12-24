import axios from "axios";
import { toast } from "react-toastify";

interface LoginValuesParams {
  email: string;
  password: string;
}
interface LoginValues {
  email: string;
  password: string;
  id: string
}

export const login = async (values: LoginValuesParams): Promise<LoginValues> => {
  try {
    const response = await axios.post("/api/login", {
      email: values.email,
      password: values.password,
    });

    if (response.status === 200) {
      toast.success(`${response.data.message} 🎉`);
    } else {
      throw new Error("Login failed");
    }
    return response.data;
  } catch (error: any) {
    toast.error(error.response.data.message);
    console.error(error);
    throw error;
  }
};
