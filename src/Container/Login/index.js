import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

import Logo from "../../assets/logo-img.svg";
import LoginImg from "../../assets/login-img.svg";

import Button from "../../components/Button";
import { useUser } from "../../hooks/UserContext";

import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  NotAccountText,
  ErrorText,
} from "./styles";

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("Campo de e-mail obrigatório."),
  password: yup
    .string()
    .required("Campo de senha obrigatório.")
    .min(6, "Senha deve conter pelo menos 6 dígitos."),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { pushUserData, userData } = useUser();
  const onSubmit = async (clientData) => {
    const { data } = await toast.promise(
      api.post("session", {
        email: clientData.email,
        password: clientData.password,
      }),
      {
        pending: "Verificando seus dados.",
        success: "Seja bem-vindo(a).",
        error: "Verifique seu e-mail e senha.",
      }
    );
    pushUserData(data);
    console.log(userData);
  };

  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-img" />
      <ContainerItems onSubmit={handleSubmit(onSubmit)} noValidate>
        <img src={Logo} alt="login-img" />
        <h1>Entre com a sua conta</h1>

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

        <Button type="submit" style={{ margin: "30px 0 28px 0" }}>
          Sign In
        </Button>

        <NotAccountText>
          Não possui conta? <a href="">Signup</a>
        </NotAccountText>
      </ContainerItems>
    </Container>
  );
}
