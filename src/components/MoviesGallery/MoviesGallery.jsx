import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import PropTypes from 'prop-types';

export const MoviesGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieGalleryItem key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};