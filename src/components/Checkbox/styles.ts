import styled from 'styled-components';

interface ContainerProps {
  checked: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text = styled.label<ContainerProps>`
  font-size: 14px;
  color: #9c98a6;
`;

export const StyledCheckbox = styled.label<ContainerProps>`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border-radius: 8px;
  background: ${props => (props.checked ? '#04D361' : '#fafafc')};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: ${props => (props.checked ? 'flex' : 'none')};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;
