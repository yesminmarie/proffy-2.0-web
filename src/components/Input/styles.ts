import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  background: #fafafc;
  padding: 16px;
  width: 100%;
  margin-bottom: 0px;

  border: 1px solid #e6e6f0;
  color: #6a6180;

  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      ::after {
        position: absolute;
        content: ' ';
        display: inline-block;
        width: 90%;
        height: 1.5px;
        bottom: 0;
        background: #8257e5;
        animation: fade 200ms ease-out;
      }
    `}

  @keyframes fade {
    from {
      opacity: 0;
      /* transform: translateY(0); */
    }

    to {
      opacity: 1;
    }
  }

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  &:last-of-type {
    margin-top: 0px;
    margin-bottom: 24px;
    border-radius: 0 0 8px 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #6a6180;

    &::placeholder {
      color: #9c98a6;
    }
  }
  svg {
    color: #8257e5;
  }
`;
