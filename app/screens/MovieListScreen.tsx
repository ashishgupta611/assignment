// screens/Screen2.tsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const MovieListScreen: React.FC = () => {
  const { t } = useTranslation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [apiKey]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('popularMovies')}</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.movieTitle}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MovieListScreen;