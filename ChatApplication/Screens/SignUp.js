import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Image 
} from 'react-native';
import {
  NativeBaseProvider
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Color';
import { FONTS } from '../Font';


export default function SignUp() {
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
    <Image style={styles.logoImage} 
        source={require('../imgSrc/ChatBuzzLogo.png')}
        // resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Logo'}     
          />
    <View style={styles.contentContainer}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.smallTxt}>
                In order to Register your account please fill out all fields
              </Text>
              <View style={[styles.inputContainer,{marginTop:10}]}>
                    <View style={styles.inputIconView}>
                      <Icon
                        name="briefcase-outline"
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
                        name="mail-outline"
                        
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                          fontFamily: 'Ionicons',
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
                onPress={()=>navigation.navigate('Login')}>
                  <Text style={styles.register}>Login Now</Text>
                </TouchableOpacity>
              </View>
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
    fontSize: 15,
    fontFamily : FONTS.SemiBold,
    marginTop: 10,
    textAlign: 'center',
    color : COLORS.textInput,
    textDecorationLine:'underline'
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 1,
    fontWeight: '600',
  },
  Login: {
    alignSelf: 'center',
    fontFamily : FONTS.Medium,
    color : COLORS.textInput,
    fontSize: 15,
    marginTop: 20,
  },
  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily : FONTS.Regular,
  },
  logoImage:{
    width: '50%',
    height: 100,
    resizeMode: 'center',
    alignSelf:'center',
    marginTop:100,
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
  btnText: {
    color: '#fff',
    fontFamily : FONTS.SemiBold,
    fontSize: 16,
    marginTop: 2,
  },
  btn: {
    backgroundColor : COLORS.theme,
    width: '100%',
    height: 50,
    borderRadius: 30,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily : FONTS.Regular,
    marginTop: 15,
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
  image: {
    width: 360,
    height: 440,
    borderRadius: 30,
    borderWidth:6,
    borderColor:'white',
    
  },
});
  