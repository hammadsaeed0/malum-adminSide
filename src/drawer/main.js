import { View, Text, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import React, { useState } from 'react'
import CustomDrawer from './customDrawer';
import Company from './company';
import Dashboard from './dashboard';
import Customer from './customer';
import CustomLedger from './customerLedger';
import Ledgers from './ledgers';
import Product from './products';
import Region from './region';
import AdminDashborad from './adminDashborad';
import Bill from './bill';
import DirectPayment from './directPayment';
import CustomerPayment from './customerPayment';
import MajorDiscount from './majorDiscount';
import POS from './pos'
import Icon from 'react-native-vector-icons/dist/Fontisto';
import Icon1 from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import Icon3 from 'react-native-vector-icons/dist/Foundation';
import Icon4 from 'react-native-vector-icons/dist/Ionicons';
import Icon5 from 'react-native-vector-icons/dist/FontAwesome';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import Font from '../components/Font';



const main = () => {
  // const [mode, setMode] = useState("admin")
  // if (mode === "seller") {
  //   return (
    
  //     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
  //       headerShown: false,
  //       drawerActiveTintColor:'white',
  //       drawerActiveBackgroundColor:'#808080',
  //       drawerInactiveTintColor:'white',
  //       drawerStyle: {
  //         width: '80%',
  //       },
  //       drawerLabelStyle: { marginLeft: responsiveWidth(-5), fontSize:responsiveFontSize(2), fontFamily: Font.Medium }
  
  //     }}>
  //       <Drawer.Screen name="Dashboard" component={Dashboard} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon name="pie-chart-1" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Company" component={Company} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon1 name="factory" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Customer" component={Customer}
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon2 name="users" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Customer Ledger" component={CustomLedger} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon4 name="cellular-outline" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Ledgers" component={Ledgers} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon5 name="bar-chart" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Product" component={Product} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon3 name="shopping-cart" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Region" component={Region} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon2 name="home" size={20} color={color} />
  //           )
  //       }}
  //       />
  //     </Drawer.Navigator>
    
  //   )
  // }else{
  //   return (
    
  //     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
  //       headerShown: false,
  //       drawerActiveTintColor:'white',
  //       drawerActiveBackgroundColor:'#808080',
  //       drawerInactiveTintColor:'white',
  //       drawerStyle: {
  //         width: '80%',
  //       },
  //       drawerLabelStyle: { marginLeft: responsiveWidth(-5), fontSize:responsiveFontSize(2), fontFamily: Font.Medium }
  
  //     }}>
  //       <Drawer.Screen name="AdminDashborad" component={AdminDashborad} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon name="player-settings" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="Bill" component={Bill} 
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon name="player-settings" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="POS" component={POS}
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon name="player-settings" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="DirectPayment" component={DirectPayment}
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon2 name="credit-card" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="CustomerPayment" component={CustomerPayment}
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon2 name="credit-card" size={20} color={color} />
  //           )
  //       }}
  //       />
  //       <Drawer.Screen name="MajorDiscount" component={MajorDiscount}
  //       options={{
  //         drawerIcon: ({color})=>(
  //           <Icon2 name="credit-card" size={20} color={color} />
  //           )
  //       }}
  //       />
  //     </Drawer.Navigator>
    
  //   )
  // }
  return (
    
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
      headerShown: false,
      drawerActiveTintColor:'white',
      drawerActiveBackgroundColor:'#808080',
      drawerInactiveTintColor:'white',
      drawerStyle: {
        width: '80%',
      },
      drawerLabelStyle: { marginLeft: responsiveWidth(-5), fontSize:responsiveFontSize(2), fontFamily: Font.Medium }

    }}>
      <Drawer.Screen name="Dashboard" component={Dashboard} 
      options={{
        drawerIcon: ({color})=>(
          <Icon name="pie-chart-1" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Company" component={Company} 
      options={{
        drawerIcon: ({color})=>(
          <Icon1 name="factory" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Customer" component={Customer}
      options={{
        drawerIcon: ({color})=>(
          <Icon2 name="users" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Customer Ledger" component={CustomLedger} 
      options={{
        drawerIcon: ({color})=>(
          <Icon4 name="cellular-outline" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Ledgers" component={Ledgers} 
      options={{
        drawerIcon: ({color})=>(
          <Icon5 name="bar-chart" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Product" component={Product} 
      options={{
        drawerIcon: ({color})=>(
          <Icon3 name="shopping-cart" size={20} color={color} />
          )
      }}
      />
      <Drawer.Screen name="Region" component={Region} 
      options={{
        drawerIcon: ({color})=>(
          <Icon2 name="home" size={20} color={color} />
          )
      }}
      />
    </Drawer.Navigator>
  
  )
  
}

export default main