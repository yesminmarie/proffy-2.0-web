import React from 'react';

import { FaEyeSlash } from 'react-icons/fa';

import { Form } from '@unform/web';
import arrowLeft from '../../assets/arrow-left.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
  BackToLogin,
  FormContent,
} from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: Record<string, unknown>): void {
    console.log(data);
  }
  return (
    <Container>
      <Content>
        <BackToLogin>
          <a href="login">
            <img src={arrowLeft} alt="back" />
          </a>
        </BackToLogin>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar.</p>
            <Input name="name" placeholder="Nome" />
            <Input name="lastname" placeholder="Sobrenome" />
            <Input name="email" placeholder="E-mail" />
            <Input
              name="password"
              icon={FaEyeSlash}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Concluir cadastro</Button>
          </Form>
        </FormContent>
      </Content>
      <Background />
    </Container>
  );
};
export default SignUp;
