import React from 'react';
import { View } from 'react-native';
import AppJogo from './Componts/Pontos';
import estilos from './Componts/Pontos/estilos';

export default function App() {
  return (
    <View style={estilos.container}>
   <AppJogo/>
    </View>
  );
}
