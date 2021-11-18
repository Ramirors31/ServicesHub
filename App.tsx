import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from "./screens/Login";
import Home from "./screens/Home";
import {FcHome, FcRatings, FcHighPriority} from 'react-icons/fc'
import PlumbersMenu from "./screens/PlumbersMenu";
import ElectricianMenuCard from "./components/ElectricianMenuCard";
import ElectricistMenu from "./screens/ElectricistMenu";
import LocksmithMenu from "./screens/LocksmithMenu";
import RegistroUsuario from "./screens/RegistroUsuario";
import RegistroTrabajador from "./screens/RegistroTrabajador";
import AgendarServicio from "./screens/AgendarServicio";
import HistorialClientes from "./screens/HistorialClientes";
import DetallesCita from "./screens/DetallesCita";


const Stack = createNativeStackNavigator();


const MyStack = () => {
  return(

      <Stack.Navigator>
      
      <Stack.Screen name = "Login" component = {Login} options={{title:'', headerShown: false}}/>
      <Stack.Screen name = "Home" component = {Home} options={{title:'',headerShown:false}}/>
      <Stack.Screen name = "PlumbersMenu" component = {PlumbersMenu} options = {{title:'', headerShown:false}}/>
      <Stack.Screen name = "LocksmithMenu" component = {LocksmithMenu} options = {{title:'', headerShown:false}}/> 
      <Stack.Screen name  = "RegistroUsuario" component = {RegistroUsuario} options = {{title:'', headerShown:false}}/>
      <Stack.Screen name = "RegistroTrabajador" component = {RegistroTrabajador} options = {{title:'',headerShown:false}}/> 
      <Stack.Screen name = "ElectricistMenu" component = {ElectricistMenu} options = {{title: '',headerShown:false}}/> 
      <Stack.Screen name = "HistorialClientes" component = {HistorialClientes} options = {{title:'', headerShown:false}}/>
      <Stack.Screen name = "DetallesCita" component = {DetallesCita} options = {{title: '', headerShown:false}}/>
      <Stack.Screen name = "AgendarServicio" component = {AgendarServicio} options={{title:'', headerShown:false}}/>
        
              
          
      </Stack.Navigator> 

  )
}



function App() {
  return (

        <NavigationContainer>
          <MyStack/>
        
        </NavigationContainer>
   

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;