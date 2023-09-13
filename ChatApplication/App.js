import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';
import AllUser from './Screens/AllUser';
import SingleChat from './Screens/SingleChat';
import { COLORS } from './Color';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          headerShown= {false}
          detachInactiveScreens={false}
          initialRouteName="Login"
          screenOptions={{
            cardStyle :{ backgroundColor: COLORS.white},
            gestureEnabled: true,
            backgroundColor:COLORS.button,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right', //<-- this is what will do the trick
          presentation: 'card',
          }}>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={SignUp} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AllUser" component={AllUser} />
          <Stack.Screen name="SingleChat" component={SingleChat} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}