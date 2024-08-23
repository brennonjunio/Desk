import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ButtonLink, Container, Form } from "../styles/SignUp.styles";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreateUser } from "../SingUp.Service";
import { SignUpFormData, SignUpSchema } from "../SignUpvalidationsScheme";

export function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      idGroup: 1,
      user: "",
    },
  });

  const navigate = useNavigate();

  async function handleSignUp(data: SignUpFormData) {
    try {
      const response = (await CreateUser(data)) as any;
      toast.success(response.message);
      if (response.status)
        setTimeout(() => {
          navigate("/");
        }, 3000);
    } catch (error: any) {
      toast.error(error.message);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Cadastro</h1>

        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Nome"
              {...field}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="user"
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Nome de usuário"
              {...field}
              error={errors.user?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              type="text"
              placeholder="E-mail"
              {...field}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="password"
              placeholder="Senha"
              {...field}
              error={errors.password?.message}
            />
          )}
        />

        <Button title="Entrar" type="submit" />
        <ButtonLink to="/">Fazer login</ButtonLink>
      </Form>
      <ToastContainer />
    </Container>
  );
}
