import React,  { useState } from 'react';

import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  // const [loggedIn, onLogin] = useState(false);

  return (
     
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Chat Buzz</Text>
      <Text style={styles.regularText}>Login to continue </Text>

      {/* {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>} */}
          
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          {/* <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable> */}
        <Pressable  style={styles.button}> 
      <Text style={styles.buttonText}>Log in</Text> 
      </Pressable> 
      {/* onPress={() => navigation.navigate('Welcome')} */}
    
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 30,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 5,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 10,
    margin: 100,
    backgroundColor: '#8FC647',
    borderColor: '#8FC647',
    borderWidth: 2,
    borderRadius: 150,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});