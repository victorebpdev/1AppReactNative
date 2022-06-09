import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const CounterScreen = () => {

  const [count, setCount] = useState(10)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Count: {count}
        </Text>
        <TouchableOpacity
        style={styles.btnFabLocationBL}
         onPress={() => setCount( count + 1 )}
        >
            <View style={styles.botttomFab}>
                <Text style={styles.bottomFabTxt}> + 1</Text>

            </View>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.btnFabLocationBR}
         onPress={() => setCount( count - 1 )}
        >
            <View style={styles.botttomFab}>
                <Text style={styles.bottomFabTxt}> - 1</Text>

            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1, 
        justifyContent:'center'
    },
    title:{
        fontSize:45,
        textAlign:'center'
    },
    bottonIncrement:{
        backgroundColor:"#841584", 
        borderRadius:100
    },
    btnFabLocationBL:{
        position:'absolute',
        bottom:25,
        right:25,
    },
    btnFabLocationBR:{
        position:'absolute',
        bottom:25,
        left:25,
    },
    botttomFab:{
        backgroundColor:"#841584", 
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
    },
    bottomFabTxt:{
        color: 'Blue',
        fontSize:25,
        fontWeight: 'bold',
        alignSelf:'center'
    }
    
})
