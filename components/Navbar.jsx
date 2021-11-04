import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import History from '../screens/History';
import {FcHome, FcRatings, FcHighPriority} from 'react-icons/fc'
import { NavigationContainer} from '@react-navigation/native';

const Navbar = () => {
    const Tab = createBottomTabNavigator();

    return (
    <NavigationContainer independent={true}>
        <Tab.Navigator>
            <Tab.Screen name= "Inicio" component = {Home} options={{headerShown:false,tabBarIcon:FcHome}} />
            <Tab.Screen name = "Historial" component = {History} options={{headerShown:false,tabBarIcon:FcRatings}}/>
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default Navbar
