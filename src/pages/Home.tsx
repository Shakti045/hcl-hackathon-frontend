import { Button } from "@/components/ui/button"
import { useGetData } from "@/hooks/useGetData"
import { toast } from "sonner"

const Home = () => {
    const {data,isFetching} = useGetData();
    if(isFetching) return <p>Laoding...</p>;
    console.log(data);
  return (
    <div>
        <p className=" text-blue-600 text-lg">HCL - HACKATHON</p>
        <Button onClick={()=>toast.success("Please wait for start")}>Let's Rock It</Button>
    </div>
  )
}

export default Home