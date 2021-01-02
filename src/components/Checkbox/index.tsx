import React, { useState, useCallback } from 'react';

import { Container, HiddenCheckbox, StyledCheckbox, Text } from './styles';
import CheckIcon from '../../assets/tick.svg';

const Checkbox: React.FC = ({ children }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Container checked={checked} onClick={handleCheckboxChange}>
      <HiddenCheckbox onChange={handleCheckboxChange} checked={checked} />
      <StyledCheckbox checked={checked}>
        <img alt="tick icon" style={{ width: '10px' }} src={CheckIcon} />
      </StyledCheckbox>
      <Text checked={checked}> {children} </Text>
    </Container>
  );
};

export default Checkbox;
