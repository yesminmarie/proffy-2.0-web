import React, { useRef, useCallback, useContext } from 'react';

import { FaHeart, FaEyeSlash } from 'react-icons/fa';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import AuthContext from '../../context/AuthContext';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  Background,
  FormContent,
  Inputs,
  RememberAndForgotPassword,
  SignUp,
  SignUpContent,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { name } = useContext(AuthContext);

  console.log(name);

  console.log(formRef);
  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err.inner);

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Fazer login</h1>
            <Inputs>
              <Input name="email" placeholder="E-mail" />
              <Input
                name="password"
                icon={FaEyeSlash}
                type="password"
                placeholder="Senha"
              />
            </Inputs>
            <RememberAndForgotPassword>
              <label htmlFor="remember">
                <input type="checkbox" id="remember" value="Lembrar-me" />
                Lembrar-me
              </label>

              <a href="forgot">Esqueci minha senha</a>
            </RememberAndForgotPassword>
            <Button type="submit">Entrar</Button>
          </Form>
        </FormContent>
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
};

export default SignIn;
