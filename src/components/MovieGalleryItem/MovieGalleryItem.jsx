import { useLocation } from 'react-router-dom';
import { MovieContainer, StyledLink } from './MovieGalleryItem.styled';
import PropTypes from 'prop-types';


export const MovieGalleryItem = ({
  movie: { title, name, poster_path, release_date, id },
}) => {
  const location = useLocation();
  return (
    <MovieContainer>
      <StyledLink to={`movies/${id}`} state={{ from: location }}>
        <div>
          <div>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : ''
              }
              alt={title || name}
            />
          </div>
          <div>
            <h2>{title || name}</h2>
                      <p>Release data : { release_date?.slice(0, 4) || 'not found'}</p>
          </div>
        </div>
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
