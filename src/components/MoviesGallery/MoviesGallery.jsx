import { MovieGalleryItem } from 'components/MovieGalleryItem/MovieGalleryItem';
import PropTypes from 'prop-types';
import { MovieGalleryList } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <MovieGalleryList>
      {movies.map(movie => (
        <MovieGalleryItem key={movie.id} movie={movie} />
      ))}
    </MovieGalleryList>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
