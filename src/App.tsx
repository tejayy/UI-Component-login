import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "@/pages/login-page"
import { SignupPage } from "@/pages/signup-page"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
