import React from 'react'
import {  View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props  {
    title: string;
    position?: 'br' | 'bl';
    onPress: () => void;
}
// todo: FIX WHY fab right don't animate when its touched

export const Fab = ({title, onPress, position = 'br'}: Props) => {
  return (
      <View style={[
        styles.btnFabLocation,
        (position === 'bl') ? styles.btnBL : styles.btnBR
    ]
    }>

    <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('black', false,30)}
        onPress={onPress}>
        <View style={styles.botttomFab}>
            <Text style={styles.bottomFabTxt}> {title}</Text>
        </View>
    </TouchableNativeFeedback>
      </View>
  )
}

const styles = StyleSheet.create({

    bottonIncrement:{
        backgroundColor:"#841584", 
        borderRadius:100,
        
    },
    btnFabLocation:{
        position:'absolute',
        bottom:25,
    
        shadowColor: "#000",

    },
    btnBR:{
        right:25,
    },
    btnBL:{
        left:25,
    },
    botttomFab:{
        backgroundColor:"#841584", 
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    bottomFabTxt:{
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
        alignSelf:'center'
    }
    
})