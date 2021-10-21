import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  const selector = useSelector(state => state);
  const {authenticated} = selector.auth.authenticated;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={authenticated ? 'HomeScreen' : 'LoginScreen'}>
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="LoginScreen" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
