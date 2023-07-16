import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import { TransitionPresets} from '@react-navigation/native-stack'
import AppStack from './Navigation/AppStack';
import AuthStack from './Navigation/AuthStack';
import { COLORS } from './Color';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  const navigation = useNavigation();
  return (
      <NavigationContainer ref={r => navigation.setTopLevelNavigator(r)}>
        <Stack.Navigator
          headerMode="none"
          detachInactiveScreens={false}
          initialRouteName="Auth"
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.white},
            gestureEnabled: true,
            backgroundColor:COLORS.button,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <Stack.Screen name="Auth" component={AuthStack} />
          <Stack.Screen name="AppStack" component={AppStack} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}