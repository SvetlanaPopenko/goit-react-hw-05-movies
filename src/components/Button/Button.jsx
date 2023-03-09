import { LoadButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <LoadButton onClick={onClick} type="button">
      More
    </LoadButton>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
};
