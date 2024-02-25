import makes from 'data/makes.json';
import { useSearchParams } from 'react-router-dom';
import {
  BrandSelect,
  ButtonTitle,
  FiltersContainer,
  SearchButton,
} from './Filters.styled';
import { useFormik } from 'formik';

// export const Filters = ({ filters: { brand, price, mileage } }) => {
export const Filters = () => {
  // const [params, setParams] = useSearchParams();
  // const brand = params.get('brand') ?? '';
  // const price = params.get('price') ?? '';
  // const changeBrand = evt => {
  // params.set('brand', evt.target.value);
  //   setParams(params);
  // };

  const options = makes.map(make => ({ value: make, label: make }));

  return (
    <FiltersContainer>
      {/* <BrandSelect value={''}>
        {makes.map((make, index) => (
          <option key={index}>{make}</option>
        ))}
      </BrandSelect> */}

      <input />
      <input />
      <input />
      <SearchButton type="submit">
        <ButtonTitle>Search</ButtonTitle>
      </SearchButton>
    </FiltersContainer>
  );
};
