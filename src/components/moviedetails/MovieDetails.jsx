import { fetchDetailedById, BASE_IMG_URL } from 'api/getApi';
import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import {
  StyledLink,
  StyledNavLink,
  List,
  Container,
  MovieDetailsWrap,
  Description,
  MoviePoster,
  GenresText,
} from './MovieDetails.styled';
import noImagePoster from '../../images/no_image_poster.png';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const getBack = location.state?.from ?? PAGE_NAMES.home;
  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');
    fetchDetailedById(id)
      .then(({ data }) => {
        setMovie(data);
        setStatus('fulfilled');
      })
      .catch(error => {
        setStatus('error');
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (status === 'idle' || isLoading) {
    return <>Loading...</>;
  }
  if (status === 'error') {
    return <>Occured an error</>;
  }
  const { backdrop_path, title, genres, vote_average, overview,release_date } = movie;
  const genresString = genres
    .map(item => {
      return item.name;
    })
    .join(' ');
    const releaseYear=new Date(release_date).getFullYear()?? '';
  return (
    <Container>
      <div>
        <StyledLink to={getBack}>Go back</StyledLink>
      </div>
      <MovieDetailsWrap>
        <MoviePoster
          src={
            backdrop_path != null ? BASE_IMG_URL + backdrop_path : noImagePoster
          }
          alt={title}
        />
        <div>
          <h2>{title} ({releaseYear})</h2>
          <Description>
            User score: <span>{Math.round(vote_average * 10)}%</span>
          </Description>
          <h3>Overview</h3>
          <Description>{overview}</Description>
          <h3>Genres</h3>
          <GenresText>{genresString ?? 'Genres are not available'}</GenresText>
        </div>
      </MovieDetailsWrap>

      <div>
        <h3>Additional information</h3>
        <List>
          <li>
            <StyledNavLink
              to={PAGE_NAMES.cast}
              replace
              state={{ from: getBack }}
            >
              Cast
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink
              to={PAGE_NAMES.reviews}
              replace
              state={{ from: getBack }}
            >
              Reviews
            </StyledNavLink>
          </li>
          <li>
            <StyledLink to="" replace state={{ from: getBack }}>
              Hide All
            </StyledLink>
          </li>
        </List>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
export default MovieDetails;
