import { getMovieReviews } from 'components/API/FetchApi';
import { Loader } from 'components/Loader/Loader';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewError, ReviewsList } from './Reviews.styled';
import PropTypes from 'prop-types';

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
      <ReviewsList>
        {reviews.map(review => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ReviewsList>
      {isLoading && <Loader />}
      {!!reviews.length || (
        <ReviewError>We don`t have reviews for this movie</ReviewError>
      )}
    </Section>
  );
};

Reviews.propTypes = {
  isLoading: PropTypes.bool,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
    })
  ),
};

export default Reviews;
