// import { useState } from 'react'

import DashBoard from "./pages/DashBoard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
