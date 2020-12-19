import styled from 'styled-components';

export const Container = styled.div`
  background: #fafafc;
  border: 1px solid #e6e6f0;
  padding: 16px;
  width: 100%;
  margin-bottom: 0px;
  color: #6a6180;

  display: flex;
  align-items: center;

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
