import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import Font from '../components/Font'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Company = ({navigation}) => {
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




      {/* Footer Section */}
      <View style={{width:"100%", height:responsiveHeight(8), backgroundColor:'white', borderRadius:responsiveWidth(0), elevation:5, alignSelf:"center", alignItems:"center", justifyContent:"center", bottom:0, position:'absolute'}}>
        <Text style={{color:Color.primery, fontSize:responsiveFontSize(2), fontFamily:Font.Medium}}>© Mulum Account Panel</Text>
      </View>
    </View>
  )
}

export default Company