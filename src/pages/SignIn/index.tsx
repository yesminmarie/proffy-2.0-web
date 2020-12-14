import React from 'react';

import { FaHeart, FaEyeSlash } from 'react-icons/fa';

import Input from '../../components/Input';
import Button from '../../components/Button';

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

        <Input name="email" placeholder="E-mail" />
        <Input
          name="password"
          icon={FaEyeSlash}
          type="password"
          placeholder="Senha"
        />

        <RememberAndForgotPassword>
          <label htmlFor="remember">
            <input type="checkbox" id="remember" value="Lembrar-me" />
            Lembrar-me
          </label>

          <a href="forgot">Esqueci minha senha</a>
        </RememberAndForgotPassword>
        <Button type="submit">Entrar</Button>
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
