import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Ragion = ({navigation}) => {
  const [region , setRegion] = useState([])
  const [oldRegion , setOldRegion] = useState([])
  const getAllRegion = () => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );
    var config = {
      method: 'post',
      url: 'https://api.accounts.lighthousepakistan.online/fetch_regions.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log('response from data---',response.data.data.regions);
        setRegion(response.data.data.regions);
        setOldRegion(response.data.data.regions)
        // setOldCustomer(response.data.data.customers)
        // setCustomerUid(response.data.data.customer)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const searchFilter = (text) =>{
    if (text == '') {
      setRegion(oldRegion)
    }
    else{
      const tempData = region.filter((item) => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) >-1;
      })
      setRegion(tempData)
    }

        
  }

  const deleteRegion = id => {
    var FormData = require('form-data');
    var data = new FormData();
    data.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );
    data.append('region_uid', id);

    var config = {
      method: 'post',
      url: 'https://api.accounts.lighthousepakistan.online/delete_region.php',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        getAllRegion();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllRegion();
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
        onChangeText={products => {setRegion(products), searchFilter(products)}}
      />


{/* // Customer Card */}

      <View style={{width:responsiveWidth(90), height:responsiveHeight(10), backgroundColor:'white', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:10, elevation:3}}>
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(3), marginLeft:responsiveWidth(3)}}>Region</Text>
        <TouchableOpacity style={{alignItems:'center', justifyContent:"center", width:60, height:30, backgroundColor:Color.primery, borderRadius:5, marginRight:responsiveWidth(3)}}
          onPress={() => navigation.navigate('AddRegion')}
        >
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>Add</Text>
        </TouchableOpacity>
      </View>
      
      {/* FlateList Working Here  */}

      <FlatList 
      data={region}
      contentContainerStyle={{paddingBottom:100}}
      renderItem={({item})=> 
      <View style={{width:responsiveWidth(90), height:responsiveHeight(15), backgroundColor:Color.white, elevation:5, borderRadius:10, alignSelf:'center',marginTop:10}}>
      <View style={{width:'90%', height:'35%', justifyContent:'space-between' , padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', marginTop:responsiveHeight(2), marginBottom:responsiveHeight(3)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2)}}>REGION:<Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2)}}>{item.name}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>CREATED AT:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.created_at}</Text></Text>
      </View>

      
      <View style={{width:'90%', height:'35%', padding:responsiveWidth(5), bottom:responsiveHeight(4.5), paddingRight:responsiveWidth(1)}}>
        <View
                style={{
                  flexDirection: 'row',
                  height: responsiveWidth(9),
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginTop: responsiveHeight(1),
                  width: '120%',
                  marginLeft: responsiveWidth(45),
                  width: '60%',
                  alignSelf:'center',
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveHeight(3),
                    backgroundColor: Color.primery,
                    borderRadius: responsiveWidth(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress = {() => navigation.navigate('EditRegion', {data:item.uid} )}
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
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: responsiveWidth(20),
                    height: responsiveHeight(3),
                    backgroundColor: '#d11a2a',
                    borderRadius: responsiveWidth(2),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => deleteRegion(item.uid)}
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
                </TouchableOpacity>
              </View>
      </View>
    </View>
    }
      keyExtractor={item => item.id}
      />



   





      {/* Footer Section */}
      <View style={{width:"100%", height:responsiveHeight(8), backgroundColor:'white', borderRadius:responsiveWidth(0), elevation:5, alignSelf:"center", alignItems:"center", justifyContent:"center", bottom:0, position:'absolute'}}>
        <Text style={{color:Color.primery, fontSize:responsiveFontSize(2), fontFamily:Font.Medium}}>© Mulum Account Panel</Text>
      </View>
    </View>
  )
}

export default Ragion