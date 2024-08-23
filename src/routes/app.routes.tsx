import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Calls } from "../pages/Chamados/Chamados";
import { ProtectedRoute } from ".";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/calls" element={<ProtectedRoute><Calls /></ProtectedRoute>} />
      <Route path="*" element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
    </Routes>
  )
}