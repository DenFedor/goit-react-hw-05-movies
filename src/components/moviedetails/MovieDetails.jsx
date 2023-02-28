import { fetchDetailedById,BASE_IMG_URL } from 'api/getApi';
import { useEffect, useState,Suspense } from 'react';
import { useParams,generatePath,Outlet,Link,useLocation } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import { StyledLink,StyledNavLink,List } from './MovieDetails.styled';
import noImagePoster from '../../images/no_image_poster.png';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] =useState('idle');
  const location=useLocation();
  const getBack=location.state?.from ?? PAGE_NAMES.home;
  useEffect(() => {
    setIsLoading(true);
    setStatus('loading');
    fetchDetailedById(id)
      .then(({ data }) => {
        setMovie(data);
        setStatus('fulfilled');
      })
      .catch((error)=>{setStatus('error');console.log(error)})
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (status==='idle'|| isLoading) {
    return <>Loading...</>;
  }
  if (status==='error') {
    return <>Occured an error</>;
  }
  const { backdrop_path, title, genres, vote_average, overview } = movie;
  const genresString = genres
    .map(item => {
      return item.name;
    })
    .join(' ');
  return (
    <>
      <div>
        <Link to={getBack}>Go back</Link>
      </div>
      <img src={backdrop_path!=null ? BASE_IMG_URL+backdrop_path : noImagePoster} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>

        <p>{genresString ?? 'Genres are not available'}</p>
      </div>
      <div>
        <p>Additional information</p>
        <List>
          <li>
            <StyledNavLink to={generatePath(PAGE_NAMES.cast,{id: id})} replace>Cast</StyledNavLink>
          </li>
          <li>
          <StyledNavLink to={generatePath(PAGE_NAMES.reviews,{id: id})} replace>Reviews</StyledNavLink>
          </li>
          <li>
            <StyledLink to='' replace>Hide All</StyledLink>
          </li>
        </List>
        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;
