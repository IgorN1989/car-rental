import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Filters } from 'components/Filters/Filters';
import { CatalogContainer, LoadMoreButton } from './CatalogPage.styled';

export default function CatalogPage() {
  return (
    <CatalogContainer>
      <Filters></Filters>
      <AdvertsList />
      <LoadMoreButton>Load more</LoadMoreButton>
    </CatalogContainer>
  );
}
