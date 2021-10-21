import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

const InputText = ({color}) => {
  return(
    <Container>
      <Input color={color} placeholder='Escreva algo aqui!'/>
    </Container>
  );
}

InputText.propTypes = {
  color: PropTypes.string
}

InputText.defaultProps = {
  color: '#000'
}

export default InputText;
