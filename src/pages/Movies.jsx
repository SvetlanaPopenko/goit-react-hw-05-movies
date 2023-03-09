import { fetchSearchMovie } from 'components/API/FetchApi';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const controller = new AbortController();
    const getMovieBySearch = async (query, page) => {
      try {
        if (!movieName || !query) {
          return;
        }
        setIsLoading(true);
        const data = await fetchSearchMovie(query, page, {
          signal: controller.signal,
        });

        setTotalPages(data.total_pages);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        console.log(data.results);
        return data;
      } catch (error) {
        setMovies([]);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieBySearch(movieName, page);
    return () => {
      controller.abort();
    };
  }, [movieName, page]);

  const handleOnSearch = query => {
    if (query === '' || query === searchQuery) {
      return;
    }
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    setMovies([]);
    setPage(1);
    setSearchQuery(query);
  };

  const onLoad = () => {
    setPage(prevPage => prevPage + 1);
  };
  if (movies) {
    return (
      <main>
        <SearchBar movieName={movieName} onSubmit={handleOnSearch} />
        <Section>
          <MoviesGallery movies={movies} />
        </Section>
        {isLoading && <Loader />}
        {!!movies.length && page < totalPages && <Button onClick={onLoad} />}
      </main>
    );
  }
};


Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  searchQuery:PropTypes.string,
  page: PropTypes.number,
  isLoadoing: PropTypes.bool,
  totalPages:PropTypes.number,
};

export default Movies;
