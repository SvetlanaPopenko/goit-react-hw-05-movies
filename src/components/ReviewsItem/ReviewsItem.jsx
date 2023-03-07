export const ReviewsItem = ({ review: { autor, content } }) => {
  return (
    <li>
      <h3>{autor}</h3>
      <p>{content}</p>
    </li>
  );
};
