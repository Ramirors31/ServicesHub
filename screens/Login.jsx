import React from 'react'
import { View, Text, Button ,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { 
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black 
  } from '@expo-google-fonts/inter'
import { useFonts } from '@expo-google-fonts/andika';
import AppLoading from 'expo-app-loading';

const Login = (props) => {
    let[fontsLoaded, error] = useFonts({
        Inter_100Thin,
        Inter_200ExtraLight,
        Inter_300Light,Inter_400Regular,Inter_500Medium,Inter_600SemiBold,Inter_700Bold,Inter_800ExtraBold,Inter_900Black
    });

    if(!fontsLoaded){
        return <AppLoading/>
    }


    return ( 
        <View style = {styles.container}>
            <Text style = {{fontFamily:'Inter_600SemiBold',fontSize:22,marginBottom:40,marginTop:50}}>Bienvenido a Service Hub</Text>
            <Image
            style= {styles.logo}
            source = {require('../assets/icon-handyman.png')}/>
            <TextInput placeholder = {"ejemplo@gmail.com"} style = {styles.input}/>
            <TextInput placeholder = {"*********"} style = {styles.input}/>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Home')}> 
                <Text style={{color:"#ffff", fontSize:18}}>INICIAR SESION</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={{color:"#ffff", fontSize:18}}>REGISTRARSE</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
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

export default Login

