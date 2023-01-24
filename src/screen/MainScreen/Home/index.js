import {Text, StyleSheet, View, Image} from 'react-native'
import color from '../../../components/Color';
import font from '../../../components/Font';
import Drawer from '../../../drawer/main'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const HomeScreen = ({navigation}) => {

    return (
      <View style={{flex:1}}>
        <Drawer />
      </View>
)}


export default HomeScreen