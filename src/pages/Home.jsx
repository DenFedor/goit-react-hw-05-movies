import { fetchTrending } from 'api/getApi';
import { useEffect, useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';

const Home = () => {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    fetchTrending().then(({ data }) => {
      setTrending(data.results);
    });
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trending.map(({ id, title, original_title,release_date }) => {
          return (
            <li key={id}>
              <Link to={generatePath(PAGE_NAMES.movie,{id: id})}>{title ?? original_title} ({release_date.slice(0,4)??''})</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Home;
