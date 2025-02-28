import { QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false, 
      staleTime: 1000 * 60 * 5,
      onError: (error: any) => {
        const errorMessage =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
          "Something went wrong";
        toast.error(errorMessage);
      },
    },
    mutations: {
      onError: (error: any) => {
        const errorMessage =
          error?.response?.data?.message ||
          error?.response?.data?.error ||
          error?.message ||
          "Something went wrong";
        toast.error(errorMessage); 
      },
    },
  },
});
