import Otp from "@/components/auth/Otp";
import SignUp from "@/components/auth/SignUp";
import { useState } from "react";

const Home = () => {
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [step,setStep] = useState(1);
  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center">
       {
        step===1 && <Otp email={email} password={password} setemail={setemail} setpassword={setpassword} setStep={setStep}/>
       }
       {
        step ===2 && <SignUp email={email} password={password}/>
       }
    </div>
  )
}

export default Home