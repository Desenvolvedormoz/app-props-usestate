import React from 'react';
import { Text, View } from 'react-native';
import AppJogo from './Componts/Pontos';

export default function App() {
  return (
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>Jogo de cartas</Text>
   <AppJogo/>
    </View>
  );
}
