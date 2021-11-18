import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native'
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';

const LocksmithMenuCard = (props) => {

    let[fontsLoaded, error] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }

    return (
        <TouchableOpacity style={styles.cardContainer} onPress = {() => props.navigation.navigate("LocksmithMenu")}>
            <Image source= {require('../assets/cerrajero-icon.png')} style = {styles.cardImage}/>
            <View style={styles.cardInfo}>
                <Text style = {styles.infoText}>Cerrajeros.</Text>
                <Text style = {{fontSize:12,fontWeight:'bold'}}>2 Disponibles</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#1bb2d1',
        width: '100%',
        height:150,
        display:'flex',
        flexDirection:'row',
        padding:5,
        marginBottom:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    cardImage: {
        height:'80%',
        width:'30%',
        marginRight:3,
        marginLeft:3,
    },
    cardInfo:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center'
        
    },
    infoText: {
        fontFamily:'Inter_600SemiBold',
        fontSize:18,
        marginBottom:10

    }
})

export default LocksmithMenuCard