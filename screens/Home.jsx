import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {FcHome, FcRatings, FcHighPriority} from 'react-icons/fc'
import WorkerCard from '../components/WorkerCard';
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';
import History from './History';
import PlumbersMenuCard from '../components/PlumbersMenuCard';
import LocksmithMenuCard from '../components/LocksmithMenuCard';
import ElectricianMenuCard from '../components/ElectricianMenuCard';


const Home = (props) => {


    let[fontsLoaded, error] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }
    return(
    <ScrollView style ={styles.container}>
        <Text style={{fontFamily:"Inter_600SemiBold", fontSize:20, marginBottom:20}}>¿Qué tipo de servicio buscas?</Text>
        <PlumbersMenuCard/>
        <LocksmithMenuCard/>
        <ElectricianMenuCard/>
        
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection:'column',
        height:'100%'
    }
})

export default Home
