import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useFocusEffect } from '@react-navigation/native'

const CustomerLedger = ({navigation}) => {
  const [custoemrData , setCustomerData] = useState([])
  const data = [
    {
      name : "Umer Sialkot",
    city : "Sargodha",
    region: "Punjab",
    phone: "03080832932",
    invoice: '3',
    wallet: '34534'
    },
    {
      name : "Umer Sialkot",
    city : "Sargodha",
    region: "Punjab",
    phone: "03080832932",
    invoice: '3',
    wallet: '34534'
    },
     {
      name : "Umer Sialkot",
    city : "Sargodha",
    region: "Punjab",
    phone: "03080832932",
    invoice: '3',
    wallet: '34534'
    },
     {
      name : "Umer Sialkot",
    city : "Sargodha",
    region: "Punjab",
    phone: "03080832932",
    invoice: '3',
    wallet: '34534'
    },
  ]

  const getCustomerLedger = () =>{
    var formdata = new FormData();
    formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://api.accounts.lighthousepakistan.online/fetch_customer_report.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result)
        // console.log(data.data.customer_report);
        setCustomerData(data.data.customer_report)
      })
      .catch(error => console.log('error', error));
      }

  useFocusEffect(
    React.useCallback(() => {
      getCustomerLedger();
    }, []),
  );




  return (
    <View style={{flex:1, backgroundColor:Color.gray}}>
      {/* Header  */}
      <View style={{width:'100%', height:responsiveHeight(8), alignItems:'center', justifyContent:"center", backgroundColor:'white', elevation:5}}>
        <View style={{width:"90%", alignSelf:"center", flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image style={{width:35, height:35, tintColor:Color.primery}} source={require('../assets/Images/sort.png')}/>
        </TouchableOpacity>
        <Image style={{width:35, height:35, borderRadius:responsiveWidth(10)}} source={require('../assets/Images/admin.jpeg')}/>
        </View>
      </View>
  
      <TextInput
      placeholder='Search'
      placeholderTextColor={Color.primery}
        style={{
          height: responsiveHeight(5),
          margin: responsiveWidth(8),
          borderWidth: 1,
          paddingLeft:responsiveWidth(6),
          borderRadius:10,
          width:'90%',
          alignSelf:'center',
          color:Color.primery,
          borderColor:'#cfcfd1',
          backgroundColor:'white',
          fontFamily:Font.Regular

        }}
      />
      {/* Buttons  */}
        <View style={{width:responsiveWidth(90), height:responsiveHeight(10),marginBottom:responsiveHeight(3), marginTop:responsiveHeight(-3) , alignSelf:'center',flexDirection:'row', justifyContent:"space-around", alignItems:'center'}}>
          <TouchableOpacity style={{width:responsiveWidth(20), height:responsiveHeight(5), backgroundColor:'#EBEBEB', borderRadius:responsiveWidth(2), alignItems:'center', justifyContent:'center', elevation:3}}>
            <Text style={{fontFamily:Font.Medium, color:Color.primery}}>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:responsiveWidth(20), height:responsiveHeight(5), backgroundColor:'#EBEBEB', borderRadius:responsiveWidth(2), alignItems:'center', justifyContent:'center', elevation:3}}>
            <Text style={{fontFamily:Font.Medium, color:Color.primery}}>CSV</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width:responsiveWidth(20), height:responsiveHeight(5), backgroundColor:'#EBEBEB', borderRadius:responsiveWidth(2), alignItems:'center', justifyContent:'center', elevation:3}}>
            <Text style={{fontFamily:Font.Medium, color:Color.primery}}>Print</Text>
          </TouchableOpacity>
        </View>

{/* // Customer Card */}

      <View style={{width:responsiveWidth(90), height:responsiveHeight(10), backgroundColor:'white', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:10, elevation:3}}>
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(3), marginLeft:responsiveWidth(3)}}>Customer Report</Text>
        {/* <TouchableOpacity style={{alignItems:'center', justifyContent:"center", width:60, height:30, backgroundColor:Color.primery, borderRadius:5, marginRight:responsiveWidth(3)}}>
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>Add</Text>
        </TouchableOpacity> */}
      </View>
      
      {/* FlateList Working Here  */}

      <FlatList 
      data={custoemrData}
      contentContainerStyle={{paddingBottom:100}}
      renderItem={({item})=> 
      <View style={{width:responsiveWidth(90), height:responsiveHeight(20), backgroundColor:Color.white, elevation:5, borderRadius:10, alignSelf:'center',marginTop:10}}>
      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%'}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Date:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.created_at}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Invoice:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.invoice_code}</Text></Text>
      </View>

      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', bottom:responsiveHeight(2)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Discription:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.description}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Dabit:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.debit}</Text></Text>
      </View>
      
      <View style={{width:'90%', height:'35%', padding:responsiveWidth(5), bottom:responsiveHeight(4.5), paddingRight:responsiveWidth(1)}}>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between' ,flexDirection:'row',}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Cradit:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.credit}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Balance:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.total_balance}</Text></Text>
        </View>
        <View
                style={{
                  flexDirection: 'row',
                  height: responsiveWidth(9),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: responsiveHeight(1),
                  width: '120%',
                  marginLeft: responsiveWidth(10),
                  width: '80%',
                  justifyContent: 'space-around',
                }}>
                {/* <TouchableOpacity
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveHeight(3),
                    backgroundColor: Color.primery,
                    borderRadius: responsiveWidth(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  // onPress = {() => navigation.navigate('EditCustomer', item.uid )}
                  >
                  <Text
                    style={{
                      fontFamily: Font.Medium,
                      fontSize: responsiveFontSize(1.8),
                      color: Color.primery,
                      color: Color.white,
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity> */}
                {/* <TouchableOpacity
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveHeight(3),
                    backgroundColor: '#d11a2a',
                    borderRadius: responsiveWidth(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => deleteCustomer(item.uid)}
                  >
                  <Text
                    style={{
                      fontFamily: Font.Medium,
                      fontSize: responsiveFontSize(1.8),
                      color: Color.primery,
                      color: Color.white,
                    }}>
                    Delete
                  </Text>
                </TouchableOpacity> */}
              </View>
      </View>
    </View>
    }
      // keyExtractor={item => item.id}
      />



   





      {/* Footer Section */}
      <View style={{width:"100%", height:responsiveHeight(8), backgroundColor:'white', borderRadius:responsiveWidth(0), elevation:5, alignSelf:"center", alignItems:"center", justifyContent:"center", bottom:0, position:'absolute'}}>
        <Text style={{color:Color.primery, fontSize:responsiveFontSize(2), fontFamily:Font.Medium}}>© Mulum Account Panel</Text>
      </View>
    </View>
  )
}

export default CustomerLedger