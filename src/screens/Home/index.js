import React from 'react';
import InputText from '../../components/InputText';
import { Container, Text } from './styles';

export const addBookmark = book => dispatch => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book
  });
};

const Home = () => {
  return(
    <Container>
      <Text>Hello World!</Text>
      <InputText />
    </Container>
  );
}

export default Home;
