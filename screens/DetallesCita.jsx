import React from 'react'
import { View, Text, StyleSheet,ScrollView,TextInput,Button,Alert } from 'react-native'

const DetallesCita = () => {

  const createAlert = () =>
  Alert.alert(
    "Atencion",
    "¿Seguro que deseas cancelar esta cita?",
    [

      { text: "Cancelar", onPress: () => console.log("OK Pressed") },

      { text: "Confirmar", onPress: () => console.log("OK Pressed") }
    ]
  );
    return (
        <ScrollView>
    <View style = {styles.container}>
      <Text style = {{fontFamily: 'roboto', fontWeight:'bold', fontSize:32}}>Tu Servicio</Text>
      <Text style = {styles.informationText}>Servidor:</Text>
      <Text style = {styles.inputText}>Juan Sánchez</Text>
      <Text style = {styles.informationText}>ID Cita</Text>
  
  <TextInput 
  placeholder="ANV12-KD134" 
  style = {styles.inputText}
  />
      <Text style = {styles.informationText}>Departamento: </Text>
      <Text style = {styles.inputText}>Plomería </Text>
      <Text style = {styles.informationText}>Descripción de Problema: </Text>
      <TextInput style = {styles.inputText}
      placeholder = "Breve descripción de su problema"
      multiline= {true}/>
              <Text style = {styles.informationText}>Direccion: </Text>
      <TextInput style = {styles.inputText}
      placeholder = "Av. Las Puentes #1100"
      multiline= {true}/>
              <Text style = {styles.informationText}>Fecha</Text>
              
  
  <TextInput 
  placeholder="17/11/21" 
  style = {styles.inputText}
  />

        <View style = {styles.btn}>

        </View>
        <Text style = {styles.informationText}>Estado</Text>
  
  <TextInput 
  placeholder="Pendiente" 
  style = {styles.inputText}
  />
          <Text style = {styles.informationText}>Total $</Text>
  
  <TextInput 
  placeholder="$250" 
  style = {styles.inputText}
  />
          <Button
        color = "#1bb2d1"
        title = 'Cancelar Cita'
        onPress = {createAlert}/>


    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex:1,
    flexDirection:'column',
    height: '100%',
    width: '100%',
    marginTop: 30
},

informationText:{
  fontFamily: 'Roboto',
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom:5

},
inputText:{
  fontFamily: 'Roboto',
  fontSize: 18,
  fontWeight: 'bold',
  borderBottomWidth: 1,
  marginBottom:10,
  padding:5

},
btn: {
  marginTop:30
},
image: {
  height:100,
  width:100,
  alignSelf:'center'
}
})

export default DetallesCita
