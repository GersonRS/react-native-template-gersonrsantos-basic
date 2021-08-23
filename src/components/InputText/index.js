import React from 'react';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

const InputText = ({color}) => {
  return(
    <Container>
      <Input />
    </Container>
  );
}

InputText.propTypes = {
  color: PropTypes.color
}

InputText.defaultProps = {
  color: '#000'
}

export default InputText;