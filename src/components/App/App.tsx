import { useEffect, useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import SearchBar from '../SearchBar/SearchBar';
import css from './App.module.css'
import type Movie from '../../types/movie'
import axios from 'axios';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const token = import.meta.env.VITE_DOSTRUP;
  const [topic, setTopic] = useState<string>('');
  const [searchList, setSearchList] = useState<Movie[]>([]);

  useEffect(() => {
    if (!topic) return;

    const fetchMovies = async () => {
      setIsLoading(true);
      setError(false);

      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/search/movie',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              query: topic,
              language: 'en-US',
            },
          }
        );
        setSearchList(response.data.results); 
        
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    
    fetchMovies();
    console.log(searchList);

  }, [topic, token]);



  return (
    <div className={css.app}>
      <SearchBar onSubmit={setTopic} />
      {isLoading ? (
        <Loader />
      ) : error !== false ? (
        <ErrorMessage />
      ) : (
        <MovieGrid movies={searchList} />
      )}      
    </div>
  )
}

export default App
