import PropTypes from 'prop-types';
import film from '../../images/film.jfif'

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
    <div>
      <div>
        <img
          src={
            poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : film
          }
          alt={title || name}
        />
      </div>
      <div>
        <h2>{title || name}</h2>
        <p>Release data : { release_date?.slice(0, 4) || 'not found'}</p>
        <p>
          User score:<span>{(vote_average * 10).toFixed(1)}%</span>
        </p>
        <p>
          Overview:<span>{overview}</span>
        </p>
        <p>
          Genres:
          <span>
            {genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </span>
        </p>
      </div>
    </div>
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
