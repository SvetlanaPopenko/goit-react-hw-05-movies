import PropTypes from 'prop-types';
import placeholder from '../../images/placeholder.jpg';
import {
  CastDesc,
  CastGalleryItemWrp,
  CastImage,
  CastTitle,
} from './CastItem.styled';

export const CastItem = ({ cast: { name, character, profile_path } }) => {
  return (
    <CastGalleryItemWrp>
      <CastImage
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : placeholder
        }
        alt={name}
      />
      <div>
        <CastTitle>{name}</CastTitle>
        <CastDesc>Character: {character || 'No name'}</CastDesc>
      </div>
    </CastGalleryItemWrp>
  );
};

CastItem.propTypes = {
  cast: PropTypes.shape({
    name: PropTypes.string,
    character: PropTypes.string,
    profile_path: PropTypes.string,
  }),
};
