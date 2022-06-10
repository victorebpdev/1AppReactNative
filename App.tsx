import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex : 1 }}>
      {/* <BoxObjectModelScreen/> */}
      <DimensionsScreen/>
    </SafeAreaView>
    // <HolaMundoScreen />
  )
}

