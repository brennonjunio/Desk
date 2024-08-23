import { api } from "../../services/api";
import { SignUpFormData } from "./SignUpvalidationsScheme";

export const CreateUser = async (data: SignUpFormData) => {
  const response = await api.post("/user/create", data);
  return response;
};
