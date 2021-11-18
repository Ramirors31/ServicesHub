import React, { useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView, TouchableOpacity,Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import TipoRegistroSelecter from '../components/TipoRegistroSelecter'
import { doc,setDoc,addDoc,collection,updateDoc} from '@firebase/firestore'
import {db} from '../database/firebase'



const RegistroTrabajador = (props) => {
    const [worker,setWorker] = useState( {
        name:'',
        department: 'Plomeria',
        email:'',
        phone:'',
        address:'',
        price:'',
        password:'',
        passwordConf:'',
        
    })

    

    const addWorker = async () => {

        const docRef = await addDoc(collection(db, "worker"), {

        nombre_worker: worker.name,
        telefono_worker: worker.phone,
        email_worker: worker.email,
        password_worker: worker.password,
        servicio_id:worker.department,
        precio_worker:worker.price,
        direccion_worker:worker.address
        });
        const washingtonRef = doc(db, "worker", docRef.id)
        console.log("Document written with ID: ", docRef.id);
        await updateDoc(washingtonRef, {
            id_worker:docRef.id
          });
    }

    //ALERTA DE REGISTRO
    const createAlert = () =>
    Alert.alert(
      "Algo Salió Mal",
      "Verifique su número telefónico, este debería constar de 10 dígitos",
      [
  
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
        <View style = {styles.container}>
            <ScrollView>
            <TipoRegistroSelecter navigation = {props.navigation}/>
            <Text style = {{fontSize: 42, alignSelf: 'center'}}>Registro Trabajador</Text>

            <Image
            source =  {require('../assets/worker.png')}
            style = {styles.imagen}/>

                <Picker
                style={styles.picker}
                selectedValue = {worker.department}
                onValueChange = {(value,index) => setWorker({...worker,department:value})}>
                    <Picker.Item label = "Plomeria" value = "Plomeria"/>
                    <Picker.Item label = "Electricidad" value = "Electricidad"/>
                    <Picker.Item label = "Cerrajería" value = "Cerrajería"/>
                </Picker>


                <TextInput 
                placeholder= "Nombre"
                style = {styles.input}
                onChangeText = {(text) =>setWorker({...worker,name:text})}/>

                <TextInput
                placeholder = "Correo Electrónico"
                style = {styles.input}
                onChangeText = {(text) =>setWorker({...worker,email:text})}/>

                <TextInput
                style = {styles.input}
                placeholder = "Teléfono"
                onChangeText = {(text) =>setWorker({...worker,phone:text})}
                keyboardType = 'numeric'/>
            
                <TextInput
                style = {styles.input}
                placeholder = "Dirección Laboral"
                onChangeText = {(text) =>setWorker({...worker,address:text})}/>

                <TextInput
                style = {styles.input}
                placeholder = "Precio Base Servicio"
                keyboardType = 'numeric'
                onChangeText = {(text) =>setWorker({...worker,price:text})}/>

                <TextInput 
                placeholder= "Contraseña"
                style = {styles.input}
                onChangeText = {(text) =>setWorker({...worker,password:text})}
                secureTextEntry = {true}/>

                <TextInput 
                placeholder= "Confirmar Contraseña"
                style = {styles.input}
                onChangeText = {(text) =>setWorker({...worker,passwordConf:text})}
                secureTextEntry = {true}/>

                <TouchableOpacity  >
                <Button title ="Registrarse"
                color = "#1bb2d1"
                style={{height:100}}
                onPress = {addWorker}
                
                
               
                />
                </TouchableOpacity>

            </ScrollView>
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
        justifyContent: 'center',
        marginTop:30
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

