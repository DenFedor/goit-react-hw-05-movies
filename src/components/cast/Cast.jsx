import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container,CardWrapper,ItemName } from './Cast.styled';
import { fetchCastById,BASE_IMG_URL } from 'api/getApi';
import noImage from '../../images/noImage.jpg';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    fetchCastById(id)
      .then(({ data }) => {
        setCast(data.cast);
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

  return (
    <section>
      <h3>Cast</h3>

      <Container>
        {cast.length>0? cast.map(({ id,name, profile_path, character }) => {
          return (
            <CardWrapper key={id}>
                <img
                src={profile_path!=null ? BASE_IMG_URL+profile_path : noImage }
                alt={name}
                width='198'
                height='297'
              />
              
              <ItemName>{name}</ItemName>
              <ItemName>Character: {character}</ItemName>
            </CardWrapper>
          );
        }):<div>We don't have any casts for this movie yet</div>}
      </Container>
    </section>
  );
};
export default Cast;
