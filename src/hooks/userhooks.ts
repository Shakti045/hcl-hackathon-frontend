import AuthService from "@/services/auth.service"
import { useMutation } from "@tanstack/react-query"

export const useGetOtp = ()=>{
    const {isSuccess,isLoading,mutate:getotp} = useMutation({
        mutationFn:(email:string
        )=>AuthService.getotp(email),
    })

    return {
        isSuccess,
        isLoading,
        getotp
    }
}

export const useLogin = ()=>{
    const {isSuccess,isLoading,mutate:login,data} = useMutation({
        mutationFn: ({ email, password }: { email: string, password: string }) => AuthService.login(email, password),
    })

    return {
        data:data?.data,
        isSuccess,
        isLoading,
        login
    }
}

export const useSignup = ()=>{
    const {isSuccess,mutate:signup,isLoading} = useMutation({
        mutationFn: ({ email, password, otp }: { email: string, password: string, otp: string }) => AuthService.signup(email, password, otp)
    })

    return {
       isLoading,
       isSuccess,
       signup
    }
}