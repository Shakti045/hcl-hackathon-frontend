import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { useLogin } from '@/hooks/userhooks';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

const Login = () => {
   const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {login,isLoading,isSuccess,data} = useLogin();
    const navigate = useNavigate();
  const handlesubmit = (e:any)=>{
    e.preventDefault();
    login({email,password});
  }
  useEffect(()=>{
      if(isSuccess){
        toast.success("Login Successfull");
        localStorage.setItem("hclauthtoken",data.token);
        navigate("/dashboard");
      }
  },[isSuccess])
  return (
    <div>
       <form onSubmit={handlesubmit} className=" flex flex-col gap-2">
      <Input value={email} type="text" onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email"/>
      <Input value={password} type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Enter your password"/>
    {
        isLoading?<p>Please wait....</p>:<Button>Get Otp</Button>
    }
   </form>
    </div>
  )
}

export default Login