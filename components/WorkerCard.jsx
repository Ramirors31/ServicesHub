import React from 'react'
import { View, Text, StyleSheet,Image, Button } from 'react-native'
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';


const WorkerCard = (props) => {

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
                <Text style = {{fontWeight:'bold',fontSize:24, marginBottom:5}}>Jose Suarez</Text>
                <Text style = {{marginBottom: 5}}>Av Los Angeles #1204 San Nicolás de los Garza, Nuevo León</Text>
                <Text style = {{ marginBottom:5}}> 8281059217</Text>
                <Button title = "Agendar Servicio" 
                color = '#20f26f'
                onPress={()=> props.navigation.navigate('AgendarServicio')}/> 
            </View>          
            <Text style={{fontWeight:'bold',alignSelf:'center'}}>Precio Base: $250</Text>
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

export default WorkerCard
