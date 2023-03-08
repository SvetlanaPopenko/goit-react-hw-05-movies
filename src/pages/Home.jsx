import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'components/API/FetchApi';
import { Section } from 'components/Section/Section';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Button } from 'components/Button/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const onLoad = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const fetchMovie = async page => {
      try {
        const data = await getTrendingMovie(page, {
          signal: controller.signal,
        });
        setTotalPages(data.total_pages);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        return data.results;
        
      } catch (error) {
        setMovies([]);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie(page);
    return () => {
      controller.abort();
    };
  }, [page]);

  if (movies) {
    return (
      <main>
        <Section>Trending movies</Section>
        <div>{!!movies.length && <MoviesGallery movies={movies} />}</div>
        {!!movies.length && page <= totalPages && (<Button onClick={onLoad} />)}
        {isLoading && <Loader />}
      </main>
    );
  }
};

export default Home;
