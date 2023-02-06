import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import axios from 'axios'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Company = ({navigation}) => {

  const [sold, setSold] = useState('')
  const [recieved, setRecieved] = useState('')
  const [images, setImages] = useState('')
  const [name, setname] = useState('')


  const fetchCompany = () => {
  
    var FormData = require('form-data');
    var data = new FormData();
    data.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );
    var config = {
      method: 'post',
      url: 'https://api.accounts.lighthousepakistan.online/fetch_companies.php',
      headers: {
         'Content-Type': 'multipart/form-data',                                                                                                                                                                                                               


      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log('response from data---',response.data.data.companies[0].name);
        // console.log(images);
        setSold(response.data.data.companies[0].total_receive_amount)
        setRecieved(response.data.data.companies[0].total_sold_amount)
        setImages(response.data.data.companies[0].image)
        setname(response.data.data.companies[0].name)
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchCompany()
  }, []);




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

      <View style={{width:responsiveWidth(90), height:responsiveHeight(50), backgroundColor:Color.white, alignSelf:'center', marginTop:responsiveHeight(20), borderRadius:responsiveWidth(3), elevation:5}}>
      <Image  style={{width:responsiveWidth(90), height:responsiveHeight(25), borderTopRightRadius:responsiveWidth(3), borderTopLeftRadius:responsiveWidth(3), alignSelf:'center'}} source={{
          uri: images,
        }} resizeMode={'contain'}/>
      <Text style={{fontFamily:Font.Medium, color:Color.primery, fontSize:responsiveFontSize(3.5), alignSelf:'center', marginTop:responsiveHeight(1)}}>{name}</Text>
      <View style={{alignItems:'center', marginTop:responsiveHeight(3)}}>
        <View style={{width:responsiveWidth(80), height:responsiveHeight(5), backgroundColor:'#f0bc74', borderRadius:responsiveWidth(2), marginBottom:responsiveHeight(3)}}>
          <Text style={{fontFamily:Font.Bold, fontSize:responsiveFontSize(1.6), marginTop:responsiveHeight(1.4), marginLeft:responsiveWidth(2), color:Color.primery}}>{`Sold Amount : ${sold}`}</Text>
        </View>
        <View style={{width:responsiveWidth(80), height:responsiveHeight(5), backgroundColor:'#f0bc74', borderRadius:responsiveWidth(2)}}>
        <Text style={{fontFamily:Font.Bold, fontSize:responsiveFontSize(1.6), marginTop:responsiveHeight(1.4), marginLeft:responsiveWidth(2), color:Color.primery}}>{`Recieved Amount : ${recieved}`}</Text>
        </View>
      </View>
      </View>


      {/* Footer Section */}
      <View style={{width:"100%", height:responsiveHeight(8), backgroundColor:'white', borderRadius:responsiveWidth(0), elevation:5, alignSelf:"center", alignItems:"center", justifyContent:"center", bottom:0, position:'absolute'}}>
        <Text style={{color:Color.primery, fontSize:responsiveFontSize(2), fontFamily:Font.Medium}}>© Mulum Account Panel</Text>
      </View>
    </View>
  )
}

export default Company