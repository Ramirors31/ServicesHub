import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/Login";
import Home from "./screens/Home";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Navbar from "./components/Navbar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
  return(

      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login} options={{title:'', headerShown: false}}/>
        <Stack.Screen name = "Home" component = {Home} options={{title:'',headerShown:false}}/>
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