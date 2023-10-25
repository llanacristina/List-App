import { useState } from "react";
import { Alert, Text, TextInput, View, Image } from "react-native";
import { Tecnologias } from "../../components/Tecnologias";
import { Button } from "../../components/Button";


import { style } from "./style";

export function Home(){
    const [nomeTecnologia, setNomeTecnologia] = useState('');
    const [nomes, setNome] = useState([] as string []);
    const [tecnologiasCriadas, setTecnologiasCriadas] = useState(0);
    const [tecnologiasConcluidas, setTecnologiasConcluidas] = useState(0);

    const [isFocused, setIsFocused] = useState(false);
    const [isChecked, setIsChecked] = useState({} as Record<string, boolean>);

    function toggleCheck(nome: string){
        setIsChecked({...isChecked,[nome]: !isChecked[nome],
        })
        if(isChecked[nome]){
            setTecnologiasConcluidas(tecnologiasConcluidas - 1);
        } else{
            setTecnologiasConcluidas(tecnologiasConcluidas + 1);
        }
    }

    function addTecnologia(){
        if(nomes.includes(nomeTecnologia) || nomeTecnologia === ''){
            Alert.alert('Error', "Tecnologia já existe ou não foi digitada ainda!");
        }else{
            const novaTecnologia = nomeTecnologia.trim();
            if(novaTecnologia){
            setNome([...nomes,nomeTecnologia]);
            setTecnologiasCriadas(tecnologiasCriadas + 1);
            setIsChecked({...isChecked,[novaTecnologia]: false});
            }
        }
        setNomeTecnologia('');
        //console.log(nomes);
    }

    function removeTecnologia(nome:string){
        Alert.alert('Remove', `Deseja realmente remover : ${ nome}`,[
            {
                text:'Sim',
                onPress:()=>{
                    setNome(nomes.filter(Tecnologias => Tecnologias !== nome))
                    setTecnologiasCriadas(tecnologiasCriadas - 1)
                    if (isChecked[nome]) {
                        setTecnologiasConcluidas(tecnologiasConcluidas - 1);
                      }
                }
            },{
                text:'Não'
            }
        ])
    }

return(
    <View style = {style.container}>
        <Text style = {style.title}>Minhas Tecnologias</Text>

        <View style = {style.containerRegisterTec}>
           <TextInput
           style = {[style.input, isFocused && style.textInputFocused,]}
           placeholder="Adicione uma tecnologia"
           placeholderTextColor='#808080'
           onChangeText={text => setNomeTecnologia(text)}
           value={nomeTecnologia}
           onFocus={()=> setIsFocused(true)}
           onBlur={()=> setIsFocused(false)}
           />
           <Button
           title="+"
           onPress={addTecnologia}
           />
    </View>

    <View style = {style.containerInfo}>
    <Text style={style.subTituloTec}>Criadas ({tecnologiasCriadas})</Text>
    <Text style={style.subTituloTec}>Concluidas({tecnologiasConcluidas})</Text>
    </View>

    <View style={style.containerList}>
        {
            nomes.length === 0 ? (
                <View>
                <Text style={style.listTec}>Nenhuma tecnologia cadastrada? Adicione alguma a lista</Text>
                <Image
                    source={require('./caderno.png')}
                    style={style.ImageStyle} 
                     />
                </View>
                
            ) : (
                nomes.map((item =>(
              <View style={style.listItem} key={item}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
              <Button
                title={isChecked[item] ? "✓" : " "}
                onPress={() => toggleCheck(item)}
              />
              <Tecnologias nome={item} remove={() => removeTecnologia(item)} />
            </View>
            </View>
          ))
        )
    )}

    </View>

</View>
)
}