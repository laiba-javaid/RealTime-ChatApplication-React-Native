import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image
  
} from 'react-native';
import {
  Icon,
  NativeBaseProvider
} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from './Color';
import { FONTS } from './Font';


export default function Signup() {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const [mobile, onChangeMobile] = useState('');
  const [password, onChangePassword] = useState('');
  const [confirmPassword, onChangeConfirmPassword] = useState('');
  const navigation = useNavigation();
  const registerUser = () => {
    console.log('Signup:', { name, email, mobile, password });
  };
  
  return (
    <NativeBaseProvider>

    
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.smallTxt}>
                In order to Register your account please fill out all fields
              </Text>
              <View style={[styles.inputContainer,{marginTop:10}]}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="person"
                        type="Ionicons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                      </View>
      <TextInput
        placeholder="Enter Name"
        style={[styles.inputs, {marginTop: 5}]}
        value={name}
        onChangeText={onChangeName}
        placeholderTextColor={COLORS.liteBlack}
        underlineColorAndroid="transparent"
      />
      </View>
      <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="gmail"
                        type="MaterialCommunityIcons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
      <TextInput
        placeholder="Enter Email"
        style={[styles.inputs, {marginTop: 5}]}
        value={email}
        onChangeText={onChangeEmail}
        placeholderTextColor={COLORS.liteBlack}
        underlineColorAndroid="transparent"
      />
      </View>
      <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="key"
                        type="MaterialCommunityIcons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
      <TextInput
        placeholder="Enter Mobile"
        keyboardType={'number-pad'}
        style={[styles.inputs, {marginTop: 5}]}
        value={mobile}
        onChangeText={onChangeMobile}
        placeholderTextColor={COLORS.liteBlack}
        underlineColorAndroid="transparent"
      />
      </View>
      

                  <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="md-information-circle"
                        type="Ionicons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
      <TextInput
        placeholder="Enter Password"
        style={[styles.inputs, {marginTop: 5}]}
        value={password}
        onChangeText={onChangePassword}
        placeholderTextColor={COLORS.liteBlack}
        underlineColorAndroid="transparent"
      />
      </View>

<View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="md-information-circle"
                        type="Ionicons"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
      <TextInput
        placeholder="Enter Confirm Password"
        style={[styles.inputs, {marginTop: 5}]}
        value={confirmPassword}
        onChangeText={onChangeConfirmPassword}
        placeholderTextColor={COLORS.liteBlack}
        underlineColorAndroid="transparent"
      />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={registerUser() }>
        <Text style={styles.btnText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.contactView}>
                <Text style={styles.smallTxt}>Existing user?</Text>
                <TouchableOpacity 
                style={{marginLeft: 4}}
                onPress={()=>navigation.navigate('LoginScreen')}>
                  <Text style={styles.register}>Login Now</Text>
                </TouchableOpacity>
              </View>
    </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  register: {
    fontSize: 13,
    fontFamily : FONTS.SemiBold,
    marginTop: 12,
    textAlign: 'center',
    color : COLORS.textInput,
    textDecorationLine:'underline'
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 100,
    fontWeight: '600',
  },
  Login: {
    alignSelf: 'center',
    fontFamily : FONTS.Medium,
    color : COLORS.textInput,
    fontSize: 20,
    marginTop: 10,
  },
  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily : FONTS.Regular,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,

    alignSelf: 'center',
    paddingLeft: 20,
  },
  inputContainer: {
    borderRadius: 30,
    height:48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom:10,
    elevation: 2,
  },
  inputIconView: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : COLORS.theme,
    height: '100%',
    borderRadius: 30,
    alignSelf: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    elevation: 2,
  },
  btn: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: 'purple',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily : FONTS.Regular,
    marginTop: 10,
    opacity:.5,
    textAlign: 'center',
  },
  orLogin: {
    alignSelf: 'center',
    marginTop: 50,
    fontSize: 20,
    textDecorationLine: 'underline',
    fontWeight: '600',
    color: 'black',
  },
});
  