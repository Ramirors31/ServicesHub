import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Picker } from 'react-native'

const RegistroTrabajador = () => {
    return (
        <View style = {styles.container}>
            <Text style = {{fontSize: 42, alignSelf: 'center'}}>Registro Trabajador</Text>

            <Image
            source =  {require('../assets/worker.png')}
            style = {styles.imagen}/>

                <Picker
                style={styles.picker}>
                    <Picker.Item label = "Plomeria" value = "Plomeria"/>
                    <Picker.Item label = "Electricidad" value = "Electricidad"/>
                    <Picker.Item label = "Cerrajería" value = "Cerrajería"/>
                </Picker>


                <TextInput 
                placeholder= "Nombre"
                style = {styles.input}/>





           
                <TextInput
                placeholder = "Correo Electrónico"
                style = {styles.input}/>

     

                <TextInput
                style = {styles.input}
                placeholder = "Teléfono"/>
            
                <TextInput
                style = {styles.input}
                placeholder = "Dirección Laboral"/>

                <TextInput 
                placeholder= "Contraseña"
                style = {styles.input}/>

                <TextInput 
                placeholder= "Confirmar Contraseña"
                style = {styles.input}/>

                <Button title ="Registrarse"
                color = "#1bb2d1"
                style={{height:100}}
                />



             
            
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
        marginBottom:20,
        
        width:'90%',
        height:40,
        alignSelf: 'center',
        fontSize:23

    },
    picker:{
        padding: 5,
        marginBottom:20,
        width:'90%',
        height:40,
        alignSelf: 'center',
        fontSize:23

    },
    button: {
        borderRadius: 30,
        backgroundColor: '#1bb2d1',
        alignContent: 'center',
        marginTop: 30,
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

export default RegistroTrabajador

