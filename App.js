import React from 'react';
import { Text, View } from 'react-native';
import AppJogo from './Componts/Pontos';
import estilos from './Componts/Pontos/estilos';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={{fontSize: 20, fontWeight: '900'}}>Jogo de cartas</Text>
   <AppJogo/>
    </View>
  );
}
