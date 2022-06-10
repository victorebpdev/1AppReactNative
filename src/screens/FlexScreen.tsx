import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}>BOX 1</Text>
        <Text style={styles.box2}>BOX 2</Text>
        <Text style={styles.box3}>BOX 3</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28C4D9',
        // flexDirection: 'row',  // set the direccion of items 
        alignItems : 'flex-start', // set de dimension about the content that have itself  or text,etc
        //  justifyContent: 'flex-end', // set de location in the father layout but not reverse the items 
    },
    box1:{
        // flex:3,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'center',  // set likewise the position in the content father 
    },
    box2:{
        // flex:2,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-start'
    },
    box3:{
        // flex:1,
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-end',
    }
})
