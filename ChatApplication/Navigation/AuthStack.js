import React from 'react';
import { createStackNavigator} from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/native-stack'
import { COLORS } from '../Color';
import Login from '../Screens/Login';
import Signup from '../Screens/SignUp';

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