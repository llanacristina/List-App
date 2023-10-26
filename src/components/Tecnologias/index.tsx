import React from "react";
import { Text, TouchableOpacity, View,Image, TextStyle } from "react-native";
import { style } from "./style";

interface TecnologiasProps {
  nome: string;
  remove: (nome: string) => void;
  isConcluido: boolean;
}

export function Tecnologias({ nome, remove,isConcluido }: TecnologiasProps) {
  const textStyle: TextStyle = {
    textDecorationLine: isConcluido ? 'line-through' : 'none', color:isConcluido ? 'blue' : 'white',
  };

  return (
    <View style={style.container}>
      <Text style={[style.nomeTecnologia,textStyle]}>{nome}</Text>
      <TouchableOpacity onPress={() => remove(nome)}>
        <Image
          source={require('./imageL.png')} 
        />
      </TouchableOpacity>
    </View>
  );
}
