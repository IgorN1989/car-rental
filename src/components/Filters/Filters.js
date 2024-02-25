import makes from 'data/makes.json';
import {
  BrandSelect,
  ButtonTitle,
  FiltersContainer,
  SearchButton,
} from './Filters.styled';

export const Filters = () => {
  return (
    <FiltersContainer>
      <BrandSelect value={''}>
        {makes.map((make, index) => (
          <option key={index}>{make}</option>
        ))}
      </BrandSelect>

      <input />
      <input />
      <input />
      <SearchButton type="submit">
        <ButtonTitle>Search</ButtonTitle>
      </SearchButton>
    </FiltersContainer>
  );
};
