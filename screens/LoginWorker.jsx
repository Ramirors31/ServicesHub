import React, {useState} from 'react'
import { View, Text, Button ,StyleSheet,Image,TextInput,TouchableOpacity, Alert} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginWorker = (props) => {

    //ESTADO PARA CORREO Y CONTRASEÑA
    const[email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    

    //ALERTA PARA LOGIN FALLIDO
    const createAlert = () =>
    Alert.alert(
      "Algo Salió Mal",
      "Verifica los datos para inicio de sesion, si no tienes una cuenta registrate aquí",
      [
  
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    //AUTENTIFICACION DE USUARIO
    const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    props.navigation.navigate("HomeWorkers")
    // ...
  })
  .catch((error) => {
    createAlert()
  });
}

    return ( 
        <View style = {styles.container}>
            <Text style = {{fontWeight:'bold',fontSize:22,marginBottom:40,marginTop:50}}>Bienvenido a Service Hub</Text>
            <Image
            style= {styles.logo}
            source = {require('../assets/icon-handyman.png')}/>
            <TextInput placeholder = {"ejemplo@gmail.com"} style = {styles.input}
            onChangeText = {(text) =>setEmail(text)}/>
            <TextInput placeholder = {"*********"} style = {styles.input}
            secureTextEntry={true}
            onChangeText = {(text) =>setPassword(text)}/>
            <TouchableOpacity style={styles.button} onPress={login}> 
                <Text style={{color:"#ffff", fontSize:18}}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress = {()=> props.navigation.navigate("RegistroTrabajador")}>
                <Text style={{color:"#ffff", fontSize:18}}>REGISTRARSE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress = {()=> props.navigation.navigate("Login")}>
                <Text style={{color:"#ffff", fontSize:18}}>INICIAR COMO USUARIO</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        flex:1,
        alignItems:'center',
        flexDirection:'column'
    },

    logo: {
        height:'20%',
        width:'50%',
        marginBottom:50

    },
    input: {
        borderRadius:10,
        borderColor:'#b6b6b6',
        borderWidth:2,
        shadowOpacity:2,
        shadowColor: '#b6b6b6',
        padding:5,
        width:'90%',
        height:'6%',
        fontSize:16,
        marginBottom:50
      
    },
    button: {
        marginBottom:40,
        padding:5,
        minWidth:'70%',
        borderRadius:10,
        backgroundColor: '#4abdd4',
        alignItems: 'center',
        shadowColor:'black',
        shadowOpacity:2,
      
    }

})

export default LoginWorker

