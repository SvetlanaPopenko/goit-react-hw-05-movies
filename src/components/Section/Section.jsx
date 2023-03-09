import { Container } from 'components/SharedLayout/SharedLayout.styled';
import PropTypes from 'prop-types';
import { SectionMain, Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionMain>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </SectionMain>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
