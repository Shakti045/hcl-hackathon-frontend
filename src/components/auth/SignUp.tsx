import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import  { useEffect, useState } from 'react'
import { Button } from "../ui/button";
import { useSignup } from "@/hooks/userhooks";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const SignUp = ({
    email,
    password
}:{
    email:string,
    password:string
}) => {
    const [otp,setoptp] = useState("");
    const {signup,isSuccess,isLoading} = useSignup();
    const navigate = useNavigate();
    const handleclick = ()=>{
         signup({email,password,otp});
    }
    useEffect(()=>{
       if(isSuccess){
           toast.success("Signup Successfull");
           navigate("/login");
       }
    },[isSuccess])
  return (
    <div>
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setoptp(otp)}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
     {
        isLoading?<p>Please wait....</p>:<Button onClick={handleclick}>Submit</Button>
     }
    </div>
  )
}

export default SignUp;
