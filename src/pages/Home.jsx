import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'components/API/FetchApi';
import { Title } from 'components/Title/Title';
import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

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
          console.log(data);
        setTotalPage(data.total_pages);
        setMovies(prevMovies => {
          return page === 1 ? data.results : [...prevMovies, ...data.results];
        });
        return data.results;
      } catch (error) {
        setMovies([]);
        console.log(error);
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
        <Title>Trending movies</Title>
        <div>
          {!!movies.length &&
            movies.map(movie => (
              <MovieGalleryItem key={movie.id} movie={movie}></MovieGalleryItem>
            ))}
            </div>
            {!!movies.length&& page<totalPage&& (<button type='button' onClick={onLoad}>More</button>)}
        {isLoading && <Loader />}
      </main>
    );
  }
};

export default Home;
