import { api } from "../../services/api";
import { SignInProps } from "./SignIn.validationsScheme";

export const Login = async (data: SignInProps) => {
  const response = await api.post("/auth/login", data);
  return response;
};
