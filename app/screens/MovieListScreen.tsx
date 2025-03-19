import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { API, NUMBERS } from '../constants';
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
  const url = `${API.URL.MOVIESDB}${API.PATH.POPULAR_MOVIE}`;

  const { data, loading, error } = useAPI<MoviesResponse>({
    url,
    initialData: { results: [] },
    token: ''
  });
  
  if (loading) {
    return <Text>{t('loading')}</Text>;
  }

  if (error) {
    return <Text>{t('error')}: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('popularMovies')}</Text>
      <FlatList
        data={data.results}
        keyExtractor={(item) => item.id.toString()}
        numColumns={NUMBERS.COLUMNS}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              source={{ uri: `${API.URL.IMAGE_DB}${API.PATH.POSTER_PATH}/${item.poster_path}` }}
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