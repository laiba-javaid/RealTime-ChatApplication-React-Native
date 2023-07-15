import React,  { useEffect,useState } from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from './Color';
  import { FONTS } from './Font';
  import { useNavigation } from '@react-navigation/native';
  import ChatBuzzLogo from './imgSrc/ChatBuzz.png';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  
 
} from 'react-native';

export default function Login() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const navigation = useNavigation();
  // const [loggedIn, onLogin] = useState(false);
  useEffect(() => {}, []);

  return (
     
    <ScrollView style={styles.container}>
    <Image style={styles.logoImage} 
        source={ChatBuzzLogo}
        // resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Logo'}     
          />
       <Text 
        style={{color:'#545454',
        fontFamily: FONTS.Bold,
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
        }}>
          Chat Buzz
        </Text>
      <Text style={styles.title}>Login</Text>
              <Text style={styles.smallTxt}>
                In order to login your account please enter credentials
              </Text>

      {/* {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>} */}
      <KeyboardAwareScrollView showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <View style={[styles.inputContainer,{marginTop:10}]}>
                    <View style={styles.inputIconView}>
                      <Ionicons
                        name="ios-mail" size={32} color="white"
                        
                      />
                    </View>
          <TextInput
            style={styles.inputs}
            value={email}
            placeholderTextColor={COLORS.liteBlack}
            underlineColorAndroid="transparent"
            onChangeText={onChangeEmail}
            keyboardType="number-pad"
            placeholder={'Enter Email'}
            
          />
          </View>
          

                  <View style={styles.inputContainer}>
                    <View style={styles.inputIconView}>
                      <EntypoIcon
                        name="add-to-list"
                        style={{
                          color: '#fff',
                          fontSize: 18,
                          textAlign: 'center',
                        }}
                      />
                    </View>
          <TextInput
            style={styles.inputs}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'Enter Password'}
            placeholderTextColor={COLORS.liteBlack}
            underlineColorAndroid="transparent"
            keyboardType={'default'}
            secureTextEntry={true}
          />
          </View>
          </KeyboardAwareScrollView>
         
        <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate('Home')}> 
      <Text style={styles.btnText}>Log in</Text> 
      </TouchableOpacity> 
      <View style={styles.contactView}>
                <Text style={styles.smallTxt}>New user?</Text>
                <TouchableOpacity style={{marginLeft: 4}} 
                onPress={() => navigation.navigate('Signup')}>
                  <Text style={styles.register}>Register Now</Text>
                </TouchableOpacity>
              </View>
      
    
      </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  title: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    marginTop: 50,
    fontWeight: '600',
  },
  register: {
    fontSize: 15,
    fontFamily : FONTS.SemiBold,
    marginTop: 10,
    textAlign: 'center',
    color : COLORS.textInput,
    textDecorationLine:'underline'
  },
  uppercard: {
    height:50,
    backgroundColor : COLORS.theme,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage:{
    width: '50%',
    height: 100,
    resizeMode: 'center',
    alignSelf:'center',
    marginTop:100,
  },
  btnText: {
    color: '#fff',
    fontFamily : FONTS.Bold,
    fontWeight:'bold',
    fontSize: 18,
    marginTop: 1,
  },
  btn: {
    backgroundColor : COLORS.theme,
    width: '60%',
    height: 50,
    borderRadius: 50,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
    alignSelf: 'center'
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
  inputs: {
    borderBottomColor: COLORS.white,
    flex: 1,
    color: COLORS.liteBlack,
    paddingLeft: 10,
    fontFamily : FONTS.Regular,
  },
  contactView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  Login: {
    alignSelf: 'center',
    fontFamily : FONTS.Medium,
    color : COLORS.textInput,
    fontSize: 15,
    marginTop: 20,
  },
  inputContainer: {
    borderRadius: 30,
    height:48,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginBottom:10,
    elevation: 6,
  
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 5,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  smallTxt: {
    fontSize: 13,
    color: COLORS.black,
    fontFamily : FONTS.Regular,
    marginTop: 15,
    opacity:.5,
    textAlign: 'center',
  },
  
});