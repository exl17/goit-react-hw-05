// src/pages/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            query,
            include_adult: false,
            language: 'en-US',
            page: 1,
          },
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDZiNmIxYzRjYmM5YThiYjJiMDMxYWE5NzNiYmQyZSIsInN1YiI6IjY2MTgwOGE5ZDhmNDRlMDE3YzJmMWRiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GWxBxPnivlKlI9-9Y_WaGpJq7urxVBOm-SJj5oHxp_U'
          },
        });
        setResults(response.data.results);
      } catch (error) {
        console.error('Помилка при отриманні результатів пошуку:', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h2>Результати пошуку для &quot;{query}&quot;</h2>
      <ul>
        {results.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
