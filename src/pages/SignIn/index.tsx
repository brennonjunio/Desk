import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonLink, Container, Form } from "./styles";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"; // Certifique-se de importar corretamente
import { useAuth } from "../../hooks/auth";

// Definição do esquema de validação com yup
const SigninSchema = yup.object({
  username: yup.string().min(6, 'Mínimo 6 caracteres').required("Usuário é obrigatório").matches(/^\S*$/, "O nome de usuário não pode conter espaços"),
  password: yup.string().required("Senha é obrigatória")
});

type SignInFormData = {
  username: string;
  password: string;
}

export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(SigninSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const { signIn } = useAuth();

  async function handleSignIn(data: SignInFormData) {
    try {
      await signIn({
        email: data.username,
        password: data.password
      })
    } catch (error) {
      console.error('Sign In Failed', error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Login</h1>

        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              placeholder='Usuário'
              error={errors.username?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type='password'
              placeholder='Senha'
              error={errors.password?.message}
            />
          )}
        />

        <Button title="Entrar" type="submit" />
        <ButtonLink to='/register'>Criar conta</ButtonLink>
      </Form>
    </Container>
  );
}
