import { AdvertsList } from 'components/AdvertsList/AdvertsList';
import { Filters } from 'components/Filters/Filters';
import { CatalogContainer, LoadMoreButton } from './FavoritesPage.styled';
import transition from 'styles/transition';

import adverts from 'data/adverts.json';

function FavoritesPage() {
  return (
    <CatalogContainer>
      <Filters></Filters>
      <AdvertsList adverts={adverts} />
      <LoadMoreButton>Load more</LoadMoreButton>
    </CatalogContainer>
  );
}

export default transition(FavoritesPage);
