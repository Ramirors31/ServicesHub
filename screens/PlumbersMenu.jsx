import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WorkerCard from '../components/WorkerCard';
import  { db } from '../database/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { FcWorkflow } from 'react-icons/fc';

let trabajadores = []



const PlumbersMenu = (props) => {
    const [workers,setWorkers] = useState([])


   {/* useEffect(() => {
        const q = query(collection(db, "trabajadores"), where("departamento", "==", "Plomeria"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
            setWorkers(doc.data());
            console.log(workers)
            return () =>{
                unsubscribe()
            }

    })

       
            

      });
      
      //console.log(cities)

      //console.log("Current cities in CA: ", Object.values(cities))
      
    },[]); */}
    


  

    return (
        <View style= {styles.container}>
            <Text style = {{fontSize: 32, fontWeight: 'bold'}}> Plomeria  </Text>

            <WorkerCard navigation = {props.navigation}/>
            
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



export default PlumbersMenu
