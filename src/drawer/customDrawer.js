import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Color from '../components/Color'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Font from '../components/Font'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native'




const CustomDrawer = (props, ) => {
  const navigation = useNavigation();
    const singOut = () =>{
      navigation.navigate('login')
    }
  return (
    <View style={{flex: 1}}>
      <View style={{width:"100%", height:'100%', backgroundColor:'#1F2937'}}>
            
            <View style={{width:'100%', height:200, backgroundColor:'#1F2937', alignItems:'center', justifyContent:'center'}}>
                <Image style={{width:150, height:150, borderRadius:10}} source={require('../assets/Images/logo.jpeg')}/>
            </View>
            <DrawerContentScrollView {...props}>
              <View style={{flex:1 , paddingTop:10}}>
              <DrawerItemList {...props} />
              </View>
            </DrawerContentScrollView>
            <TouchableOpacity style={{alignItems:"center", justifyContent:'center', width:'70%', height:responsiveHeight(5), backgroundColor:'#f0bc74', alignSelf:"center", borderRadius:10, marginBottom:responsiveHeight(2), flexDirection:'row'}} onPress={() => singOut()}>
            <Icon name="logout" size={15} color={Color.primery} />
            <Text style={{fontFamily:Font.Medium, color:Color.primery, marginLeft:responsiveWidth(2)}}>Sign Out</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default CustomDrawer