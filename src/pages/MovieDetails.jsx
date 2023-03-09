import { useLocation, useParams, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { useEffect, useRef, useState, Suspense } from 'react';
import { getMovieDetails } from 'components/API/FetchApi';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { LinkList,Link } from 'components/MovieCard/MovieCard.styled';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location  = useLocation();
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
        console.log(error.message);
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
      <>
        <Container>
          <BackLink to={ref.current}>Back</BackLink>
          {movieDetail && <MovieCard data={movieDetail} />}
        </Container>
        {isLoading && <Loader />}
        <Container>
          <LinkList>
            <li>
              <Link to="cast" state={{ from: location }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location }}>
                Reviews
              </Link>
            </li>
          </LinkList>
        </Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
};

MovieDetails.propTypes = {
  movieDetail: PropTypes.object,
  isLoadoing: PropTypes.bool,
};

export default MovieDetails;
