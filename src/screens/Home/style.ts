import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 75,
    backgroundColor: '#131016'
  },
  title: {
    color: '#FDFCFE',
    fontSize: 34,
    fontWeight: 'bold'
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
    fontWeight: 'bold'
  },
  containerInfo: {
    flexDirection: 'row',
  },
  subTituloTec: {
    color: '#FDFCFE',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 220

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
  }

})