import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.SCREEN_BACKGROUND,
  },
  pickerContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  picker: {
    marginRight:20,
    height: 60,
    width:120,
    backgroundColor: 'white',
    marginTop: 60,
  },
  formHeaderText: {
    marginLeft:20,
    fontSize:26,
    fontWeight: 'bold',
    color: COLORS.PRIMARY
  },
  loginForm: {
    flex: 0.4,
    margin:20,
    borderRadius: 12,
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textLabel:{
    fontSize:16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: COLORS.PRIMARY
  },
  passwordLabel:{
    marginTop: 20,
  },
  passwordInput: {
    marginBottom: 32,
  },
  input: {
    fontSize:16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    marginTop:8,
    fontSize:16,
    color: COLORS.ERROR,
  }
});