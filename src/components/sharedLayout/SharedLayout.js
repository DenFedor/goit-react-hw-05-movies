import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
      <nav>
          <Link to={PAGE_NAMES.home} end>Home</Link>
          <Link to={PAGE_NAMES.movies}>Movies</Link>
        </nav>
        <Logo>
          <img src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg' alt={"The Movie Database (TMDB)"} width={154} height={20} />
        </Logo>
    
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
