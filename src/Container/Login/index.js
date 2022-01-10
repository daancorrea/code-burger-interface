import React from "react";

import Logo from "../../assets/logo-img.svg"
import LoginImg from "../../assets/login-img.svg"

import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  Button,
  NotAccountText,
} from "./styles";


export default function Login() {
  return (
    <Container>
      <LoginImage src={LoginImg} alt="login-img" />
      <ContainerItems>
        <img src={Logo} alt="login-img" />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />
        <Label>Senha</Label>
        <Input />

        <Button>Sign In</Button>

        <NotAccountText>
          Não possui conta? <a href="">Signup</a>
        </NotAccountText>
      </ContainerItems>
    </Container>
  );
}
