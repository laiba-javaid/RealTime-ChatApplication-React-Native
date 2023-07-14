
import {View, StyleSheet} from 'react-native';
import React from 'react';
import Signup from './SignUp'
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();
const App=()=>{
return(
  <NavigationContainer>
<Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
  </NavigationContainer>

);
}
export default App;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
