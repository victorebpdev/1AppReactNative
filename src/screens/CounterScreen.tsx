import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

  const [count, setCount] = useState(10)

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            Count: {count}
        </Text>
      
 <Fab title="+1" position="br" onPress={() => setCount( count + 1 )}/>
 <Fab title="-1" position="bl" onPress={() => setCount( count - 1 )}/>

  
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
    
})
