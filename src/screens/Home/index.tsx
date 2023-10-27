import { useState } from "react";
import { Alert, Text, TextInput, View, Image, ScrollView } from "react-native";
import { Tecnologias } from "../../components/Tecnologias";
import { ButtonAdd, ButtonCheck } from "../../components/Button";
import * as Progress from 'react-native-progress';


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
           <ButtonAdd
           title="+"
           onPress={addTecnologia}
           />
    </View>

    <View style = {style.containerInfo}>
        <View style={style.containerTitulo}>
            <Text style={style.subTituloTec}>Criadas</Text>
            <Text style={style.containerTextTec}>{tecnologiasCriadas}</Text>
        </View>
        <View style={style.containerTitulo}>
            <Text style={style.subTituloTec}>Concluidas</Text>
            <Text style={style.containerTextTec}>{tecnologiasConcluidas}</Text>
        </View>
    </View>

    <View style={style.progressBar}>
        <Progress.Bar style={{backgroundColor:"white", borderRadius:5}}
        progress={tecnologiasConcluidas !== 0 ? tecnologiasConcluidas / tecnologiasCriadas: 0}
        height={2}
        width={null}
        borderWidth={0}
        color="blue"
        unfilledColor= {tecnologiasCriadas !== 0 ? "white" : "blue"}
        />
    </View>
    
    <ScrollView style={style.containerList}>
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
              <ButtonCheck
                title={isChecked[item] ? "✓" : " "}
                onPress={() => toggleCheck(item)}
                style={{width:30,height:30,backgroundColor:'white',alignItems:'center'}} textStyle={{color:'blue'}}
              />
              <Tecnologias nome={item} remove={() => removeTecnologia(item)} isConcluido={isChecked[item]} />
            </View>
            </View>
          ))
        )
    )}

    </ScrollView>

</View>
)
}