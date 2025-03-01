import { apiRequest } from "@/lib/axios";

class AuthService{
    public static async getotp(email:string){
        return apiRequest("POST","getotp",{
            email
        });
    }
    public static async login(email:string,password:string){
        return apiRequest("POST","login",{
            email,
            password
        })
    }
    public static async signup(email:string,password:string,otp:string){
        return apiRequest("POST","signup",{
             email,
             password,
             otp
        })
    }
}

export default AuthService;