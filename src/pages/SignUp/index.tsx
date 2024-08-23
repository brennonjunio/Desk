import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";
import { ButtonLink, Container, Form } from "./styles";

import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";

const SignUpSchema = yup.object({
  name: yup.string().required('O nome de usuário é obrigatório').min(6, 'Deve conter no minimo 6 caracteres'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória').min(6, 'Deve conter no minimo 6 digitos'),
  idGroup: yup.number(),
  user: yup.string().min(6, 'Deve conter no minimo 6 digitos').matches(/^\S*$/, "O nome de usuário não pode conter espaços"),
})


type SignUpFormData = {
  idGroup?: number;
  user?: string;
  name: string;
  email: string;
  password: string;
};

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
      idGroup: 1,
      user: ''
    }
  })

  const navigate = useNavigate()

  function handleSignUp({ email, password, user, idGroup, name }: SignUpFormData) {
    try {
      if (!user || !email || !password || !idGroup || !name) {
        toast.error('Por favor, preencha todos os campos.');
        return;
      } api.post('/user/create', { user, email, password, idGroup, name })
        .then(() => {
          toast.success('Usuário cadastrado com sucesso!');
          navigate("/");
        })
    } catch (error) {
      console.log('Erro ao cadastrar o usuário.', error)
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>Cadastro</h1>

        <Controller
          control={control}
          name='name'
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Nome'
              {...field}
              error={errors.name?.message}
            />
          )}
        />
        <Controller
          control={control}
          name='user'
          render={({ field }) => (
            <Input
              type='text'
              placeholder='Nome de usuário'
              {...field}
              error={errors.user?.message}
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