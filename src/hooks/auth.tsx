/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";


// Definição das interfaces para os dados de autenticação e o contexto
interface AuthContextData {
  user: User | null;
  signIn: ({ email, password }: SignInProps) => Promise<void>;
  signOut: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface SignInProps {
  email: string;
  password: string;
}


interface AuthProviderProps {
  children: ReactNode;
}

// Criação do contexto de autenticação
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user: User | null; token: string | null }>({
    user: null,
    token: null
  });

  async function signIn({ email, password }: SignInProps): Promise<void> {
    try {
      const response = await api.post("usuario/listar", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@Desk:user", JSON.stringify(user));
      localStorage.setItem("@Desk:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });

    } catch (error) {
      if (error) {
        alert(error);
      } else {
        alert("Não foi possível acessar.");
      }
    }
  }

  function signOut(): void {
    localStorage.removeItem("@Desk:user");
    localStorage.removeItem("@Desk:token");

    api.defaults.headers.Authorization = "";
    setData({ user: null, token: null });
  }

  useEffect(() => {
    const token = localStorage.getItem("@Desk:token");
    const user = localStorage.getItem("@Desk:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
