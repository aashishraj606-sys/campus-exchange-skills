import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Skills from "./pages/Skills"
import Profile from "./pages/Profile"
import Requests from "./pages/Requests"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/profile/:id" element={<Profile />} />

        <Route path="/requests" element={<Requests />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App