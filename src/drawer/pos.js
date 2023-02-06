import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import React, {useState , useEffect} from 'react';
import Color from '../components/Color';
import Font from '../components/Font';
import Modal from 'react-native-modal';
import {SelectList} from 'react-native-dropdown-select-list';
import {useFocusEffect} from '@react-navigation/native';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import axios from 'axios';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '123',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '123',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '123',
  },
];

const Pos = ({navigation}) => {
  const [region, setRegion] = useState([]);
  const [oldRegion, setOldRegion] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [customer, setCustomer] = useState('');
  const [selected, setSelected] = useState('');
  const [selectedId, setSelectedId] = useState();
  const [totalPrice, setTotalPrice] = useState('');
  const [expense, setExpense] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [allprod, setAllProd] = useState([]);
  const [finalPrice, setFinalPrice] = useState('');

  // console.log("All Products =======",customer);
  const data = [
    {key: '1', value: 'Bundle'},
    {key: '2', value: 'Carton'},
  ];

  const removeItem = item => {
    let data = allprod.slice(0);
    const index = data.indexOf(item);
    if (index > -1) {
      // only splice array when item is found
      data.splice(index, 1); // 2nd parameter means remove one item only
    }

    // array = [2, 9]
    // console.log('new array-------',allprod?.length);
    setAllProd(data);
  };

  const getAllRegion = () => {
    var formdata = new FormData();
    formdata.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://api.accounts.lighthousepakistan.online/fetch_products.php',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        setRegion(data.data.products);
      })
      .catch(error => console.log('error', error));
  };
  
  const searchFilter = text => {
    if (text == '') {
      setRegion(oldRegion);
    } else {
      const tempData = region.filter(item => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setRegion(tempData);
    }
  };

  const fetchCustomer = () => {
    var formdata = new FormData();
    formdata.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://api.accounts.lighthousepakistan.online/fetch_customers.php',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        // console.log('data from customers------', data.data.customers);
        setCustomer(data.data.customers);
        // data.data.customers.map(a => {
        //   setCustomer(a.name);
        // });
        // console.log(customer);
      })
      .catch(error => console.log('error', error));
  };

  const FinalPrice = () => {
    console.log(
      'total Price-------',
      allprod.reduce(
        (total, currentValue) => (total = total + currentValue.total_bill),
        0,
      ),
    );
    setFinalPrice(
      allprod.reduce(
        (total, currentValue) => (total = total + currentValue.total_bill),
        0,
      ) -
        expense -
        (allprod.reduce(
          (total, currentValue) => (total = total + currentValue.total_bill),
          0,
        ) *
          discount) /
          100,
    );
  };

  const viewCart = () => {
    if (selected === '') {
      return Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Select A Customer',
        button: 'close',
      });
      // setModalVisible(false)
    }
    setModalVisible(!isModalVisible);
  };

  // useEffect(() => {
  //   getAllRegion()
  //   fetchCustomer()
  // }, [])
  
  useFocusEffect(
    React.useCallback(() => {
      getAllRegion();
      fetchCustomer();
    }, []),
  );

  const submit = async e => {
    const purchaseBill = allprod.reduce(
      (total, currentValue) => (total = total + currentValue.purchase_bill),
      0,
    );

    const customerID = customer.filter(i => {
      return i.name === selected;
    });

    const purchaseBillExp = purchaseBill - expense;

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDateTime = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

    const param = new FormData();

    const totalBill = allprod.reduce(
      (total, currentValue) => (total = total + currentValue.total_bill),
      0,
    );
    const totalBillExp = totalBill - expense;
    param.append(
      '__api_key__',
      'hi,-its-eevee. I can do wonderful things in api creation.',
    );
    param.append('sale_date', currentDateTime);
    param.append('customer_uid', customerID[0].uid);
    param.append('purchase_bill', purchaseBillExp);
    param.append('total_bill', totalBillExp - (totalBill * discount) / 100);
    param.append(
      'profit',
      totalBillExp - (totalBill * discount) / 100 - purchaseBillExp,
    );
    param.append('expense', expense);
    param.append('minor_discount', discount);
    console.log('formdata-----', param);
    // console.log('customer id-----', customerID);
    const configu = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    await axios
      .post(
        'https://api.accounts.lighthousepakistan.online/add_sale.php',
        param,
        configu,
      )
      .then(res => {
        if (res.data.state === 'OK') {
          const sale_uid = res.data.data.sale.uid;
          const para = new FormData();
          allprod.map(i => {
            para.append(
              '__api_key__',
              'hi,-its-eevee. I can do wonderful things in api creation.',
            );
            para.append('sale_uid', sale_uid);
            para.append('customer_uid', customerID[0].uid);
            para.append('product_uid', i.uid);
            para.append('unit', i.unit);
            para.append('profit', i.profit);
            para.append('quantity', i.quantity);
            para.append('bill', i.total_bill);
            para.append('purchase_bill', i.purchase_bill);

            const config = {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            };
            axios
              .post(
                'https://api.accounts.lighthousepakistan.online/add_sale_product.php',
                para,
                config,
              )
              .then(res => {
                if (res.data.state === 'OK') {
                  setModalVisible(false);
                  setQuantity([]);
                  setExpense('');
                  setDiscount('');
                  navigation.navigate('ViewBill', {item: sale_uid});
                }
              });
          });
        }
      });
  };

  return (
    <AlertNotificationRoot>
      <View style={{flex: 1, backgroundColor: Color.gray}}>
        {/* Header  */}
        <View
          style={{
            width: '100%',
            height: responsiveHeight(8),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            elevation: 5,
          }}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 35, height: 35, tintColor: Color.primery}}
                source={require('../assets/Images/sort.png')}
              />
            </TouchableOpacity>
            <Image
              style={{width: 35, height: 35, borderRadius: responsiveWidth(10)}}
              source={require('../assets/Images/admin.jpeg')}
            />
          </View>
        </View>

        <TextInput
          placeholder="Search"
          placeholderTextColor={Color.primery}
          style={{
            height: responsiveHeight(5),
            margin: responsiveWidth(8),
            borderWidth: 1,
            paddingLeft: responsiveWidth(6),
            borderRadius: 10,
            width: '90%',
            alignSelf: 'center',
            color: Color.primery,
            borderColor: '#cfcfd1',
            backgroundColor: 'white',
            fontFamily: Font.Regular,
          }}
          onChangeText={products => {
            setRegion(products), searchFilter(products);
          }}
        />

        {/* // Customer Card */}

        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(10),
            backgroundColor: 'white',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 3,
          }}>
          <Text
            style={{
              fontFamily: Font.Regular,
              color: Color.primery,
              fontSize: responsiveFontSize(3),
              marginLeft: responsiveWidth(3),
            }}>
            Sale Point
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: responsiveWidth(20),
              height: 30,
              backgroundColor: Color.primery,
              borderRadius: 5,
              marginRight: responsiveWidth(3),
            }}
            onPress={() => viewCart()}>
            <Modal isVisible={isModalVisible}>
              <View
                style={{
                  backgroundColor: Color.white,
                  width: responsiveWidth(95),
                  height: responsiveHeight(70),
                  alignSelf: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: Color.primery,
                    fontSize: responsiveFontSize(3.5),
                    marginLeft: responsiveWidth(5),
                    marginTop: responsiveHeight(2),
                  }}>
                  Your Cart
                </Text>
                <View
                  style={{
                    width: responsiveWidth(95),
                    height: responsiveHeight(0.1),
                    backgroundColor: 'gray',
                    alignSelf: 'center',
                    marginTop: responsiveHeight(1),
                  }}></View>

                <View
                  style={{
                    width: responsiveWidth(95),
                    height: responsiveHeight(49),
                    alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      width: responsiveWidth(95),
                      height: responsiveHeight(8),
                      backgroundColor: '#F2F4F6',
                      marginTop: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-evenly',
                      marginLeft: responsiveWidth(0),
                    }}>
                    <Text
                      style={{
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                        color: Color.primery,
                        marginLeft: responsiveWidth(-5),
                      }}>
                      NAME
                    </Text>
                    <Text
                      style={{
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                        color: Color.primery,
                      }}>
                      SALE PRICE
                    </Text>
                    <Text
                      style={{
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                        color: Color.primery,
                      }}>
                      QUANTITY
                    </Text>
                    <Text
                      style={{
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                        color: Color.primery,
                      }}>
                      BILL
                    </Text>
                  </View>
                  <FlatList
                    data={allprod}
                    renderItem={({item}) => (
                      <View
                        style={{
                          width: responsiveWidth(95),
                          height: responsiveHeight(7),
                          flexDirection: 'row',
                          alignSelf: 'center',
                        }}>
                        <View
                          style={{
                            width: responsiveWidth(23.75),
                            height: responsiveHeight(5),
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              marginLeft: responsiveWidth(-5),
                              fontFamily: Font.Regular,
                              color: Color.primery,
                            }}>
                            {item.name}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: responsiveWidth(23.75),
                            height: responsiveHeight(5),
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              marginLeft: responsiveWidth(-5),
                              fontFamily: Font.Regular,
                              color: Color.primery,
                            }}>
                            {item.sale_price}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: responsiveWidth(23.75),
                            height: responsiveHeight(5),
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              marginLeft: responsiveWidth(-5),
                              fontFamily: Font.Regular,
                              color: Color.primery,
                            }}>
                            {item.quantity}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: responsiveWidth(24),
                            height: responsiveHeight(5),
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              marginLeft: responsiveWidth(-2),
                              fontFamily: Font.Regular,
                              color: Color.primery,
                              marginLeft: responsiveWidth(-5),
                            }}>
                            {item.total_bill}
                          </Text>
                          <TouchableOpacity onPress={() => removeItem(item)}>
                            <Image
                              style={{
                                width: 15,
                                height: 15,
                                marginLeft: responsiveWidth(15),
                                marginTop: responsiveHeight(-2),
                                tintColor: Color.primery,
                              }}
                              source={require('../assets/Images/cross.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>

                <View
                  style={{
                    width: responsiveWidth(90),
                    alignSelf: 'center',
                    height: responsiveHeight(6),
                    flexDirection: 'row',
                    // backgroundColor:"red",
                  }}>
                  <View
                    style={{
                      width: responsiveWidth(60),
                      height: responsiveHeight(6),
                      // backgroundColor:"red",
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <TextInput
                      placeholder="Expence"
                      keyboardType="numeric"
                      value={expense}
                      onChangeText={val => setExpense(val)}
                      style={{
                        height: 40,
                        margin: 5,
                        padding: 5,
                        width: responsiveWidth(25),
                        fontSize: responsiveFontSize(2),
                        borderRadius: 5,
                        borderColor: 'gray',
                        borderWidth: 1,
                      }}

                      // onChangeText={onChangeText}
                      // value={text}
                    />
                    <TextInput
                      placeholder="Discount"
                      keyboardType="numeric"
                      value={discount}
                      onChangeText={val => setDiscount(val)}
                      style={{
                        height: 40,
                        margin: 5,
                        padding: 5,
                        width: responsiveWidth(25),
                        fontSize: responsiveFontSize(2),
                        borderRadius: 5,
                        borderColor: 'gray',
                        borderWidth: 1,
                      }}

                      // onChangeText={onChangeText}
                      // value={text}
                    />
                  </View>
                  <View
                    style={{
                      width: responsiveWidth(30),
                      height: responsiveHeight(5.2),
                      backgroundColor: Color.primery,
                      marginTop: 3,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: responsiveFontSize(2),
                        color: Color.white,
                        fontFamily: Font.Medium,
                      }}>
                      Rs:{finalPrice}/-
                    </Text>
                  </View>
                </View>
                {/* Button Area  */}
                <View
                  style={{
                    width: responsiveWidth(95),
                    height: responsiveHeight(8),
                    alignSelf: 'center',
                    bottom: 0,
                    position: 'absolute',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(40),
                      height: responsiveHeight(6),
                      borderRadius: responsiveWidth(2),
                      backgroundColor: Color.primery,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => FinalPrice()}>
                    <Text
                      style={{
                        color: Color.white,
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                      }}>
                      Apply Discount
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(20),
                      height: responsiveHeight(6),
                      backgroundColor: '#EEB25F',
                      borderRadius: responsiveWidth(2),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => viewCart()}>
                    <Text
                      style={{
                        color: Color.primery,
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                      }}>
                      Close
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(20),
                      borderRadius: responsiveWidth(2),
                      height: responsiveHeight(6),
                      backgroundColor: Color.primery,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    onPress={() => submit()}>
                    <Text
                      style={{
                        color: Color.white,
                        fontFamily: Font.Medium,
                        fontSize: responsiveFontSize(2),
                      }}>
                      Sale
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Text style={{color: Color.white, fontFamily: Font.Medium}}>
              View Cart
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{width:responsiveWidth(90), height:responsiveHeight(6), backgroundColor:'red', alignSelf:'center', marginTop:responsiveHeight(1)}}> */}
        <SelectList
          boxStyles={{
            marginBottom: responsiveHeight(0),
            width: responsiveWidth(90),
            alignSelf: 'center',
            elevation: 3,
            backgroundColor: Color.white,
            marginTop: responsiveHeight(1),
            borderColor: '#D1D5DB',
            height: responsiveHeight(6),
          }}
          dropdownStyles={{
            width: responsiveHeight(44),
            alignSelf: 'center',
            marginBottom: responsiveHeight(3),
            marginTop: responsiveHeight(1),
            borderColor: '#D1D5DB',
          }}
          setSelected={val => setSelected(val)}
          data={
            customer
              ? customer?.map(i => ((value = i.name), (key = i.name)))
              : data
          }
          fontFamily={Font.Medium}
          save="value"
        />
        {/* </View> */}
        {/* FlateList Working Here  */}

        <FlatList
          data={region}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item, index}) => (
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(15),
                backgroundColor: Color.white,
                elevation: 5,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '90%',
                  height: '35%',
                  justifyContent: 'space-between',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                  marginTop: responsiveHeight(2),
                  marginBottom: responsiveHeight(0),
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                  }}>
                  Name:
                  <Text
                    style={{
                      fontFamily: Font.Bold,
                      color: Color.primery,
                      fontSize: responsiveFontSize(2),
                    }}>
                    {' '}
                    {item.name}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Sale Price:
                  <Text style={{fontFamily: Font.Bold, color: Color.primery}}>
                    {' '}
                    {item.sale_price}
                  </Text>
                </Text>
              </View>
              <View
                style={{
                  width: '90%',
                  height: '35%',
                  justifyContent: 'space-between',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                  marginTop: responsiveHeight(-1),
                  marginBottom: responsiveHeight(0),
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                  }}>
                  Category:
                  <Text
                    style={{
                      fontFamily: Font.Bold,
                      color: Color.primery,
                      fontSize: responsiveFontSize(2),
                    }}>
                    {' '}
                    {item.category}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: responsiveHeight(5),
                  padding: responsiveWidth(0),
                  bottom: responsiveHeight(2),
                  paddingRight: responsiveWidth(0),
                  alignSelf: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{width: '70%', height: responsiveHeight(5)}}>
                  <TextInput
                    placeholder="Quantity"
                    placeholderTextColor={'gray'}
                    style={{
                      height: responsiveHeight(5),
                      margin: responsiveWidth(0),
                      borderWidth: 1,
                      paddingLeft: responsiveWidth(6),
                      borderRadius: 5,
                      width: '95%',
                      color: Color.primery,
                      borderColor: '#cfcfd1',
                      backgroundColor: 'white',
                      fontFamily: Font.Regular,
                      elevation: 2,
                    }}
                    keyboardType="numeric"
                    onChangeText={q =>
                      setQuantity(values => ({
                        ...values,
                        [item.uid]: q,
                      }))
                    }
                    // value={quantity}
                  />
                </View>
                <View style={{width: '30%', height: responsiveHeight(5)}}>
                  <TouchableOpacity
                    style={{
                      width: responsiveWidth(25),
                      borderRadius: responsiveWidth(2),
                      height: responsiveHeight(5),
                      backgroundColor: Color.primery,
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      setAllProd(values => [
                        ...values,
                        {
                          name: item.name,
                          sale_price: item.sale_price,
                          uid: item.uid,
                          quantity: quantity[item.uid],
                          total_bill: quantity[item.uid] * item.sale_price,
                          unit: item.category,
                          purchase_price: item.purchase_price,
                          purchase_bill:
                            quantity[item.uid] * item.purchase_price,
                          profit:
                            quantity[item.uid] * item.sale_price -
                            quantity[item.uid] * item.purchase_price,
                        },
                      ]);
                    }}>
                    <Text style={{color: Color.white, fontFamily: Font.Medium}}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />

        {/* Footer Section */}
        <View
          style={{
            width: '100%',
            height: responsiveHeight(8),
            backgroundColor: 'white',
            borderRadius: responsiveWidth(0),
            elevation: 5,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: 0,
            position: 'absolute',
          }}>
          <Text
            style={{
              color: Color.primery,
              fontSize: responsiveFontSize(2),
              fontFamily: Font.Medium,
            }}>
            © Mulum Account Panel
          </Text>
        </View>
      </View>
    </AlertNotificationRoot>
  );
};

export default Pos;
