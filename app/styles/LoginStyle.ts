import { StyleSheet } from 'react-native';
import { COLORS } from '../constants';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: COLORS.SCREEN_BACKGROUND,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    color: COLORS.ERROR,
    marginBottom: 10,
  }
});