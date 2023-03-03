import { Outlet } from 'react-router-dom';
import { StyledLink, Container } from './SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
          </nav>
          <Outlet/>
    </Container>
  );
};
