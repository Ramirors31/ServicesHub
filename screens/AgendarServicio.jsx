import React from 'react'
import { View, Text,Button, StyleSheet, TextInput,Image, ScrollView, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { useState } from 'react'
import {db} from '../database/firebase'
import { doc,setDoc,addDoc,collection,updateDoc} from '@firebase/firestore'

const AgendarServicio = () => {
  const [date, setDate] = useState('');
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  //---//
  const [desc, setDesc] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [server, setServer] = useState('Juan Sánchez');
  const [servicio, setServicio] = useState('Plomeria');
  const infoDate = {
    server, servicio, desc, date, time, address
  }

  const createAlert = () =>
  Alert.alert(
    "Algo Salió Mal",
    "Debes llenar todos los campos solicitados para contratar el servicio",
    [

      { text: "Cancelar", onPress: () => console.log("OK Pressed") },

      { text: "Confirmar", onPress: () => console.log("OK Pressed") }
    ]
  );

  const handlessDate = () =>{
    if(server!=''&&servicio!=''&&desc!=''&&date!=''
    &&time!=''&&address!=''){
      console.log(infoDate)
      addCita()
      alert('Cita Agendada Correctamente')
  
    }else{
      alert('Debes llenar todos los campos')
    }
   
  }

  const addCita = async () => {

    const docRef = await addDoc(collection(db, "cita"), {

      trabajador: server,
      servicio: servicio,
      descripcion: desc,
      fecha: date,
      hora: time,
      direccion: address,
      status:'Pendiente'
    });
    const citaRef = doc(db, "cita", docRef.id)
    await updateDoc(citaRef, {
        cita_id:docRef.id
      });
    clearFields()
  }

  const clearFields = () => {
    setDesc('')
    setDate('')
    setTime('')
    setAddress('')
}

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate.getDay);

    console.log(date.getDay)
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
      <Text style = {styles.inputText} >{infoDate.server}</Text>
      <Text style = {styles.informationText}>Departamento: </Text>
      <Text style = {styles.inputText}>{infoDate.servicio}</Text>
      <Text style = {styles.informationText}>Descripción de Problema: </Text>
      <TextInput style = {styles.inputText}
      placeholder = "Breve descripción de su problema"
      onChangeText={text => setDesc(text)}
      value = {desc}
      multiline= {true}/>
      <Text style = {styles.informationText}>Seleccione una fecha </Text>
        <TextInput 
         placeholder="DD/MM/AAAA" 
         style = {styles.inputText}
         onChangeText = {text => setDate(text)}
         value = {date}
         />
         <Text style = {styles.informationText}>Seleccione una hora </Text>
  
        <TextInput 
         placeholder="13:00" 
         style = {styles.inputText}
         onChangeText = {text => setTime(text)}
         value = {time}
       
        />

        <Text style = {styles.informationText}>Especifique Su Dirección</Text>
  
        <TextInput 
        placeholder="Av. Las Puentes 512 San Nicolás de los Garza" 
        style = {styles.inputText}
        onChangeText ={text => setAddress(text)}
        value = {address}
        />
        <View style = {styles.btn}>
        <Button
        color = "#1bb2d1"
        title = 'Agendar'
        //onPress = {createAlert}
        onPress = {handlessDate}
        />
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
