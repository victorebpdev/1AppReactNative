import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {

  const [count, setCount] = useState(10)

  return (
    <View style={{ flex:1, justifyContent:'center'}}>
        <Text style={{fontSize:45,textAlign:'center'}}>
            Count: {count}
        </Text>
        <TouchableOpacity
         onPress={() => setCount( count + 1 )}
        >
            <View style={{ backgroundColor:"#841584", borderRadius:100}}>
                <Text>CLICK ME</Text>

            </View>
        </TouchableOpacity>
    </View>
  )
}
