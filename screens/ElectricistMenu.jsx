import React from 'react'
import { View, Text } from 'react-native'
import WorkerCard from '../components/WorkerCard'

const ElectricistMenu = () => {
    return (
        <View>
             <Text style = {{fontSize: 24, alignSelf:'center'}}> Electricidad </Text>

             <WorkerCard/>
        </View>
    )
}

export default ElectricistMenu
