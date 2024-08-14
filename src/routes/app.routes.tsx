import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Calls } from "../pages/Chamados";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<Calls />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}