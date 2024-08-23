import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { api } from "../services/api";
import { SignInProps, User } from "../pages/SignIn/SignIn.validationsScheme";
import { Login } from "../pages/SignIn/SignIn.Service";
import { toast } from "react-toastify";

type AuthContextData = {
  user: User | null;
  signIn: (FormUser: SignInProps) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<{ user: User | null; token: string | null }>(
    {
      user: null,
      token: null,
    }
  );

  async function signIn(FormUser: SignInProps): Promise<void> {
    try {
      const response = await Login(FormUser) as any
      console.log("🚀 ~ signIn ~ response:", response)
      const { user, token } = response.result;

      localStorage.setItem("@Desk:user", JSON.stringify(user));
      localStorage.setItem("@Desk:token", token);


      api.defaults.headers.common["Authorization"] = `${token}`;
      toast.success(response.message)
      setData({ user, token });
    } catch (error: any) {
      toast.error(error.message);
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
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
