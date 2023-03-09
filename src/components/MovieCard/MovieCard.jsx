import PropTypes from 'prop-types';
import film from '../../images/film.jfif';
import { MovieContainer, MovieImage, MovieTitle, MovieDesc, MovieSpan } from './MovieCard.styled';

export const MovieCard = ({
  data: {
    title,
    name,
    poster_path,
    overview,
    genres,
    vote_average,
    release_date,
  },
}) => {
  return (
    <MovieContainer>
      <div>
        <MovieImage
          src={
            poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : film
          }
          alt={title || name}
        />
      </div>
      <div>
        <MovieTitle>{title || name}</MovieTitle>
        <MovieDesc>Release data : { release_date?.slice(0, 4) || 'not found'}</MovieDesc>
        <MovieDesc>
          User score :<MovieSpan>{(vote_average * 10).toFixed(1)}%</MovieSpan>
        </MovieDesc>
        <MovieDesc>
          Overview :<MovieSpan>{overview}</MovieSpan>
        </MovieDesc>
        <MovieDesc>
          Genres :
          <MovieSpan>
            {genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </MovieSpan>
        </MovieDesc>
      </div>
    </MovieContainer>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }),
};
