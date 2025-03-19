import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieItem: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
  },
  poster: {
    width: 150,
    height: 200,
    borderRadius: 8,
  },
  movieTitle: {
    marginTop: 8,
    textAlign: 'center',
  },
});
