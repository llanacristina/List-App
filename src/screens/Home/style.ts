import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal:24,
        paddingTop:75,
        backgroundColor:'#131016'
      },
      title:{
        color:'#FDFCFE',
        fontSize:34,
        fontWeight:'bold'
      },
      containerRegisterTec:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:44,
        marginBottom:34,
      },
      input:{
    flex:1,
    height:56,
    backgroundColor:'#1F1E25',
    fontSize:14,
    color:'#FDFCFE',
    padding:12,
    borderRadius:4
  },
  subTituloTecD:{
    color:'#FDFCFE',
    fontSize:24,
    fontWeight:'bold'
  },
 containerInfo:{
  flexDirection: 'row',
 } ,
  subTituloTec:{
    color:'#FDFCFE',
    fontSize:15,
    fontWeight:'bold',
    marginRight: 200

  },
  containerList:{
    marginTop:24
  },
  listTec:{
    color:'#4F4F4F',
    fontSize:20,
    textAlign:'center'
  }

})