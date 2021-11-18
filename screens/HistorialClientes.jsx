import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'

const HistorialClientes = (props) => {
    return (
        <View style = {styles.container}>
            <Navbar navigation = {props.navigation}/>
            <ScrollView>
                <Text style = {{fontFamily: 'Roboto', fontSize: 24, fontWeight:'bold'}}>Historial</Text>
                <ServiceCard navigation = {props.navigation}/>
                <ServiceCard/>
                <ServiceCard/>
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
export default HistorialClientes
