import React, { useCallback, useRef } from 'react';

import { FaEyeSlash } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

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

interface SignUpFormData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        lastname: Yup.string().required('Sobrenome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
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
      <Content>
        <BackToLogin>
          <a href="login">
            <img src={arrowLeft} alt="back" />
          </a>
        </BackToLogin>
        <FormContent>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
