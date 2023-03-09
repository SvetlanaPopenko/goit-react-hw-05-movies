import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.target.search.value.trim().toLowerCase());
    evt.currentTarget.reset();
  };
  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch width={60} height={60} />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormButton>

        <SearchFormInput
          name="search"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

SearchBar.propTypes = {
  onsubmit: PropTypes.func,
};
