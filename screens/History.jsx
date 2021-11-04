import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const History = () => {
    return (
    <View style = {styles.container}>
        <Text>OtherPage</Text>
        <Text>Mucho mucho texto</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex:1,
        flexDirection:'column'
    }
})

export default History
