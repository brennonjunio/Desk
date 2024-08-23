import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn/pages/SignIn";
import { SignUp } from "../pages/SignUp/pages/SignUp";
import { NotFound } from "../pages/NotFound";

export function AuthRoutes() {
  const user = localStorage.getItem("@Desk:user");
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />

      {user && <Route path="*" element={<Navigate to='/' />} />}
    </Routes>
  )
}