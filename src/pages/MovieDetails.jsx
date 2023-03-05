import { useLocation, useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { useEffect, useRef, useState, Suspense } from 'react';
import { getMovieDetails } from 'components/API/FetchApi';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const { location } = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const getMovieById = async movieId => {
      try {
        const data = await getMovieDetails(movieId, {
          signal: controller.signal,
        });
        setMovieDetail(data);
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);

  if (movieDetail) {
    return (
      <div>
        <div>
          <BackLink to={ref.current}>Back</BackLink>
          {movieDetail && <MovieCard data={movieDetail} />}
        </div>
        {isLoading && <Loader />}
        <div>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </li>
            <li>
              <link to="reviews" state={{ from: location.state.from }}>
                Reviews
              </link>
            </li>
          </ul>
        </div>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </div>
    );
  }
};

export default MovieDetails;
