import Detail from '@/components/dashboard/Detail'
import History from '@/components/dashboard/History'


const DashBoard = () => {
  return (
    <div className=' w-[100vw] h-[100vh] flex p-10 justify-between'>
       <Detail/>
       <History/>
    </div>
  )
}

export default DashBoard