import React from 'react';
import { Text, Button } from 'react-native';

import { useDispatch } from 'react-redux';
import { Container } from './styles';
import { Creators as AuthActions } from '../../store/ducks/auth';

const USER = {
    name: 'User Redux',
    age: '22',
    token: 'myToken123',
    email: 'userredux@teste.com'
};

export default function Login({navigation}) {
    const dispach = useDispatch();

    const login = () => {
        dispach(AuthActions.addUserAction(USER));
        dispach(AuthActions.addAuthenticated({ authenticated: true }));
        navigation.navigate('HomeScreen');
    };
    return (
        <Container>
            <Text>Auth Page</Text>
            <Button title="Login" onPress={login} />
        </Container>
    );
}
