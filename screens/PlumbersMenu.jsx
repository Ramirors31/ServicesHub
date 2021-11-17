import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WorkerCard from '../components/WorkerCard'
import  { db } from '../database/firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { FcWorkflow } from 'react-icons/fc';

let trabajadores = []



const PlumbersMenu = () => {
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
        <View>
            <Text style = {{fontSize: 24, alignSelf:'center'}}> Plomeria  </Text>

            <WorkerCard/>
            
            
  

            
        </View>
    )


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection:'column',
        height: '100%',
        width: '100%',
    }
})}




export default PlumbersMenu
