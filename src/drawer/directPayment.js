import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React,{useEffect, useState}  from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useFocusEffect } from '@react-navigation/native';


const DirectPayment = ({navigation}) => {

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
const [payment , setPayment] = useState([])
  const fetchDirectPayment = () =>{
    var formdata = new FormData();
    formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.accounts.lighthousepakistan.online/fetch_direct_payments.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        console.log(data.data.direct_payments);
        setPayment(data.data.direct_payments)
      })
      .catch(error => console.log('error', error));
  }

  // useFocusEffect(() => {
  //   fetchDirectPayment()
  // }, [])
  
  useFocusEffect(
    React.useCallback(() => {
      fetchDirectPayment();
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


{/* // Customer Card */}

      <View style={{width:responsiveWidth(90), height:responsiveHeight(10), backgroundColor:'white', alignSelf:'center', flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:10, elevation:3}}>
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(3), marginLeft:responsiveWidth(3)}}>Direct Payment</Text>
        <TouchableOpacity style={{alignItems:'center', justifyContent:"center", width:60, height:30, backgroundColor:Color.primery, borderRadius:5, marginRight:responsiveWidth(3)}} onPress={()=> navigation.navigate('AddDirectPayment')}>
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>Add</Text>
        </TouchableOpacity>
      </View>
      
      {/* FlateList Working Here  */}

      <FlatList 
      data={payment}
      contentContainerStyle={{paddingBottom:100}}
      renderItem={({item})=> 
      <View style={{width:responsiveWidth(90), height:responsiveHeight(15), backgroundColor:Color.white, elevation:5, borderRadius:10, alignSelf:'center',justifyContent:'center',marginTop:10}}>
      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%'}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Name:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.customer_name}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Method:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.method}</Text></Text>
      </View>

      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', bottom:responsiveHeight(0)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Company:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.company_name}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Amount:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.amount}</Text></Text>
      </View>

      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', bottom:responsiveHeight(0)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Discription:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.description}</Text></Text>
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

export default DirectPayment