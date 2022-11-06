import React from "react";
import { View, Pressable, Text } from 'react-native';
import estilos from './estilos'

export default function AppJogo(){
    return(
        <View style={estilos.container}>
        <View style={estilos.containerJogo}>
            <Text>20</Text>
            <View style={estilos.jogoCont}>
                <Pressable onPress={() =>{alert('Jogador 1')}}>
                    <Text>Joguei</Text>
                </Pressable>
                <Pressable onPress='' ></Pressable>
                <Pressable></Pressable>
            </View>  
        </View>
        <View style={estilos.containerJogo}>
            <Text>20</Text>
            <View style={estilos.jogoCont}>
              <Pressable onPress={() => alert('Jogador 2')}>
                <Text>Jogador</Text>
              </Pressable>
              <Pressable></Pressable>
              <Pressable></Pressable>
            </View>
        </View>
        </View>
    )
}