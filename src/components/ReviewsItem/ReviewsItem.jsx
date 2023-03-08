import PropTypes from 'prop-types';
import { ReviewContent, ReviewItem, ReviewTitle } from './ReviewsItem.styled';

export const ReviewsItem = ({ review: { author, content } }) => {
  return (
    <ReviewItem>
      <ReviewTitle>{author}</ReviewTitle>
      <ReviewContent>{content}</ReviewContent>
    </ReviewItem>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string,
    content: PropTypes.string,
  }),
};
