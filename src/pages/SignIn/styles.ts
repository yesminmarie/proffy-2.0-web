import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;
`;

export const Form = styled.div`
  margin: 80px 0 128px;
  width: 400px;

  h1 {
    margin-bottom: 24px;
    color: #32264d;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    text-align: left;
  }

  > input {
    background: #fafafc;
    border-radius: 8px 8px 0 0;
    border: 1px solid #e6e6f0;
    padding: 16px;
    width: 100%;
    margin-bottom: 0px;
    color: #6a6180;

    &::placeholder {
      color: #9c98a6;
    }

    & + input {
      margin-top: 0px;
      margin-bottom: 24px;
      border-radius: 0 0 8px 8px;
    }
  }

  button {
    background: #04d361;
    height: 56px;
    border-radius: 8px;
    border: 0;
    padding: 0 16px;
    color: #fff;
    width: 100%;
    font-weight: 600;
    margin-top: 40px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
export const RememberAndForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    font-size: 14px;
    display: flex;
    align-items: center;

    color: #9c98a6;

    input[type='checkbox'] {
      margin-right: 16px;
      background: #fafafc;

      border: 1px solid #e6e6f0;
      border-radius: 8px;
    }
  }

  a {
    color: #9c98a6;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#9c98a6')};
    }
  }
`;

export const SignUp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;

  > span {
    font-size: 12px;
    color: #9c98a6;
    margin-right: 8px;
    svg {
      color: #8257e5;
    }
  }
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #6a6180;
  }

  > a {
    color: #8257e5;
    font-weight: 600;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#8257e5')};
    }
  }
`;
