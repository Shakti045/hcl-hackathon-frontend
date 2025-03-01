// import { store } from "@/providers/redux/store";
import axios, { Method } from "axios";


const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true,
});

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

export const apiRequest = async <T = any>(
  method: Method,
  url: string,
  data?: any
): Promise<ApiResponse<T>> => {
  try {
    console.log("request")
    const isFormData = data instanceof FormData;

    
    const token = localStorage.getItem("hclauthtoken");

    const response = await axiosInstance.request<T>({
      method,
      url,
      data,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
      },
    });

    return {
      data: response.data,
      status: response.status,
      message: "Success",
    };
  } catch (error: any) {
      throw new Error(error);
  }
};
