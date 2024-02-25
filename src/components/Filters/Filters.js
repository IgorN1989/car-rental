import makes from 'data/makes.json';
import { useSearchParams } from 'react-router-dom';
import { ButtonTitle, Form, SearchButton } from './Filters.styled';

// export const Filters = ({ filters: { brand, price, mileage } }) => {
export const Filters = () => {
  // const [params, setParams] = useSearchParams();
  // const brand = params.get('brand') ?? '';
  // const price = params.get('price') ?? '';
  // const changeBrand = evt => {
  // params.set('brand', evt.target.value);
  //   setParams(params);
  // };

  return (
    <Form>
      <select value={''}>
        {makes.map((make, index) => (
          <option key={index}>{make}</option>
        ))}
      </select>
      <input />
      <input />
      <input />
      <SearchButton type="submit">
        <ButtonTitle>Search</ButtonTitle>
      </SearchButton>
    </Form>
  );
};
