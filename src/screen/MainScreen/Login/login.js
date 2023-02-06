import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import Color from '../../../components/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import Font from '../../../components/Font'
import { RadioButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import store from '../../../Redux/store'
import Actions from '../../../Redux/Actions'



const Login = ({ navigation}) => {
  const status = useSelector((state) => state.counterReducer.num)
  const despatch = useDispatch()
  const [checked, setChecked] = React.useState('admin');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const validation = () => {
    if(email == 'admin' && password == 'admin' && checked == 'admin'){
      let Rstatus = checked
      despatch(Actions.increment(Rstatus))
     return navigation.navigate('home')

    }else if (email == 'seller' && password == 'seller' && checked == 'seller'){
      let Rstatus = checked
      despatch(Actions.decrement(Rstatus))
     return navigation.navigate('home')

    }else{
      return createTwoButtonAlert()
    }
  }

  const createTwoButtonAlert = () =>
    Alert.alert('Opps', 'Invalid User', [
      {
        text: 'Invalid User',
        style: 'cancel',
      },
      {text: 'OK'},
    ]);
  



  return (
    <ScrollView contentContainerStyle={{flex:1, backgroundColor:Color.gray}}>

      <View style={{width:responsiveWidth(95), height:responsiveHeight(48), backgroundColor:Color.white, borderRadius:responsiveWidth(2), elevation:5, alignSelf:'center', marginTop:responsiveHeight(10)}}>
        <Text style={{alignSelf:'center', fontSize:responsiveFontSize(3.5), color:'black', 
        fontFamily:Font.Medium, marginTop:responsiveHeight(3), }}>Dashboard Login</Text>

        {/* Input 1 */}
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(2)}}>
          <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Medium}}>Your Email</Text>
          <View style={{width:responsiveWidth(85), height:responsiveHeight(6), flexDirection:'row', borderRadius:responsiveWidth(2.5), borderWidth:1, borderColor:'#D1D5DB', backgroundColor:Color.white, elevation:2}}>
                <View style={{width:responsiveWidth(15), height:responsiveHeight(5.9) ,alignItems:'center', justifyContent:'center', borderColor:'#D1D5DB',borderBottomWidth:0,borderTopWidth:0, borderRightWidth:1}}>
                  <Image source={require('../../../assets/Images/email.png')} style={{width:30, height:30, tintColor:Color.primery}}/>
                </View>
                <View style={{width:responsiveWidth(70), height:responsiveHeight(5.9), alignItems:'center', justifyContent:"center"}}>
                      <TextInput
                      placeholder='Username'
                      placeholderTextColor={"#AEB2B8"}
                        style={{
                          height: responsiveHeight(7),
                          width:responsiveWidth(70),
                          margin: 12,
                          padding: 10,
                          color:Color.primery,
                          fontSize:responsiveFontSize(2)
                        }}
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                      />
                </View>
          </View>
          {/* {
            bademail === true && (
              <Text style={{color:'red', fontFamily:Font.Medium, marginLeft:responsiveWidth(2), marginTop:responsiveHeight(0.2)}}>Please Enter Email Id</Text>
            )
          } */}
        </View>
        {/* Input 2 */}
        <View style={{width:responsiveWidth(85), height:responsiveHeight(13),alignSelf:'center', marginTop:responsiveHeight(-0.5)}}>
        <Text style={{fontSize:responsiveFontSize(2), marginBottom:responsiveHeight(1) ,color:'black', fontWeight:'bold', fontFamily:Font.Medium}}>Your Email</Text>
          <View style={{width:responsiveWidth(85), height:responsiveHeight(6), flexDirection:'row', borderRadius:responsiveWidth(2.5), borderWidth:1, borderColor:'#D1D5DB', backgroundColor:Color.white, elevation:2}}>
                <View style={{width:responsiveWidth(15), height:responsiveHeight(5.9) ,alignItems:'center', justifyContent:'center', borderColor:'#D1D5DB',borderBottomWidth:0,borderTopWidth:0, borderRightWidth:1}}>
                  <Image source={require('../../../assets/Images/padlock.png')} style={{width:30, height:30, tintColor:Color.primery}}/>
                </View>
                <View style={{width:responsiveWidth(70), height:responsiveHeight(5.9), alignItems:'center', justifyContent:"center"}}>
                      <TextInput
                      secureTextEntry={true}
                      placeholder='Password'
                      placeholderTextColor={"#AEB2B8"}
                        style={{
                          height: responsiveHeight(7),
                          width:responsiveWidth(70),
                          margin: 12,
                          padding: 10,
                          color:Color.primery,
                          fontSize:responsiveFontSize(2)
                        }}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                      />
                </View>
          </View>
          {/* {
              badpassword === true && (
              <Text style={{color:'red', fontFamily:Font.Medium, marginLeft:responsiveWidth(2), marginTop:responsiveHeight(0.2)}}>Please Enter Password </Text>
            )
          } */}
        </View>

        <View style={{flexDirection:'row', alignSelf:'center', width:responsiveWidth(60), justifyContent:"space-around"}}>
          <View style={{flexDirection:'row'}}>
          <RadioButton
          color='#161D27'
          value="admin"
          status={ checked === 'admin' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('admin')}
          />
           <Text style={{fontFamily:Font.Medium, color:Color.primery, marginTop:responsiveHeight(0.9)}}>Admin</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <RadioButton
          color='#161D27'
          value="seller"
          status={ checked === 'seller' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('seller')}
          />
            <Text style={{fontFamily:Font.Medium, color:Color.primery, marginTop:responsiveHeight(0.9)}}>Seller</Text>
          </View>
        </View>


        <TouchableOpacity style={{width:responsiveWidth(85), height:responsiveHeight(6), backgroundColor:Color.primery, alignSelf:'center', borderRadius:responsiveWidth(2), marginTop:responsiveHeight(1), alignItems:'center', justifyContent:'center'}} onPress={()=> validation()}>
                        <Text style={{color:Color.white, fontSize:responsiveFontSize(2.3), fontFamily:Font.Regular}}>Sign In</Text>
        </TouchableOpacity>




      </View>
    </ScrollView>
  )
}

export default Login