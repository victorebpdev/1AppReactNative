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
         onPress={() => setCount( count + 1 )}
        >
            <View style={styles.bottonIncrement}>
                <Text>CLICK ME</Text>

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
    }
})
