import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { COLORS } from '../Color';
import Home from '../Screens/Home';
import AllUser from '../Screens/AllUser';
import SingleChat from '../Screens/SingleChat';
const Stack = createStackNavigator();

export default function AppStack() {
    return (
      <Stack.Navigator 
      screenOptions={{
        cardStyle :{ backgroundColor: COLORS.button},
        gestureEnabled: true,
        backgroundColor:COLORS.button,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AllUser" component={AllUser} />
          <Stack.Screen name="SingleChat" component={SingleChat} />
      </Stack.Navigator>
    );
  }