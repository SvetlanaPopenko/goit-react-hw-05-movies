import PropTypes from 'prop-types';
import { SectionMain, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionMain>
      <div>
        <Title>{title}</Title>
        {children}
      </div>
    </SectionMain>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
