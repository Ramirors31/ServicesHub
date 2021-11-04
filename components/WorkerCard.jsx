import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';

const WorkerCard = () => {

    let[fontsLoaded, error] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }

    return (
        <View style={styles.cardContainer}>
            <Text>This is a worker Card</Text>
            <Text>More Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'yellow',
        width: '100%',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        fontFamily:'Inter_400Regular',
        padding:5
    }
})

export default WorkerCard
