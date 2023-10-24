import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { Tecnologias } from "../../components/Tecnologias";
import { Button } from "../../components/Button";

import { style } from "./style";

export function Home(){
    const [nomeTecnologia, setNomeTecnologia] = useState('');
    const [nomes, setNome] = useState([] as string []);
    const [tecnologiasCriadas, setTecnologiasCriadas] = useState(0);


    function addTecnologia(){
        if(nomes.includes(nomeTecnologia) || nomeTecnologia === ''){
            Alert.alert('Error', "Tecnologia já existe ou não foi digitada ainda!");
        }else{
            setNome([...nomes,nomeTecnologia]);
            setTecnologiasCriadas(tecnologiasCriadas + 1);
        }
        setNomeTecnologia('');
        console.log(nomes);
    }

    function removeTecnologia(nome:string){
        Alert.alert('Remove', `Deseja realmente remover : ${ nome}`,[
            {
                text:'Sim',
                onPress:()=>{
                    setNome(nomes.filter(Tecnologias => Tecnologias !== nome))
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
           style = {style.input}
           placeholder="Adicione uma tecnologia"
           placeholderTextColor='#808080'
           onChangeText={text => setNomeTecnologia(text)}
           value={nomeTecnologia}
           />
           <Button
           title="+"
           onPress={addTecnologia}
           />
    </View>

    <View style = {style.containerInfo}>
    <Text style={style.subTituloTec}>Criadas ({tecnologiasCriadas})</Text>
    <Text style={style.subTituloTec}>Concluidas</Text>
    </View>

    <View style={style.containerList}>
        {
            nomes.length === 0 ? (
                <Text style={style.listTec}>Nenhuma tecnologia cadastrada? Adicione alguma a lista</Text>
            ) : (
                nomes.map(item =>(
                    <Tecnologias key={item} nome={item} remove={() => removeTecnologia(item)}/>
                ))
            )
        }
    </View>

</View>
)
}