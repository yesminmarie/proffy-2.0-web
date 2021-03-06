import React, { useCallback, useRef } from 'react';

import { FiEyeOff } from 'react-icons/fi';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';

import arrowLeft from '../../assets/arrow-left.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  BackToLogin,
  FormContent,
} from './styles';

interface SignUpFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  console.log(formRef);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          firstname: Yup.string().required('Nome obrigatório'),
          lastname: Yup.string().required('Sobrenome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu login no Proffy!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <BackToLogin>
            <Link to="/">
              <img src={arrowLeft} alt="back" />
            </Link>
          </BackToLogin>
          <FormContent>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Cadastro</h1>
              <p>Preencha os dados abaixo para começar.</p>
              <Input name="firstname" placeholder="Nome" />
              <Input name="lastname" placeholder="Sobrenome" />
              <Input name="email" placeholder="E-mail" />
              <Input name="password" type="password" placeholder="Senha" />

              <Button type="submit">Concluir cadastro</Button>
            </Form>
          </FormContent>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
export default SignUp;
