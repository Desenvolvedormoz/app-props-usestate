import React, { useState } from "react";
import { View, Pressable, Text } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import estilos from './estilos'

export default function AppJogo(){

    const [number, setNumber] = useState(20);
    const [jogo, setJogo] = useState(20);

    return(
        <View style={estilos.container}>
        <View style={estilos.containerOneJogo}>

                <Pressable style={estilos.btn}
                 onPress={() =>{number > 0? setNumber(number - 1): 
                 alert('O Valor mínimo do jogo é zero!') }}>
                    <Text ><AntDesign name="minus" size={34} color="#fff" /></Text>
                </Pressable>

                 <View style={estilos.btn}>
                    <Text style={estilos.texto}>{number}</Text>
                </View>

                <Pressable style={estilos.btn} onPress={() => setNumber(number + 1)} >
                    <Text><Ionicons name="add-outline" size={34} color="#fff" /></Text>
                </Pressable>

                <Pressable style={estilos.btn} onPress={() => setNumber(20)}>
                    <Text><FontAwesome name="refresh" size={34} color="#fff" /></Text>
                </Pressable>
             
        </View>
        <View style={estilos.containerJogo}>
            
              <Pressable style={estilos.btn}
               onPress={() =>jogo > 0? setJogo(jogo - 1):
                alert('Você só pode perder até zero!')}>
                <Text><AntDesign name="minus" size={34} color="#FFF"/></Text>
              </Pressable>

              <View style={estilos.btn}>
                <Text style={estilos.texto}>{jogo}</Text>
              </View>

              <Pressable style={estilos.btn} onPress={() => setJogo(jogo + 1)}>
                <Text><Ionicons name="add-outline" size={34} color="#fff"/></Text>
              </Pressable>

              <Pressable style={estilos.btn} onPress={() =>setJogo(20)}>
                <Text><FontAwesome name="refresh" size={34} color="#fff"/> </Text>
              </Pressable>
        </View>
        </View>
    )
}