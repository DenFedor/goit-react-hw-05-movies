import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//      
import { fetchReviewsById } from 'api/getApi';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    fetchReviewsById(id)
      .then(({ data }) => {
        setReviews(data.results);
        setStatus('fulfilled');
      })
      .catch(error => {
        setStatus('error');
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
       <h3>Reviews</h3>
      { reviews.length > 0?
      reviews.map(({id,author,content,updated_at}) => {
        var formattedDate = new Date(updated_at).toLocaleString();
        return (
          <div key={id}>
            <h2>Author: {author}</h2>
            <p>
            {content}
            </p>
            <b>Last updated: {formattedDate}</b>
          </div>
        );
      }): <div>We don't have any reviews for this movie yet</div>}
    </section>
  );
};
export default Reviews;
