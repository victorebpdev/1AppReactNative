import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { Positionscreen } from './src/screens/Positionscreen';
import { TaskScreen } from './src/screens/TaskScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex : 1 }}>
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionsScreen/> */}
      {/* <Positionscreen/> */}
      {/* <FlexScreen/> */}
      <TaskScreen/>
    </SafeAreaView>
    // <HolaMundoScreen />
  )
}

