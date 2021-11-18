import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WorkerCard from '../components/WorkerCard'

const ElectricistMenu = (props) => {
    return (
        <View style = {styles.container}>
             <Text style = {{fontSize: 32, fontWeight: 'bold'}}> Electricidad </Text>

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

export default ElectricistMenu
