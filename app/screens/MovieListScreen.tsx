import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { API_URLS } from '../constants';
import { styles } from '../styles/MovieListStyle';
import useAPI from '../hooks/useAPI';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MoviesResponse {
  results: Movie[];
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

export default MovieListScreen;