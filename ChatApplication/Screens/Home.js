import {Container, Icon,NativeBaseConfigProvider} from 'native-base';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, TouchableOpacity} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import {COLORS} from '../Color';
import { FONTS } from '../Font';
import HomeHeader from '../Header/HomeHeader';
import { useNavigation } from '@react-navigation/native';


const listData = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Hey there, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: 'Where are you?',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  },
  {
    name: 'Robert',
    avatar_url:
      'https://expertphotography.b-cdn.net/wp-content/uploads/2020/05/male-poses-squint.jpg',
    subtitle: 'Where does it come from?',
  },
  {
    name: 'downey junior',
    avatar_url:
      'https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-marlon.jpg',
    subtitle: 'Where can I get some?',
  },
  {
    name: 'Ema Watson',
    avatar_url:
      'https://images.unsplash.com/photo-1503104834685-7205e8607eb9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    subtitle: 'I am good, how are you?',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
  {
    name: 'Jenifar Lawrence',
    avatar_url:
      'https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg',
    subtitle: 'Why do we use it?',
  },
  {
    name: 'Tom Holland',
    avatar_url:
      'https://static.toiimg.com/thumb.cms?msid=80482429&height=600&width=600',
    subtitle: ' If you use this site regularly and would like to help keep the site',
  },
];

export default function Home() {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
  const { name, avatar_url, subtitle } = item;
    return(

    
    <ListItem 
    // bottomDivider 
    // activeOpacity={1}
    containerStyle={{paddingVertical:8,marginVertical:0}}
    onPress={()=>navigation.navigate('SingleChat',{data:item})}>
      <Avatar 
      source={{uri: avatar_url}} 
      rounded
      title={name}
      size="medium" />
      <ListItem.Content>
        <ListItem.Title style={{fontFamily:FONTS.Regular,fontSize:14}}>
           {name}
        </ListItem.Title>
        <ListItem.Subtitle 
        style={{fontFamily:FONTS.Regular,fontSize:12}}  numberOfLines={1}>
          {subtitle}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
    )
  };
  
  return (
    <NativeBaseConfigProvider>
    <Container style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <HomeHeader />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={listData}
        renderItem={renderItem}
      />
      <TouchableOpacity 
      style={styles.but}
      onPress={()=>navigation.navigate('AllUser')}>
          <Icon 
              name="users"
              type="FontAwesome5"
              style={{color:COLORS.white,fontSize:20}}
          />
      </TouchableOpacity>
    </Container>
    </NativeBaseConfigProvider>
  );
};



const styles = StyleSheet.create({
  but: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.theme,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});