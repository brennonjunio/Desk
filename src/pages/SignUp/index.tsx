import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { ButtonLink, Container, Form } from "./styles";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SignUpSchema = yup.object({
  username: yup.string().required('O nome de usuário é obrigatório').min(6, 'Deve conter no minimo 6 caracteres'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Deve conter no minimo 6 digitos'),
})


interface SignUpFormData {
  grupoId?: number;
  username: string;
  email: string;
  password: string;
  type?: number;
}

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    }
  })

  const navigate = useNavigate()

  function handleSignUp({ email, password, username }: SignUpFormData) {
    try {
      if (!username || !email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
      } api.post('criar', { username, email, password })
        .then(() => {
          alert('Usuário cadastrado com sucesso!');
          navigate("/");
        })
    } catch (error) {
      console.log('Erro ao cadastrar o usuário.', error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Cadastro</h1>

        <Controller
          control={control}
          name='username'
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Nome de usuário'
              {...field}
              error={errors.username?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='email'
          render={({ field }) => (
            <Input
              type='text'
              placeholder='E-mail'
              {...field}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='password'
          render={({ field }) => (
            <Input
              type='password'
              placeholder='Senha'
              {...field}
              error={errors.password?.message}
            />
          )} />

        <Button title="Entrar" type="submit" />
        <ButtonLink to='/'>Fazer login</ButtonLink>


      </Form>

    </Container>

  )
}