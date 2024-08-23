import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ButtonLink, Container, Form } from "../Styles/SignStyles";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Certifique-se de importar corretamente
import { useAuth } from "../../../hooks/auth";
import { SignInFormData, SigninSchema } from "../SignIn.validationsScheme";
import { ToastContainer } from "react-toastify";

// Definição do esquema de validação com yup


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
              type="text"
              placeholder="Usuário"
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
              type="password"
              placeholder="Senha"
              error={errors.password?.message}
            />
          )}
        />

        <Button title="Entrar" type="submit" />
        <ButtonLink to="/register">Criar conta</ButtonLink>
      </Form>
      <ToastContainer />
    </Container>
  );
}
