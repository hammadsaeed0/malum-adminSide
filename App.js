import React, {useState} from 'react'
import {Text, View ,LogBox} from 'react-native'
import { Provider } from 'react-redux'
import store from './src/Redux/store'
import MainNav from './src/navigation'
const App = () => {
  LogBox.ignoreAllLogs();
  return (
        
    <Provider store={store}>
        <MainNav />
    </Provider>

       
  );
};

export default App;