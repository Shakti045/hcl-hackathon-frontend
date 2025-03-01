
import { Button } from '../ui/button'
import { useGetHistory } from '@/hooks/dashboardhooks'

const History = () => {
    const {data,isLoading,gethistory} = useGetHistory();
  return (
    <div  className=' flex flex-col gap-4'>
        <Button onClick={()=>gethistory()}>See History</Button>
       {
        isLoading?<p>Loading.....</p>:<p>{JSON.stringify(data)}</p>
       }
    </div>
  )
}

export default History