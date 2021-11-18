import React from 'react'
import { View, Text, StyleSheet,Image, Button } from 'react-native'
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';


const ServiceCard = (props) => {

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
            <View style = {styles.informationContainer}>
                <Text style = {{fontFamily :'Intern_700Bold' ,fontSize:24, marginBottom:5}}>Jose Suarez</Text>
                <Text style = {{fontFamily: 'Inter_400Regular', marginBottom: 5}}>Av. Las puentes #200</Text>
                <Text style = {{fontFamily: 'Inter_400Regular', marginBottom:5}}>Estado: Pendiente </Text>
                <Button title = "Ver Detalles" 
                color = '#20f26f'
                onPress = {() => props.navigation.navigate('DetallesCita')}/> 
            </View>   
            <View style={{justifyContent:'center',width:'50%'}}>

            <Text style={{fontFamily:'roboto', alignSelf:'center',marginRight:5,fontWeight:'bold',fontSize:18}}>$300</Text>
            </View>
        </View>
    
    )}

    const styles = StyleSheet.create({
        cardContainer: {
            backgroundColor: '#1bb2d1',
            width: '100%',
            display:'flex',
            flexDirection:'row',
            fontFamily:'Inter_400Regular',
            alignSelf:'center',
            padding:5,
            margin:10,
            borderRadius: 10,
            
        },
        cardImage: {
            borderRadius:20,
            height: 80,
            width: 80,
            alignSelf: 'center'
    
        },
        informationContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            
            width:'60%'
        }
    })

export default ServiceCard
