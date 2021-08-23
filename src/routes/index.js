import React from 'react';
// import { useTheme } from 'styled-components';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import { useAuth } from '../src/hooks/useAuth';

import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
