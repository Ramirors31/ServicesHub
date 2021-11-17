import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native'

const RegistroUsuario = () => {
    return (
        <View style = {styles.container}>
            <Text style = {{fontSize: 46, alignSelf: 'center'}}>Registro</Text>

            <Image
            source =  {require('../assets/icono-registro.png')}
            style = {styles.imagen}/>


                <TextInput 
                placeholder= "Correo Electrónico"
                style = {styles.input}/>

           
                <TextInput
                placeholder = "Celular"
                style = {styles.input}/>

     

                <TextInput
                style = {styles.input}
                placeholder = "Contraseña"/>
            
                <TextInput
                style = {styles.input}
                placeholder = "Confirmar Contraseña"/>

                <TouchableOpacity
                title = "Registrarse"
                style = {styles.button}
                 >
                     <Text style={{fontSize:26,
                    alignSelf:'center',
                    color:'white',
                    }}>REGISTRARSE</Text>
                </TouchableOpacity>

             
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection:'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center'
    },
    infoRow: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 15
    },
    input:{
        padding: 5,
        borderColor: 'black',
        borderBottomWidth: 1,
        marginBottom:10,
        
        width:'90%',
        height:40,
        alignSelf: 'center',
        fontSize:23

    },
    button: {
        borderRadius: 30,
        backgroundColor: '#1bb2d1',
        alignContent: 'center',
        marginTop: 20,
        justifyContent: 'center'
    },
    imagen: {
        height:150,
        width:150,
        alignSelf:'center',
        marginTop: 10,
        marginBottom: 20

    }
})

export default RegistroUsuario
