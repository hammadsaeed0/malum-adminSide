import {View, Text, Button, Image} from 'react-native';
import React, {useEffect} from 'react';
import color from '../../../components/Color';
import font from '../../../components/Font';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 3000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#030327',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{justifyContent:'center', alignItems:'center'}}>
      <Image resizeMode='cover' style={{height:200, width:250}} source={require("../../../assets/Images/logo.jpeg")}/>
      </View>
    </View>
  );
};

export default SplashScreen;
