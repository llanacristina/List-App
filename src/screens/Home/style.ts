import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 75,
    backgroundColor: '#131016',
  },
  title: {
    color: '#FDFCFE',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign:'center'
  },
  containerRegisterTec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 44,
    marginBottom: 34,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: 'black',
    padding: 12,
    borderColor: 'transparent',
    borderWidth: 2,
  },
  textInputFocused: {
    borderColor: 'blue',
    //shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  subTituloTecD: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  containerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    //borderBottomWidth:1,
    borderColor:"#A9A9A9",
    paddingBottom: 10,
    alignItems: 'center',
    //marginBottom:5

  },
  subTituloTec: {
    color: '#FDFCFE',
    fontSize: 15,
    fontWeight: 'bold',
    margin:5,
    borderRadius:10

  },
  containerList: {
    marginTop: 24,
  },
  listTec: {
    color: '#4F4F4F',
    fontSize: 20,
    textAlign: 'center',
  },
  ImageStyle: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    margin: 10
  },
  listItem:{
    margin: 10,
    width:290,
   },
   containerTitulo:{
    display: 'flex', 
    flexDirection: 'row',
    alignItems:'center'
   },
   containerTextTec:{
    backgroundColor: '#FFFFFF',
    borderRadius: 90, 
    textAlign: 'center', 
    height: 20,
    width:30,
    color:'#808080'
   },
   progressBar:{}

})