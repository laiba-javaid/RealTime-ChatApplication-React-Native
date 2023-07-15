import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Component/Constant/Color';
import Login from '../Screens/Login';
import Signup from '../Screen/Signup';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      cardStyle :{ backgroundColor: COLORS.button},
      gestureEnabled: true,
      backgroundColor:COLORS.button,
      gestureDirection: 'horizontal',
      ...TransitionPresets.SlideFromRightIOS,
    }}
    initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}