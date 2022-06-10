import React from 'react'
import { StyleSheet, View } from 'react-native';

export const Positionscreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
        <View style={styles.redBox}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#28C4D9',
        // height:400,
        // width:400,
    },
    purpleBox:{
        width:100,
        height:100,
        backgroundColor: '#5856D6',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        top:0,
        right:0,
    },
    orangeBox:{
        width:100,
        height:100,
        backgroundColor: '#F0A23B',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        right:0,
        bottom:0
    },
    redBox:{
        width:100,
        height:100,
        backgroundColor: 'red',
        borderWidth:10,
        borderColor: 'white',
        position:'absolute',
        left:0,
        bottom:0,
        // ...StyleSheet.absoluteFillObject,
    },
})