import React, { useRef, useCallback } from 'react';

import { FaHeart } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  AnimationContainer,
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

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
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

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <FormContent>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Fazer login</h1>
              <Inputs>
                <Input name="email" placeholder="E-mail" />
                <Input
                  name="password"
                  icon={FiEyeOff}
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
              <Link to="signup">Cadastre-se</Link>
            </SignUpContent>
            <span>
              É de graça <FaHeart />{' '}
            </span>
          </SignUp>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
