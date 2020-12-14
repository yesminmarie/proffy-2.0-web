import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
