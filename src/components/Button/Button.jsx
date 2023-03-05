import { LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton onClick={onClick} type="button">
      More
    </LoadButton>
  );
};

