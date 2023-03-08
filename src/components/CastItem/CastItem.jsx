import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.png'
import { CastImage } from './CastItem.styled';

export const CastItem = ({ cast: { name, character, profile_path }, }) => {
  return (
    <li>
      <CastImage
        src={
          profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : placeholder
        }
        alt={name}
      />
      <div>
        <h2>{name}</h2>
        <p>Character: {character || 'No name'}</p>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
