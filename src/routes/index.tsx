import { BrowserRouter, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
}
