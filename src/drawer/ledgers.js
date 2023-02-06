import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Color from '../components/Color';
import Font from '../components/Font';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Ledger = ({navigation}) => {
  const [customerLadger, setCustomerLadger] = useState([]);
  const [companyLadger, setCompanyLadger] = useState([]);
  const [RegionLadger, setRegionLadger] = useState([]);
  const [saleAndProfileLadger, setSaleAndProfitLadger] = useState([]);
  const [tab, settab] = useState('Customer Leder');


  const btn = [
    {label: 'Customer Leder'},
    {label: 'Company Leder'},
    {label: 'Region Leder'},
    {label: 'Sale & Profit Leder'},
  ];

  useEffect(() => {
    getCustomerLadger();
    getCompanyLadger();
    getRegionLadger();
    getSaleAndProfitLadger();

  }, [customerLadger?.length]);
  console.log(tab);
  const getCustomerLadger = () => {
    var formdata = new FormData();
    formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("https://api.accounts.lighthousepakistan.online/fetch_customer_report.php", requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        console.log('response from server----',data.data.customer_report);
        setCustomerLadger(data.data.customer_report)
      })
      .catch(error => console.log('error', error));
};
const getCompanyLadger = () => {
    var formdata = new FormData();
formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.accounts.lighthousepakistan.online/fetch_company_reports.php", requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    setCompanyLadger(data.data.company_reports)
  })
  .catch(error => console.log('error', error));
};
const getRegionLadger = () => {
    var formdata = new FormData();
formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.accounts.lighthousepakistan.online/fetch_region_reports.php", requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    setRegionLadger(data.data.region_report)
  })
  .catch(error => console.log('error', error));
};
const getSaleAndProfitLadger = () => {
    var formdata = new FormData();
formdata.append("__api_key__", "hi,-its-eevee. I can do wonderful things in api creation.");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.accounts.lighthousepakistan.online/fetch_sale_profit_reports.php", requestOptions)
  .then(response => response.text())
  .then(result => {
    const data = JSON.parse(result);
    setSaleAndProfitLadger(data.data.sale_report)
  })
  .catch(error => console.log('error', error));
};




  return (
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

      <View
        style={{
          width: '90%',
          height: responsiveHeight(6),
          alignSelf: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <FlatList
          horizontal
          data={btn}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                width: responsiveWidth(40),
                height: tab === item.label ? responsiveHeight(5.5) : responsiveHeight(5),
                backgroundColor: 'black',
                borderRadius: 10,
                marginLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: tab === item.label ? 3 : 0,
                borderColor: 'grey',
              }}
              onPress={()=> settab(item.label)}
              >
              <Text style={{color: 'white'}}>{item.label}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>

      <TextInput
        placeholder="Filter Item"
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
      />

      {/* // Customer Card */}

      <View
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(8),
          backgroundColor: 'white',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderRadius: 10,
          elevation: 3,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 30,
            backgroundColor: Color.primery,
            borderRadius: 5,
            marginRight: responsiveWidth(3),
          }}>
          <Text style={{color: Color.white, fontFamily: Font.Medium}}>
            Copy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 30,
            backgroundColor: Color.primery,
            borderRadius: 5,
            marginRight: responsiveWidth(3),
          }}>
          <Text style={{color: Color.white, fontFamily: Font.Medium}}>CVC</Text>
        </TouchableOpacity>
      </View>

      {/* FlateList Working Here  */}
      {tab === 'Customer Leder' ? (
        <FlatList
          data={customerLadger}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}) => (
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(20),
                backgroundColor: Color.white,
                elevation: 5,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                  }}>
                  Date:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.created_at}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Invoice:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.invoice_code}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                  bottom: responsiveHeight(2),
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Discription:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.description}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Cradet:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.credit}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '35%',
                  padding: responsiveWidth(5),
                  bottom: responsiveHeight(4.5),
                  paddingRight: responsiveWidth(1),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                    }}>
                    Debit:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.debit}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                      marginLeft: responsiveWidth(0),
                    }}>
                    Balance:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.total_balance}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      ) : tab === 'Company Leder' ? (
        <FlatList
          data={companyLadger}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}) => (
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(20),
                backgroundColor: Color.white,
                elevation: 5,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                  }}>
                  Date:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.created_at}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Invoice:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.invoice_no}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                  bottom: responsiveHeight(2),
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Discription:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.description}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Cradet:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.credit}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '35%',
                  padding: responsiveWidth(5),
                  bottom: responsiveHeight(4.5),
                  paddingRight: responsiveWidth(1),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                    }}>
                    Debit:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.debit}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                      marginLeft: responsiveWidth(0),
                    }}>
                    Balance:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.total_balance}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      ) : tab == 'Region Leder' ? (
        <FlatList
          data={RegionLadger}
          contentContainerStyle={{paddingBottom: 100}}
          renderItem={({item}) => (
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(18),
                backgroundColor: Color.white,
                elevation: 5,
                borderRadius: 10,
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                  }}>
                  Region:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.region}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(2),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Party Name:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.customer_name}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '36%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  padding: responsiveWidth(0),
                  alignSelf: 'center',
                  paddingRight: '5%',
                  bottom: responsiveHeight(3),
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Last Invoice Date:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.last_invoice_date}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Balance:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.balance}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  width: '90%',
                  height: '45%',
                  padding: responsiveWidth(5),
                  bottom: responsiveHeight(7),
                  paddingRight: responsiveWidth(1),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                    }}>
                    Last Invoice payment:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.last_invoice_payment}
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                      marginLeft: responsiveWidth(0),
                    }}>
                    Last Payment:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.last_payment}
                    </Text>
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 5
                  }}>
                  <Text
                    style={{
                      fontFamily: Font.Regular,
                      color: '#6B7280',
                      fontSize: responsiveFontSize(1.7),
                    }}>
                    Last payment Date:
                    <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                      {' '}
                      {item.last_payment_date}
                    </Text>
                  </Text>
                </View>
              </View>

            </View>
          )}
          keyExtractor={item => item.id}
        />
      ): tab == 'Sale & Profit Leder' ? (
        <FlatList
        data={saleAndProfileLadger}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <View
            style={{
              width: responsiveWidth(90),
              height: responsiveHeight(18),
              backgroundColor: Color.white,
              elevation: 5,
              borderRadius: 10,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                width: '90%',
                height: '36%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: responsiveWidth(0),
                alignSelf: 'center',
                paddingRight: '5%',
              }}>
              <Text
                style={{
                  fontFamily: Font.Regular,
                  color: '#6B7280',
                  fontSize: responsiveFontSize(2),
                }}>
                Date:
                <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                  {' '}
                  {item.created_at}
                </Text>
              </Text>
              <Text
                style={{
                  fontFamily: Font.Regular,
                  color: '#6B7280',
                  fontSize: responsiveFontSize(2),
                  marginLeft: responsiveWidth(0),
                }}>
                Invoice Code:
                <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                  {' '}
                  {item.invoice_no}
                </Text>
              </Text>
            </View>

            <View
              style={{
                width: '90%',
                height: '36%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: responsiveWidth(0),
                alignSelf: 'center',
                paddingRight: '5%',
                bottom: responsiveHeight(3),
              }}>
              <Text
                style={{
                  fontFamily: Font.Regular,
                  color: '#6B7280',
                  fontSize: responsiveFontSize(1.7),
                }}>
                Name Of party:
                <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                  {' '}
                  {item.customer_name}
                </Text>
              </Text>
              <Text
                style={{
                  fontFamily: Font.Regular,
                  color: '#6B7280',
                  fontSize: responsiveFontSize(1.7),
                  marginLeft: responsiveWidth(0),
                }}>
                Profit/Loss:
                <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                  {' '}
                  {item.profit}
                </Text>
              </Text>
            </View>

            <View
              style={{
                width: '90%',
                height: '45%',
                padding: responsiveWidth(5),
                bottom: responsiveHeight(7),
                paddingRight: responsiveWidth(1),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Discription:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.description}
                  </Text>
                </Text>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                    marginLeft: responsiveWidth(0),
                  }}>
                  Total:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.total_bill}
                  </Text>
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 5
                }}>
                <Text
                  style={{
                    fontFamily: Font.Regular,
                    color: '#6B7280',
                    fontSize: responsiveFontSize(1.7),
                  }}>
                  Major Discount:
                  <Text style={{fontFamily: Font.Bold, color: '#6B7280'}}>
                    {' '}
                    {item.major_discount}
                  </Text>
                </Text>
              </View>
            </View>

          </View>
        )}
        keyExtractor={item => item.id}
      />
      ) : null }
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
  );
};

export default Ledger;
