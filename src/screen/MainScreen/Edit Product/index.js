import { View, Text, TouchableOpacity,Image, ScrollView, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import Color from '../../../components/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Font from '../../../components/Font'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'
import { useNavigation } from '@react-navigation/native';


  const EditProduct = (id) => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");
  const [name , setName] = useState(id.route.params.data.name)
  const [city , setCity] = useState(id.route.params.data.sale_price)
  const [phone , setPhone] = useState(id.route.params.data.purchase_price)
  const data = [
    {key:'1', value:'Bundle'},
    {key:'2', value:'Cartoon'},
]


const getDataCustomer = () => {
  var FormData = require('form-data');
  var data = new FormData();
  data.append('__api_key__', 'hi,-its-eevee. I can do wonderful things in api creation.');
  data.append('name', name);
  data.append('sale_price', city);
  data.append('purchase_price', phone);
  data.append('category', selected);
  data.append('product_uid', id.route.params.data.uid);

  
  var config = {
    method: 'post',
    url: 'https://api.accounts.lighthousepakistan.online/edit_product.php',
    headers: { 
      'Content-Type': 'multipart/form-data', 
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    // console.log(response);
    if (response.data.state === "OK") {
      navigation.goBack()
    }else{
      Alert.alert('Test')
    }
  })
  .catch(function (error) {
    console.log(error);
  });


}

console.log(id.route.params.data.uid);



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
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Product Name</Text>
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
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(-1.5)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Sale Price</Text>
          <View style={{width:responsiveWidth(85), height:responsiveHeight(6), flexDirection:'row', borderRadius:responsiveWidth(2), borderWidth:1, borderColor:'#D1D5DB', backgroundColor:Color.white, elevation:2}}>
                <View style={{width:responsiveWidth(70), height:responsiveHeight(5.9), alignItems:'center', justifyContent:"center"}}>
                      <TextInput
                      placeholder='City'
                      placeholderTextColor={"#AEB2B8"}
                        style={{
                          height: responsiveHeight(7),
                          width:responsiveWidth(70),
                          margin: 12,
                          padding: 10,
                          color:Color.primery,
                          fontSize:responsiveFontSize(2)
                        }}
                        keyboardType="numeric"
                        value={city}
                        onChangeText={(city) => setCity(city)}
                      />
                </View>
          </View>
        
        </View>
        <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular, marginLeft:responsiveWidth(3)}}>Category</Text>
        <SelectList 
        boxStyles = {{marginBottom:responsiveHeight(3), width:responsiveWidth(84), alignSelf:'center', elevation:3, backgroundColor:Color.white, borderColor:'#D1D5DB', height:responsiveHeight(6)}}
        dropdownStyles = {{width:responsiveHeight(40), alignSelf:'center', marginBottom:responsiveHeight(3), marginTop:responsiveHeight(-3), borderColor:'#D1D5DB'}}
        setSelected={(val) => setSelected(val)} 
        data={data} 
        fontFamily = {Font.Medium}
        save="value"
        />
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(-2)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Purchase Price</Text>
          <View style={{width:responsiveWidth(85), height:responsiveHeight(6), flexDirection:'row', borderRadius:responsiveWidth(2), borderWidth:1, borderColor:'#D1D5DB', backgroundColor:Color.white, elevation:2}}>
                <View style={{width:responsiveWidth(70), height:responsiveHeight(5.9), alignItems:'center', justifyContent:"center"}}>
                      <TextInput
                      placeholder='Phone'
                      placeholderTextColor={"#AEB2B8"}
                        style={{
                          height: responsiveHeight(7),
                          width:responsiveWidth(70),
                          margin: 12,
                          padding: 10,
                          color:Color.primery,
                          fontSize:responsiveFontSize(2)
                        }}
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(phone) => setPhone(phone)}
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
export default EditProduct