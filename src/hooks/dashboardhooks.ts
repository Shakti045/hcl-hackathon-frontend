import { DashboardService } from "@/services/dashboar.service"
import { useMutation } from "@tanstack/react-query"

export const useGetData = ()=>{
   const {data,isLoading,mutate:getdata} = useMutation({
    mutationFn: ({ fromBic, srcBic, type }: { fromBic: string, srcBic: string, type: string }) => DashboardService.getdata({fromBic, srcBic, type})
   })
   return {
    data:data?.data,
    isLoading,
    getdata
   }
}

export const useAccept = ()=>{
        const {isLoading,isSuccess,mutate:accept} = useMutation({
            mutationFn:(id:string)=>DashboardService.accepttrasanction(id)
        })
    return {
        isLoading,
        isSuccess,
        accept
    }
}

export const useGetHistory = ()=>{
    const {data,isLoading,mutate:gethistory} = useMutation({
        mutationFn:()=>DashboardService.gethistory()
    })
    return {
        data:data?.data,
        isLoading,
        gethistory
    }
}