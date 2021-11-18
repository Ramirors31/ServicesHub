import React from 'react'
import { View, Text,Button, StyleSheet, TextInput,Image, ScrollView, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
const AgendarServicio = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const createAlert = () =>
  Alert.alert(
    "Algo Salió Mal",
    "Debes llenar todos los campos solicitados para contratar el servicio",
    [

      { text: "Cancelar", onPress: () => console.log("OK Pressed") },

      { text: "Confirmar", onPress: () => console.log("OK Pressed") }
    ]
  );

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() +  (tempDate.getMonth() + 1)  + tempDate.getFullYear();
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
    fDate.toString()
    console.log(fDate)




    console.log(date)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
  <ScrollView>
    <View style = {styles.container}>
      <Text style = {{ fontWeight:'bold', fontSize:32, alignSelf:'center'}}>Agenda tu Servicio</Text>
      <Image
      source = {require('../assets/icono-calendario.png')}
      style = {styles.image}/>
      <Text style = {styles.informationText}>Servidor:</Text>
      <Text style = {styles.inputText}>Juan Sánchez</Text>
      <Text style = {styles.informationText}>Departamento: </Text>
      <Text style = {styles.inputText}>Plomería </Text>
      <Text style = {styles.informationText}>Descripción de Problema: </Text>
      <TextInput style = {styles.inputText}
      placeholder = "Breve descripción de su problema"
      multiline= {true}/>
      <Text style = {styles.informationText}>Seleccione una fecha </Text>
        <TextInput onFocus={showDatepicker}
         placeholder="17/11/2021" 
         style = {styles.inputText}
         value = {"Hola"}
         showSoftInputOnFocus={false}
         />
         <Text style = {styles.informationText}>Seleccione una hora </Text>
  
        <TextInput onFocus={showTimepicker}
         placeholder="13:00" 
         style = {styles.inputText}
         showSoftInputOnFocus={false}
         is24Hour = {true}
         />

        <Text style = {styles.informationText}>Especifique Su Dirección</Text>
  
        <TextInput 
        placeholder="Av. Las Puentes 512 San Nicolás de los Garza" 
        style = {styles.inputText}
        />


        <View style = {styles.btn}>
        <Button
        color = "#1bb2d1"
        title = 'Agendar'
        onPress = {createAlert}/>
        </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
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
  marginBottom:10

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
  marginTop:20
},
image: {
  height:100,
  width:100,
  alignSelf:'center'
}
})

export default AgendarServicio
