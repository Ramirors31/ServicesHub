import React from 'react'
import { View, Text } from 'react-native'

const LocksmithMenu = () => {
    return (
        <View>
             <Text style = {{fontSize: 24, alignSelf:'center'}}> Cerrajería </Text>

             <WorkerCard/>
        </View>
    )
}

export default LocksmithMenu
