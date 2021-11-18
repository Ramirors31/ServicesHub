import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {FcHome, FcRatings, FcHighPriority} from 'react-icons/fc'


const TipoRegistroSelecter = (props) => {
    return(
            <View style = {styles.navcontainer}>
                <TouchableOpacity style={styles.btn} onPress = {()=> props.navigation.navigate("RegistroUsuario")}> 
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}> Usuario</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress = {() => props.navigation.navigate("RegistroTrabajador")}> 
                    <Text style={{alignSelf:'center',fontWeight:'bold'}}> Trabajador</Text>
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

export default TipoRegistroSelecter
