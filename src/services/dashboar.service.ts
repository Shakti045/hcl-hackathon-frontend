import { apiRequest } from "@/lib/axios";

export class DashboardService{
    public static async getdata ({
        fromBic,
        srcBic,
        type
    }:{
        fromBic:string,
        srcBic:string,
        type:String
    }){
        const url = (type==="least-time"?`least-time?fromBic=${fromBic}&srcBic=${srcBic}`:`leastcharge?fromBic=${fromBic}&srcBic=${srcBic}`);
        return apiRequest("GET",url,{
            fromBic,
            srcBic
        });
    }

    public static async accepttrasanction (id:string){
        return apiRequest("GET",`confirmtrasaction/${id}`);
    }
    public static async gethistory(){
        return apiRequest("GET","user/trasactions")
    }
}