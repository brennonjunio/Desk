import * as yup from "yup";

export const SignUpSchema = yup.object({
  name: yup
    .string()
    .required("O nome de usuário é obrigatório")
    .min(6, "Deve conter no minimo 6 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(6, "Deve conter no minimo 6 digitos"),
  idGroup: yup.number(),
  user: yup
    .string()
    .min(6, "Deve conter no minimo 6 digitos")
    .matches(/^\S*$/, "O nome de usuário não pode conter espaços"),
});

export type SignUpFormData = {
  idGroup?: number;
  user?: string;
  name: string;
  email: string;
  password: string;
};
