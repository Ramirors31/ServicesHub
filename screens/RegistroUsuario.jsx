import React, { useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image, Alert } from 'react-native'
import TipoRegistroSelecter from '../components/TipoRegistroSelecter'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../database/firebase'
import {addDoc,collection, doc, setDoc} from '@firebase/firestore'

const RegistroUsuario = (props) => {


    //Take the inputs
    const [userInfo,setUserInfo] = useState( {
        name:'',
        email:'',
        phone:'',
        address:'',
        password:'',
        passwordConf:'',
        
    }) 

    const manageButton = () =>{
        handlesSingUp()
        clearFields()
        registrarUsuario()
        
    }

    const addUser = async (userId) => {

        await setDoc(doc(db, "user",userId), {

        nombre_user: userInfo.name,
        telefono_user: userInfo.phone,
        email_user: userInfo.email,
        password_user: userInfo.password,
        direccion_user:userInfo.address

        });
    }

    const clearFields = () => {
        setUserInfo({...userInfo,department:'',
        address:'',
        email:'',
        password:'',
        passwordConf:'',
        phone:'',
        price:'',
        name:'',
        id:''
    })
    }


        //REGISTRAR USUARIO CON FIREBASE AUTH
        const registrarUsuario = () => {
            const auth = getAuth();
    createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        addUser(user.uid)
        registroExitoso()
        
        // ...
      })
      .catch((error) => {
        alert('No email valid, verifica que sea un correo valido\nexample@hub.com')
        // ..
      });
        }
    
        //ALERTA DE REGISTRO
        const registroExitoso = () =>
        Alert.alert(
          "Bienvenido!!",
          "Has Sido Registrado Exitosamente",
          [
      
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );


    const handlesSingUp = () => {

        if(userInfo.name == '' && userInfo.email == '' 
        && userInfo.phone == '' && userInfo.pass == ''
        && userInfo.confPass == ''){
            alert('Debes llenar todos los campos')
        }else if (userInfo.name == ''){
            alert('Debes llenar todos los campos')
        }else if (userInfo.phone == ''){
            alert('Debes llenar todos los campos')
        }else if (userInfo.pass == ''){
            alert('Debes llenar todos los campos')
        }else if ( userInfo.confPass == ''){
            alert('Debes llenar todos los campos')
        }else{
            if (userInfo.pass == userInfo.confPass){
                console.log(userInfo)
            }else{
                alert('La contraseña de confirmacion no coindide\nPor favor verificalo')
            }
        }
    }

    return (
        <View style = {styles.container}>
            <TipoRegistroSelecter navigation = {props.navigation}/>
            <Text style = {{fontSize: 46, alignSelf: 'center'}}>Registro</Text>

            <Image
            source =  {require('../assets/icono-registro.png')}
            style = {styles.imagen}/>

                <TextInput 
                placeholder= "Correo Electrónico"
                style = {styles.input}
                value = {userInfo.email}
                onChangeText = {text => setUserInfo({...userInfo,email:text})}
                keyboardType = 'email-address'
                />

                <TextInput 
                placeholder= "Nombre"
                style = {styles.input}
                value = {userInfo.name}
                onChangeText = {text => setUserInfo({...userInfo,name:text})}/>
                  
                <TextInput 
                placeholder= "Dirección"
                style = {styles.input}
                value = {userInfo.address}
                onChangeText = {text => setUserInfo({...userInfo,address:text})}/>

                <TextInput
                placeholder = "Celular"
                style = {styles.input}
                value = {userInfo.phone}
                onChangeText = {text => setUserInfo({...userInfo,phone:text})}
                keyboardType = "phone-pad"
                maxLength={10}/>

                <TextInput
                style = {styles.input}
                placeholder = "Contraseña"
                secureTextEntry = {true}
                value = {userInfo.password}
                onChangeText = {text => setUserInfo({...userInfo,password:text})}/>
            
                <TextInput
                style = {styles.input}
                placeholder = "Confirmar Contraseña"
                secureTextEntry = {true}
                value = {userInfo.passwordConf}
                onChangeText = {text => setUserInfo({...userInfo,passwordConf:text})}/>

                <TouchableOpacity
                title = "Registrarse"
                style = {styles.button}
                onPress={manageButton}
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
        marginBottom:20,
        
        width:'100%',
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
