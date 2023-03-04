import { useLocation } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { BackLink } from 'components/BackLink';
import { useRef } from 'react';

const MovieDetails = () => {
//   const { movieId } = useParams();
  const { location } = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  return (
    <div>
      <BackLink to={ref.current}>Back to movies</BackLink>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <link to="reviews">Reviews</link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
