import React, {useState} from 'react'
import { View, Text, StyleSheet,Image, Button } from 'react-native'
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';
import { db } from '../database/firebase';
import { doc, getDoc } from "firebase/firestore";


const ServiceCard = (props) => {

    const [userInfo, setUserInfo] = useState([])

    //OBTENER NOMBRE DE USUARIO QUE HIZO LA CITA.
   
const getUser = async() => {

const docRef = doc(db, "user", props.userid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    setUserInfo(docSnap.data())
  console.log("Document data:", userInfo);
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}


    return (
        <View style={styles.cardContainer}>
            <View style = {styles.informationContainer}>
                <Text style = {{fontWeight:'bold',fontSize:24, marginBottom:5}}>{userInfo.nombre_user}</Text>
                <Text style = {{fontWeight:'bold', marginBottom: 5}}>{props.ubicacion}</Text>
                <Text style = {{fontWeight:'bold', marginBottom:5}}>{props.status} </Text>
                <Button title = "Ver Detalles" 
                color = '#20f26f'
                onPress = {() => props.navigation.navigate('DetallesCita')}/> 
            </View>   
            <View style={{justifyContent:'center',width:'50%'}}>

            <Text style={{alignSelf:'center',marginRight:5,fontWeight:'bold',fontSize:18}}>{props.costo}</Text>
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
