import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
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

export const AnimationContainer = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const FormContent = styled.div`
  width: 400px;

  h1 {
    margin-top: 54px;
    margin-bottom: 21px;
    color: #32264d;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    text-align: left;
  }

  p {
    width: 214px;
    margin-bottom: 40px;
    font-size: 16px;
    color: #6a6180;
  }
`;

export const BackToLogin = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;

  a {
    transition: color 0.2s;
    svg {
      color: ${shade(0.2, '#8257e5')};
    }
  }
`;
