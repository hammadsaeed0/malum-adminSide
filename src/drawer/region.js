import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Ragion = ({navigation}) => {
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
        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(3), marginLeft:responsiveWidth(3)}}>Region</Text>
        <TouchableOpacity style={{alignItems:'center', justifyContent:"center", width:60, height:30, backgroundColor:Color.primery, borderRadius:5, marginRight:responsiveWidth(3)}}>
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>Add</Text>
        </TouchableOpacity>
      </View>
      
      {/* FlateList Working Here  */}

      <FlatList 
      data={data}
      contentContainerStyle={{paddingBottom:100}}
      renderItem={({item})=> 
      <View style={{width:responsiveWidth(90), height:responsiveHeight(20), backgroundColor:Color.white, elevation:5, borderRadius:10, alignSelf:'center',marginTop:10}}>
      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%'}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Name:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> Hammad</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>City:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> Sargodha</Text></Text>
      </View>

      <View style={{width:'90%', height:'36%', alignItems:'center', justifyContent:'space-between' ,flexDirection:'row', padding:responsiveWidth(0), alignSelf:'center', paddingRight:'5%', bottom:responsiveHeight(2)}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Name:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.name}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>City:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.city}</Text></Text>
      </View>
      
      <View style={{width:'90%', height:'35%', padding:responsiveWidth(5), bottom:responsiveHeight(4.5), paddingRight:responsiveWidth(1)}}>
        <View style={{flexDirection:'row',alignItems:'center', justifyContent:'space-between' ,flexDirection:'row',}}>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2),}}>Invoice:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.invoice}</Text></Text>
        <Text style={{fontFamily:Font.Regular, color:'#6B7280', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(0)}}>Wallet:<Text style={{fontFamily:Font.Bold, color:'#6B7280'}}> {item.wallet}</Text></Text>
        </View>
        <View style={{flexDirection:'row', height:responsiveWidth(9), alignItems:'center', justifyContent:'flex-end', marginTop:responsiveHeight(1), width:"120%", alignSelf:'center'}}>
        <Icon name="edit" size={20} color={Color.primery} style={{marginRight:responsiveWidth(5)}}/>
        <Icon1 name="delete" size={20} color="#ED718D" />
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