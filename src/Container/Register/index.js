import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

import Logo from "../../assets/logo-img.svg";
import RegisterImg from "../../assets/register-img.svg";

import Button from "../../components/Button";

import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  NotAccountText,
  ErrorText,
} from "./styles";

const schema = yup.object({
  name: yup
    .string("O seu nome é obrigatório")
    .required("Campo de nome é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("Campo de e-mail obrigatório."),
  password: yup
    .string()
    .required("Campo de senha obrigatório.")
    .min(6, "Senha deve conter pelo menos 6 dígitos."),
  confirmPassword: yup
    .string()
    .required("Campo de senha obrigatório.")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (clientData) => {
    try {
      const { status } = await api.post(
        "users",
        {
          email: clientData.email,
          password: clientData.password,
          name: clientData.name,
        },
        { validateStatus: () => true }
      );

      if (status === 201 || status === 200) {
        toast.success("Conta criada com sucesso.");
      } else if (status === 409) {
        toast.error("Usuário já existente.");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Falha na conexão com servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="login-img" />
      <ContainerItems onSubmit={handleSubmit(onSubmit)} noValidate>
        <img src={Logo} alt="login-img" />
        <h1>Cadastre-se</h1>
        <Label>Nome</Label>
        <Input type="text" {...register("name")} error={errors.name?.message} />
        <ErrorText>{errors.name?.message}</ErrorText>

        <Label>Email</Label>
        <Input
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />
        <ErrorText>{errors.email?.message}</ErrorText>

        <Label>Senha</Label>
        <Input
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />
        <ErrorText>{errors.password?.message}</ErrorText>
        <Label>Confirmar Senha</Label>
        <Input
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <ErrorText>{errors.confirmPassword?.message}</ErrorText>

        <Button type="submit" style={{ margin: "10px 0 28px 0" }}>
          Sign Up
        </Button>

        <NotAccountText>
          Já possui conta ? <a href="">Sign In</a>
        </NotAccountText>
      </ContainerItems>
    </Container>
  );
}
