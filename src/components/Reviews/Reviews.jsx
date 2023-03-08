import { getMovieReviews } from 'components/API/FetchApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const fetchMovieReview = async movieId => {
      try {
        const data = await getMovieReviews(movieId, {
          signal: controller.signal,
        });
        setReviews(data.results);
        return data;
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieReview(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <Section title="Reviews">
      <ul>
        {reviews.map(review => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
      {isLoading && <Loader />}
      {!!reviews.length || <p>We don`t have reviews for this movie</p>}
    </Section>
  );
};

export default Reviews;
