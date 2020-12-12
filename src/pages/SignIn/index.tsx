import React from 'react';

import { FaHeart } from 'react-icons/fa';

import {
  Container,
  Content,
  Background,
  Form,
  RememberAndForgotPassword,
  SignUp,
  SignUpContent,
} from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <Form>
        <h1>Fazer login</h1>

        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <RememberAndForgotPassword>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" value="Lembrar-me" />
            Lembrar-me
          </label>

          <a href="forgot">Esqueci minha senha</a>
        </RememberAndForgotPassword>
        <button type="submit">Entrar</button>
      </Form>
      <SignUp>
        <SignUpContent>
          <span>Não tem conta?</span>
          <a href="login">Cadastre-se</a>
        </SignUpContent>
        <span>
          É de graça <FaHeart />{' '}
        </span>
      </SignUp>
    </Content>
  </Container>
);

export default SignIn;
