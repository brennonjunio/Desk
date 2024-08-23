import * as yup from "yup";

export type User = {
  user: string;
  name: string;
  email: string;
  password: string;
  idGroup: 1;
};

export type SignInProps = {
  email: string;
  password: string;
};

export const SigninSchema = yup.object({
  username: yup
    .string()
    .min(6, "Mínimo 6 caracteres")
    .required("Usuário é obrigatório")
    .matches(/^\S*$/, "O nome de usuário não pode conter espaços"),
  password: yup.string().required("Senha é obrigatória"),
});

export type SignInFormData = {
  username: string;
  password: string;
};
