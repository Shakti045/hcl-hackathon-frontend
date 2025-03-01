
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useEffect } from 'react';
import { useGetOtp} from '@/hooks/userhooks';
import { toast } from 'sonner';


const Otp = ({email,password,setemail,setpassword,setStep}:{
    email:string,
    password:string,
    setemail:(email:string)=>void,
    setpassword:(password:string)=>void,
    setStep:(step:number)=>void
}) => {
   
    const {getotp,isLoading,isSuccess} = useGetOtp();
    const handlesubmit = (e:any)=>{
        e.preventDefault();
         getotp(email);
    }
    useEffect(()=>{
       if(isSuccess){
        toast.success("OTP SENT TO YOU MAIL")
        setStep(2);
       }
    },[isSuccess])
  return (
    <form onSubmit={handlesubmit} className=" flex flex-col gap-2">
    <Input value={email} type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email"/>
    <Input value={password} type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password"/>
    {
        isLoading?<p>Please wait....</p>:<Button>Get Otp</Button>
    }
   </form>
  )
}

export default Otp