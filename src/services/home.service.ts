import { apiRequest } from "@/lib/axios";

class HomeService{
    public static async getdata(){
        return apiRequest("GET","todos/1");
    }
}

export default HomeService;