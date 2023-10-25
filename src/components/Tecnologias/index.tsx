import React from "react";
import { Text, TouchableOpacity, View,Image } from "react-native";
import { Button } from "../Button";
import { style } from "./style";

interface TecnologiasProps {
  nome: string;
  remove: (nome: string) => void;
}

export function Tecnologias({ nome, remove }: TecnologiasProps) {
  return (
    <View style={style.container}>
      <Text style={style.nomeTecnologia}>{nome}</Text>
      {/* <Button title="-" onPress={() => remove(nome)} /> */}
      <TouchableOpacity onPress={() => remove(nome)}>
        <Image
          source={require('./imageL.png')} 
        />
      </TouchableOpacity>
    </View>
  );
}
