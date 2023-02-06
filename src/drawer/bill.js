import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React, {useEffect , useState} from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Bill = ({navigation}) => {

  const [bill , setBill] = useState([])
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

// console.log("Hi --------->",bill);
const getBill = () => {
      var formdata = new FormData();
formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.accounts.lighthousepakistan.online/fetch_sale.php", requestOptions)
  .then(response => response.text())
  .then(result => {
        const data = JSON.parse(result)
        setBill(data.data.sale)
      })
  .catch(error => console.log('error', error));
}

  useEffect(() => {
    getBill()
  }, [])
  
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
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(3), marginLeft:responsiveWidth(3)}}>Previeus Bill</Text>
      </View>
      
      {/* FlateList Working Here  */}

      <FlatList 
      data={bill}
      contentContainerStyle={{paddingBottom:100}}
      renderItem={({item})=> 
      <View style={{width:responsiveWidth(90), height:responsiveHeight(20), backgroundColor:Color.white, elevation:5, borderRadius:10, alignSelf:'center',marginTop:10}}>
      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%'}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Name:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.customer_name}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Invoice:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.id}</Text></Text>
      </View>

      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', bottom:responsiveHeight(2)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Freight:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.expense}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Discount:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.minor_discount}</Text></Text>
      </View>
      
      <View style={{width:'90%', height:'45%', padding:responsiveWidth(5), bottom:responsiveHeight(4.5), paddingRight:responsiveWidth(1)}}>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between' ,flexDirection:'row',}}>
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(2),}}>Bill:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.total_bill}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Date:<Text style={{fontFamily:Font.Bold, color:Color.primery}}> {item.created_at}</Text></Text>
        </View>
        <TouchableOpacity style={{flexDirection:'row', height:responsiveWidth(7), alignItems:'center', justifyContent:'center', marginTop:responsiveHeight(1), width:"80%", borderRadius:responsiveWidth(2) ,alignSelf:'center', backgroundColor:Color.primery}} onPress={() => navigation.navigate('ViewBill')}>
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>View</Text>
        </TouchableOpacity>
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

export default Bill