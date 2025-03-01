import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<DashBoard/>} />
    </Routes>
  )
}

export default App