import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { bankdetails } from "@/datas/bank"
import { Button } from "../ui/button"
import { useEffect, useState } from "react";
import { useAccept, useGetData } from "@/hooks/dashboardhooks";
import { toast } from "sonner";
  

const Detail = () => {
    const [from,setfrom] = useState("");
    const [to,setto] = useState("");
    const [type,settype] = useState("");
    const {data,isLoading,getdata} = useGetData();
    const {isLoading:acceptloading,isSuccess:accepted,accept} = useAccept();
    const handleClcik = ()=>{
          getdata({fromBic:from,srcBic:to,type});
    }
    const accepttrasanction = ()=>{
         accept(data?.tid);
    }
    useEffect(()=>{
       if(accepted){
          toast.success("Transaction Accepted");
       }
    },[accepted])
  return (
    <div>
         <div className=" flex flex-col gap-4">
         <Select onValueChange={(e) => setfrom(e)} value={from}>
         <SelectTrigger className="w-[180px]">
         <SelectValue placeholder="Select From Bank Account" />
      </SelectTrigger>
      <SelectContent>
         {
            bankdetails.map((item) => (
               <SelectItem key={item.BIC+"1"} value={item.BIC}>
                  {item.BIC}
               </SelectItem>
            ))
         }
         </SelectContent>
         </Select>
         <Select onValueChange={(e) => setto(e)} value={to}>
         <SelectTrigger className="w-[180px]">
         <SelectValue placeholder="Select To Bank Account" />
        </SelectTrigger>
        <SelectContent>
         {
            bankdetails.map((item) => (
               <SelectItem key={item.BIC+"2"} value={item.BIC}>
                  {item.BIC}
               </SelectItem>
            ))
         }
         </SelectContent>
         </Select>
         <Select onValueChange={(e) => settype(e)} value={type}>
         <SelectTrigger className="w-[180px]">
         <SelectValue placeholder="Select request" />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value="least-time">Least Time</SelectItem>
         <SelectItem value="leastcharge">Least Charge</SelectItem>
         </SelectContent>
         </Select>
         </div>
         {
            isLoading?<p>Loading...</p>:<Button className=" mt-6" onClick={handleClcik}>Get Data</Button>
         }
         {
           ( !isLoading && data) && (
            <div className=" flex flex-col gap-2 p-2  bg-red-700 mt-5">
               <p>From : {data.fromBic}</p>
               <p>To : {data.srcBic}</p>
               {
                data?.charge && <p>Least Charge : {data?.charge}</p>
               }
               {
                 data?.time && <p>Least Time : {data?.time}</p>
               }
               {
                acceptloading?<p>Loading...</p>:<Button className=" mt-6" onClick={accepttrasanction}>Accept</Button>
               }
            </div>
           )
         }
    </div>
  )
}

export default Detail