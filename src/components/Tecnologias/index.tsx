import React from "react";
import { Text, View } from "react-native";
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
      <Button title="-" onPress={() => remove(nome)} />
    </View>
  );
}
