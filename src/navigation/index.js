import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {stackNavigationList} from './navigationlist';
const Stack = createNativeStackNavigator();

const MainNav = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={stackNavigationList[0].name}>
        {stackNavigationList.map((item, index) => {
          return (
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={{headerShown: false}}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNav;
