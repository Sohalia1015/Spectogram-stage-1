import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Profile from "../screens/Profile";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=> {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator}/>
    <Drawer.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Drawer.Navigator>
      
  );
}
export default DrawerNavigator