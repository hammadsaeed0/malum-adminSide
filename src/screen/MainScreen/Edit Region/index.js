import { View, Text, TouchableOpacity,Image, ScrollView, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import Color from '../../../components/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Font from '../../../components/Font'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';


  const EditRegion = ({route}) => {
  const navigation = useNavigation();
  const [name , setName] = useState('')
const id = route.params.data;
// console.log('id from ----', id);


const getDataCustomer = () => {
  var FormData = require('form-data');
  var data = new FormData();
  data.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
  data.append('region_uid', id);
  data.append('name', name)
  
  var config = {
    method: 'post',
    url: 'https://api.accounts.lighthousepakistan.online/update_region.php',
    headers: { 
      'Content-Type': 'multipart/form-data', 
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    // console.log('error from response',response.data);
    
    if (response.data.state === "OK") {
      navigation.goBack()
    }else{
      Alert.alert('Test')
    }
  }).catch(function (error) {
    console.log(error);
  });
  
}




  return (
    <View style={{flex:1, backgroundColor:Color.white}}>
      {/* Header  */}
      <View style={{width:'100%', height:responsiveHeight(8), alignItems:'center', justifyContent:"center", backgroundColor:'white', elevation:3}}>
        <View style={{width:"90%", alignSelf:"center", flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={{width:33, height:33, tintColor:Color.primery}} source={require('../../../assets/Images/back.png')}/>
        </TouchableOpacity>
        <Image style={{width:35, height:35, borderRadius:responsiveWidth(10)}} source={require('../../../assets/Images/admin.jpeg')}/>
        </View>
      </View>
      <ScrollView contentContainerStyle={{width:responsiveWidth(90) , height:responsiveHeight(80), alignSelf:'center', marginTop:responsiveHeight(0)}}>

        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(2)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Region</Text>
          <View style={{width:responsiveWidth(85), height:responsiveHeight(6), flexDirection:'row', borderRadius:responsiveWidth(2), borderWidth:1, borderColor:'#D1D5DB', backgroundColor:Color.white, elevation:2}}>
                <View style={{width:responsiveWidth(70), height:responsiveHeight(5.9), alignItems:'center', justifyContent:"center"}}>
                      <TextInput
                      placeholder='Name'
                      placeholderTextColor={"#AEB2B8"}
                        style={{
                          height: responsiveHeight(7),
                          width:responsiveWidth(70),
                          margin: 12,
                          padding: 10,
                          color:Color.primery,
                          fontSize:responsiveFontSize(2)
                        }}
                        value={name}
                        onChangeText={(name) => setName(name)}
                      />
                </View>
          </View>
        
        </View>
        <TouchableOpacity style={{width:responsiveWidth(85), height:responsiveHeight(6), backgroundColor:Color.primery, borderRadius:10, alignItems:'center', justifyContent:'center', alignSelf:'center'}} onPress={() => getDataCustomer()}>
          <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(2)}}>Save all</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default EditRegion