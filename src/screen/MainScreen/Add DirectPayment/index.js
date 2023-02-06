import { View, Text, TouchableOpacity,Image, ScrollView, TextInput, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import Color from '../../../components/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Font from '../../../components/Font'
import axios from 'axios'
import { SelectList } from 'react-native-dropdown-select-list'
import { useFocusEffect, useNavigation } from '@react-navigation/native';



const AddDirectPayment = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("");
  const [method, setMethod] = React.useState("");
  const [name , setName] = useState('Green Food')
  const [discription , setDiscription] = useState('')
  const [amount , setAmount] = useState('')
  const [customer, setCustomer] = useState('');
  const data = [
    {key:'1', value:'Bundle'},
    {key:'2', value:'Carton'},
]
const ata = [
  {key:'1', value:'Cash'},
  {key:'2', value:'Online'},
]

const fetchCustomer = () => {
  var formdata = new FormData();
  formdata.append(
    '__api_key__',
    'hi,-its-eevee. I can do wonderful things in api creation.',
  );

  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow',
  };

  fetch(
    'https://api.accounts.lighthousepakistan.online/fetch_customers.php',
    requestOptions,
  )
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result);
      // console.log('data from customers------', data.data.customers);
      setCustomer(data.data.customers);
      // data.data.customers.map(a => {
      //   setCustomer(a.name);
      // });
      // console.log(customer);
    })
    .catch(error => console.log('error', error));
};

const getDataCustomer = () => {
  const customerID = customer.filter(i => {
    return i.name === selected;
  });
  // console.log(selected);
  // console.log(method);
  // console.log(name);
  // console.log(discription);
  // console.log(amount);
  // console.log(customerID[0].uid);

  var formdata = new FormData();
  formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");
  formdata.append("company_uid", "adb7795a-577b-4cc6-aae8-41c0e42c373a");
  formdata.append("customer_uid",customerID[0].uid);
  formdata.append("method", method);
  formdata.append("description", discription);
  formdata.append("amount", amount);
  
  var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
  };
  
  fetch("https://api.accounts.lighthousepakistan.online/add_direct_payment.php", requestOptions)
    .then(response => response.text())
    .then(result => {
      const data = JSON.parse(result)
      if(data.state === "OK"){
        navigation.goBack()
      }else{
        console.log(data);
      }
    })
    .catch(error => console.log('error', error));
}



useFocusEffect(
  React.useCallback(() => {
    fetchCustomer();
  }, []),
);

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
      <ScrollView contentContainerStyle={{width:responsiveWidth(90) , height:responsiveHeight(100), alignSelf:'center', marginTop:responsiveHeight(0)}}>

        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(2)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Company</Text>
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
                        // onChangeText={(name) => setName(name)}
                      />
                </View>
          </View>
        
        </View>
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(-1.5)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Description</Text>
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
                        value={discription}
                        onChangeText={(discription) => setDiscription(discription)}
                      />
                </View>
          </View>
        
        </View>
        <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular, marginLeft:responsiveWidth(3)}}>Customer</Text>
        <SelectList 
        boxStyles = {{marginBottom:responsiveHeight(3), width:responsiveWidth(84), alignSelf:'center', elevation:3, backgroundColor:Color.white, borderColor:'#D1D5DB', height:responsiveHeight(6)}}
        dropdownStyles = {{width:responsiveHeight(40), alignSelf:'center', marginBottom:responsiveHeight(3), marginTop:responsiveHeight(-3), borderColor:'#D1D5DB'}}
        fontFamily = {Font.Medium}
        save="value"
        setSelected={val => setSelected(val)}
          data={
            customer
              ? customer?.map(i => ((value = i.name), (key = i.name)))
              : data
          }
        />
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(-2)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular}}>Amount</Text>
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
                        value={amount}
                        onChangeText={(amount) => setAmount(amount)}
                      />
                </View>
          </View>
        
        </View>
        <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Regular, marginLeft:responsiveWidth(3)}}>Method</Text>
        <SelectList 
        boxStyles = {{marginBottom:responsiveHeight(3), width:responsiveWidth(84), alignSelf:'center', elevation:3, backgroundColor:Color.white, borderColor:'#D1D5DB', height:responsiveHeight(6)}}
        dropdownStyles = {{width:responsiveHeight(40), alignSelf:'center', marginBottom:responsiveHeight(3), marginTop:responsiveHeight(-3), borderColor:'#D1D5DB'}}
        setSelected={(val) => setMethod(val)} 
        data={ata} 
        fontFamily = {Font.Medium}
        save="value"
        />
        <TouchableOpacity style={{width:responsiveWidth(85), height:responsiveHeight(6), backgroundColor:Color.primery, borderRadius:10, alignItems:'center', justifyContent:'center', alignSelf:'center'}} onPress={() => getDataCustomer()}>
          <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(2)}}>Save all</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}
export default AddDirectPayment