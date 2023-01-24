import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Color from '../components/Color'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Font from '../components/Font'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AdminDashboard = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:Color.gray}}>
      {/* Header  */}
      <View style={{width:'100%', height:responsiveHeight(8), alignItems:'center', justifyContent:"center", backgroundColor:'white', elevation:3}}>
        <View style={{width:"90%", alignSelf:"center", flexDirection:'row', alignItems:'center', justifyContent:"space-between"}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image style={{width:35, height:35, tintColor:Color.primery}} source={require('../assets/Images/sort.png')}/>
        </TouchableOpacity>
        <Image style={{width:35, height:35, borderRadius:responsiveWidth(10)}} source={require('../assets/Images/admin.jpeg')}/>
        </View>
      </View>
      {/* Cards  */}

        {/* Card 1 */}
      <View style={{backgroundColor:Color.white, width:responsiveWidth(95), height:responsiveHeight(10), elevation:3, alignSelf:"center", borderRadius:10, marginTop:responsiveHeight(5), flexDirection:'row'}}>
        <View style={{width:responsiveWidth(30), height:'100%', alignItems:'center', justifyContent:'center'}}>
            <View style={{width:'60%', height:'75%', backgroundColor:'#BBBEC2', alignItems:'center', justifyContent:'center', borderRadius:10}}>
              <Image style={{width:50, height:50, borderRadius:responsiveWidth(2), tintColor:Color.primery}} source={require('../assets/Images/user.png')}/>
            </View>
        </View>
        <View style={{width:responsiveWidth(65), height:'100%', justifyContent:'center'}}>
          <Text style={{fontSize:responsiveFontSize(2.5), marginLeft:responsiveWidth(5), fontFamily:Font.Medium, color:'#1F2937'}}>Customers</Text>
          <Text style={{fontSize:responsiveFontSize(3),marginLeft:responsiveWidth(5), fontFamily:'Roboto-Black', color:Color.primery}}>2</Text>
        </View>
      </View>
      <View style={{backgroundColor:Color.white, width:responsiveWidth(95), height:responsiveHeight(10), elevation:3, alignSelf:"center", borderRadius:10, marginTop:responsiveHeight(2), flexDirection:'row'}}>
        <View style={{width:responsiveWidth(30), height:'100%', alignItems:'center', justifyContent:'center'}}>
            <View style={{width:'60%', height:'75%', backgroundColor:'#FAEBD6', alignItems:'center', justifyContent:'center', borderRadius:10}}>
              <Image style={{width:50, height:50, borderRadius:responsiveWidth(2), tintColor:'#F0BD74'}} source={require('../assets/Images/product.png')}/>
            </View>
        </View>
        <View style={{width:responsiveWidth(65), height:'100%', justifyContent:'center'}}>
          <Text style={{fontSize:responsiveFontSize(2.5), marginLeft:responsiveWidth(5), fontFamily:Font.Medium, color:'#1F2937'}}>Product</Text>
          <Text style={{fontSize:responsiveFontSize(3),marginLeft:responsiveWidth(5), fontFamily:'Roboto-Black', color:Color.primery}}>2</Text>
        </View>
      </View>
      <View style={{backgroundColor:Color.white, width:responsiveWidth(95), height:responsiveHeight(10), elevation:3, alignSelf:"center", borderRadius:10, marginTop:responsiveHeight(5), flexDirection:'row'}}>
        <View style={{width:responsiveWidth(30), height:'100%', alignItems:'center', justifyContent:'center'}}>
            <View style={{width:'60%', height:'75%', backgroundColor:'#C1C0D2', alignItems:'center', justifyContent:'center', borderRadius:10}}>
              <Image style={{width:50, height:50, borderRadius:responsiveWidth(2), tintColor:'#31316A'}} source={require('../assets/Images/company.png')}/>
            </View>
        </View>
        <View style={{width:responsiveWidth(65), height:'100%', justifyContent:'center'}}>
          <Text style={{fontSize:responsiveFontSize(2.5), marginLeft:responsiveWidth(5), fontFamily:Font.Medium, color:'#1F2937'}}>Company</Text>
          <Text style={{fontSize:responsiveFontSize(3),marginLeft:responsiveWidth(5), fontFamily:'Roboto-Black', color:Color.primery}}>Green Foods</Text>
        </View>
      </View>

      {/* Chart Section */}
      <View style={{width:'100%', height:responsiveHeight(33), marginBottom:responsiveHeight(13), marginTop:responsiveHeight(3), alignItems:'center', justifyContent:'center'}}>
      <View>
  <LineChart
    data={{
      labels: ["Page A", "Page B", "Page C", "Page D", "Page E", "Page F"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={responsiveWidth(95)} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#ebeded",
      backgroundGradientTo: "#BABBC3",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 2
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 10,
      elevation:2
    }}
  />
</View>
      </View>

      {/* Footer Section */}
      <View style={{width:"100%", height:responsiveHeight(8), backgroundColor:'white', borderRadius:responsiveWidth(0), elevation:5, alignSelf:"center", alignItems:"center", justifyContent:"center", bottom:0, position:'absolute'}}>
        <Text style={{color:Color.primery, fontSize:responsiveFontSize(2), fontFamily:Font.Medium}}>© Mulum Account Panel</Text>
      </View>
    </View>
  )
}

export default AdminDashboard