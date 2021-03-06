import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {FcHome, FcRatings, FcHighPriority} from 'react-icons/fc'


const Navbar = (props) => {
    return(
            <View style = {styles.navcontainer}>
                <TouchableOpacity style={styles.btn} onPress = {()=> props.navigation.navigate("Home")}> 
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}> Inicio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress = {() => props.navigation.navigate("HistorialClientes")}> 
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}> Historial</Text>
                </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
    navcontainer: {
        width:'100%',
        height:40,
        backgroundColor:'#b5b5b5',
        display:'flex',
        flexDirection:'row',
        marginBottom:10
    },
    btn: {
        borderRightWidth:1,
        borderColor: 'black',
        width:'50%',
        justifyContent:'center',
        
    }
})

export default Navbar
