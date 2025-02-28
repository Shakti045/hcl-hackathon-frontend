import HomeService from "@/services/home.service"
import { useQuery } from "@tanstack/react-query"

export const useGetData =  () =>{
     const {data,isFetching} = useQuery({
        queryFn:()=>HomeService.getdata(),
        queryKey:["test"],
     });

     return {
        data:data?.data || {},
        isFetching
     }
}