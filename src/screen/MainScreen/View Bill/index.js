import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Color from '../../../components/Color';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Font from '../../../components/Font';



const ViewBill = ({navigation, route}) => {
  const id = route.params.item;
  const [sale,setSale]=useState({});
  const [bill,setBill]=useState({});
const [billList,setBillList]=useState([]);
  // console.log('sale data------', sale);
  // console.log('bill data------', bill);
  // console.log('data-----', route.params.item);
  useEffect(() => {
    const params = new FormData();
    params.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );
    params.append('sale_uid', id);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    axios
      .post(
        'https://api.accounts.lighthousepakistan.online/fetch_bill_transcript.php',
        params,
        config,
      )
      .then(res => {
        // console.log('response from sale API--------', res.data.data.bill_transcript.sale_products);
        setBillList(res.data.data.bill_transcript.sale_products);
        setBill(res.data.data.bill_transcript.sale_products[0]);
        setSale(res.data.data.bill_transcript.sale[0]);
      });
  }, []);



  return (
    <View style={{flex:1 , backgroundColor:Color.white}}>

        <View style={{width:responsiveWidth(90), height:responsiveHeight(15), alignItems:'center', justifyContent:'space-between', flexDirection:"row", alignSelf:'center'}}>
          <Image style={{width:100, height:100, borderRadius:100}} source={require('../../../assets/Images/logo.jpeg')}/>
          <Image style={{width:100, height:100, borderRadius:100}} source={require('../../../assets/Images/logo2.jpeg')}/>
        </View>

        <View style={{flexDirection:'row'}}>

        <View>
        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(6)}}>Shop no 112, Azam Market</Text>
        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(6)}}>0300-1029329</Text>
        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(6)}}>Customer Name: {sale.customer_name}</Text>
        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(6)}}>Customer City: {sale.city}</Text>
        </View>
        <View>
        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(10)}}>Date</Text>

        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(10)}}>{Date.now()}</Text>

        <Text style={{fontFamily:Font.Bold, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(10)}}>Invoice</Text>

        <Text style={{fontFamily:Font.Regular, color:Color.primery, fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(10)}}>{sale.id}</Text>
        </View>
        </View>

        <View style={{width:responsiveWidth(100), alignSelf:"center" ,height:responsiveHeight(50), marginTop:responsiveHeight(5)}}>
                  <View style={{width:responsiveWidth(90), height:responsiveHeight(4), backgroundColor:'#414143', flexDirection:'row'}}>

                  <View style={{width:responsiveWidth(13), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'white'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>S.NO</Text>
                  </View>
                  <View style={{width:responsiveWidth(25), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'white'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>ITEM</Text>
                  </View>
                  <View style={{width:responsiveWidth(15), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'white'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>UNIT</Text>
                  </View>
                  <View style={{width:responsiveWidth(18), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'white'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>QUANTITY</Text>
                  </View>
                  <View style={{width:responsiveWidth(13), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'white'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>PRICE</Text>
                  </View>
                  <View style={{width:responsiveWidth(18), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', backgroundColor:'#414143'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3)}}>AMOUNT</Text>
                  </View>

                  </View>
                  <FlatList
                    data={billList}
                    // showsHorizontalScrollIndicator = {false}
                    showsVerticalScrollIndicator = {false}
                    renderItem={({item , index}) => {
                      return (
                        <View style={{width:responsiveWidth(90), height:responsiveHeight(4), flexDirection:'row', marginTop:responsiveHeight(0.3)}}>

                  <View style={{width:responsiveWidth(13), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{index}</Text>
                  </View>
                  <View style={{width:responsiveWidth(25), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{item.product_name}</Text>
                  </View>
                  <View style={{width:responsiveWidth(15), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{item.unit}</Text>
                  </View>
                  <View style={{width:responsiveWidth(18), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{item.quantity}</Text>
                  </View>
                  <View style={{width:responsiveWidth(13), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{item.sale_price}</Text>
                  </View>
                  <View style={{width:responsiveWidth(18), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{item.bill}</Text>
                  </View>

                  </View>
                      )
                    }}
                  />

                  <View style={{width:responsiveWidth(90), height:responsiveHeight(4), flexDirection:'row', marginTop:responsiveHeight(0)}}>
                  <View style={{width:responsiveWidth(71), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray', borderTopColor:'gray', borderTopWidth:1}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>Total Quantity</Text>
                  </View>
                  <View style={{width:responsiveWidth(40), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderTopColor:'gray', borderTopWidth:1}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{bill.quantity}</Text>
                  </View>
                  </View>

                  <View style={{width:responsiveWidth(90), height:responsiveHeight(20), flexDirection:'row', marginTop:responsiveHeight(0)}}>
                  <View style={{width:responsiveWidth(71), height:responsiveHeight(20), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray', borderTopColor:'gray', borderTopWidth:1, justifyContent:'space-around'}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>Total Bill Payment</Text>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>Freight</Text>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>Discount: {sale.minor_discount}%</Text>
                  </View>
                  <View style={{width:responsiveWidth(40), height:responsiveHeight(20), alignSelf:'center', alignItems:'center', justifyContent:'center', borderTopColor:'gray', borderTopWidth:1, justifyContent:"space-around"}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{sale.total_bill}</Text>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{sale.expense}</Text>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>{sale.minor_discount}</Text>
                  </View>
                  </View>

                  <View style={{width:responsiveWidth(90), height:responsiveHeight(4), flexDirection:'row', marginTop:responsiveHeight(0)}}>
                  <View style={{width:responsiveWidth(71), height:responsiveHeight(4), alignSelf:'center',  alignItems:'center', justifyContent:'center', borderRightWidth:1, borderRightColor:'gray', borderTopColor:'gray', borderTopWidth:1, borderBottomColor:'gray', borderBottomWidth:1}}>
                  <Text style={{color:Color.white, fontFamily:Font.Medium, fontSize:responsiveFontSize(1.3), color:Color.primery}}>Grand Total:</Text>
                  </View>
                  <View style={{width:responsiveWidth(40), height:responsiveHeight(4), alignSelf:'center', alignItems:'center', justifyContent:'center', borderTopColor:'gray', borderTopWidth:1, borderBottomColor:'gray', borderBottomWidth:1}}>
                  <Text style={{fontFamily:Font.Medium, fontSize:responsiveFontSize(1.5), color:'red'}}>{sale.total_bill}</Text>
                  </View>
                  </View>
        </View>


        <View style={{marginTop:responsiveHeight(5)}}>
        <Text style={{fontFamily:Font.Bold, color:'#8C8C8C', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(8)}}>Software By: LightHouse Development</Text>
        <Text style={{fontFamily:Font.Bold, color:'#8C8C8C', fontSize:responsiveFontSize(2), marginLeft:responsiveWidth(8)}}>+92-300-7972196</Text>
        <TouchableOpacity style={{width:responsiveWidth(20), borderRadius:5 ,height:responsiveHeight(4), backgroundColor:Color.primery, marginLeft:responsiveWidth(8), marginTop:5, alignItems:'center', justifyContent:'center'}}
        onPress={() => navigation.goBack()}
        >
          <Text style={{color:Color.white, fontFamily:Font.Medium}}>Back</Text>
        </TouchableOpacity>
        
        </View>
    </View>
  );
};

export default ViewBill;
