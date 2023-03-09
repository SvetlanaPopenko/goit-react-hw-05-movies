import { useLocation } from 'react-router-dom';
import { MovieContainer, StyledLink, MovieItem, MovieImage, MovieName, MovieRelease } from './MovieGalleryItem.styled';
import PropTypes from 'prop-types';
import film from '../../images/film.jpg';

export const MovieGalleryItem = ({
  movie: { title, name, poster_path, release_date, id },
}) => {
  const location = useLocation();
  return (
    <MovieContainer>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <MovieItem>
          <MovieImage
            src={
              poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : film
            }
            alt={title || name}
          />
          <div>
            <MovieName>{title || name}</MovieName>
            <MovieRelease>Release data : {release_date?.slice(0, 4) || 'not found'}</MovieRelease>
          </div>
        </MovieItem>
      </StyledLink>
    </MovieContainer>
  );
};

MovieGalleryItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    id: PropTypes.number,
  }),
};
