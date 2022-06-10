import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            BOX OBJECT MODEL
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'red'
  },
  title:{
    paddingHorizontal: 100,
    paddingVertical:20,
    fontSize:20,
    marginRight:10,
    marginLeft:10,
    borderWidth:10,
  }
})