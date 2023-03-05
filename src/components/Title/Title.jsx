import PropTypes from 'prop-types';

export const Title = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
