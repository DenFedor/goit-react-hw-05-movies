import {
  useSearchParams,
  Link,
  generatePath,
  useLocation,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from 'api/getApi';
import { PAGE_NAMES } from 'router/paths';
export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  useEffect(() => {
    if (query === '' || query == null) {
      return;
    }
    setStatus('loading');
    fetchMovieByName(query)
      .then(({ data }) => {
        setMovies(data.results);
        setStatus('fulfilled');
      })
      .catch(error => {
        setStatus('error');
        console.log(error);
      })
      .finally(() => {});
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const userQuery = form.elements.input.value;
    // Delete extra spaces from user query.
    const formatedQuery = userQuery
      .split(' ')
      .filter(e => e)
      .join(' ');
    setSearchParams({ query: formatedQuery });
    form.reset();
  };

  if (status === 'error') {
    return <>Occured an error</>;
  }
  return (
    <>
      <form type="submit" onSubmit={handleSubmit}>
        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          required
        />
        <button>Search</button>
      </form>

      {
        <section>
          <ul>
            {movies.map(({ id, title, original_title, release_date }) => {
              return (
                <li key={id}>
                  <Link
                    to={generatePath(PAGE_NAMES.id, { id: id })}
                    state={{ from: location }}
                  >
                    {title ?? original_title} ({release_date.slice(0, 4) ?? ''})
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      }
    </>
  );
};
export default Movies;
