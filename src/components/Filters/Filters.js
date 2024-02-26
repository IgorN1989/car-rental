import makes from 'data/makes.json';
import {
  Select,
  ButtonTitle,
  FiltersContainer,
  SearchButton,
  SelectContainer,
} from './Filters.styled';

const prices = [5, 10, 15, 20, 25, 30, 35];

export const Filters = () => {
  return (
    <FiltersContainer>
      <SelectContainer>
        <label htmlFor="brand-select">Car brand</label>
        <Select id="brand-select" onChange={e => console.log(e.target.value)}>
          <option>Enter the text</option>
          {makes.map((make, index) => (
            <option key={index}>{make}</option>
          ))}
        </Select>
      </SelectContainer>

      <SelectContainer>
        <label htmlFor="price-select">Price</label>
        <Select id="price-select" onChange={e => console.log(e.target.value)}>
          <option>-</option>
          {prices.map((price, index) => (
            <option key={index}>{price}</option>
          ))}
        </Select>
      </SelectContainer>

      <SelectContainer>
        <label htmlFor="mileage-select">Car mileage / km</label>
        <Select
          id="mileage-select"
          onChange={e => console.log(e.target.value)}
        ></Select>
      </SelectContainer>

      <SearchButton>
        <ButtonTitle>Search</ButtonTitle>
      </SearchButton>
    </FiltersContainer>
  );
};
