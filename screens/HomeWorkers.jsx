import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'
import {db} from '../database/firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore";


const HomeWorkers = (props) => {

    //OBTENEMOS LA INFORMACION DESDE LA BASE DE DATOS
    const cities = [];
    //ESTADO DONDE SE GUARDAN LOS DAOS
    const [services, setServices] = useState([])
    const q = query(collection(db, "cita"), where("worker_id", "==", "16mWfHjk7JCBXHodgJ7f"));
    //FUNCION PARA ESCUCHAR CAMBIOS
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
        cities.push(doc.data());
        //ACTUALIZAMOS EL ESTADO
        setServices(cities)
    });

});
    //FUNCION A LA ESCUCHA
    unsubscribe()

    



    return (
        <View style = {styles.container}>
            <Navbar navigation = {props.navigation}/>
            <ScrollView>
                <Text style = {{ fontSize: 24, fontWeight:'bold'}}>Citas Pendientes</Text>
                {
                    //OBTENEMOS TODOS LOS OBJETOS GUARDADOS EN EL ESTADO Y SE LOS PASAMOS AL COMPONENTE EN FORMA DE PROPS
                    services.map(service => (
                        <ServiceCard userid={service.user_id} 
                        key = {"service"}
                        ubicacion = {service.ubicacion} 
                        status= {service.status}
                        costo = {service.costo} />
                    ))
                }
                
              
               
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
        marginTop:30
    }
})
export default HomeWorkers
