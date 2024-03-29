import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../../redux/adverts/advertsSlice';
import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectPage,
} from '../../redux/adverts/selectors';
import { fetchAdverts } from '../../redux/adverts/operations';

import { Loader } from 'components/Loader/Loader';
import { Filters } from 'components/Filters/Filters';
import { AdvertsList } from 'components/AdvertsList/AdvertsList';

import {
  CatalogContainer,
  Content,
  ErrorMessage,
  LoadMoreButton,
  Message,
} from './CatalogPage.styled';
import transition from 'styles/transition';

// ========================

function CatalogPage() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit: 12 }));
  }, [dispatch, page]);

  const onLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  const isLastPage = adverts.length % 12 !== 0;

  return (
    <CatalogContainer>
      {isLoading && <Loader />}

      {error ? (
        <ErrorMessage>
          Oops... something went wrong! Please reload this page!
        </ErrorMessage>
      ) : (
        <Content>
          <Filters />
          <AdvertsList adverts={adverts} />
          {!adverts?.length && <Message>No Matches</Message>}
          {adverts?.length > 0 && !isLastPage && (
            <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
          )}
        </Content>
      )}
    </CatalogContainer>
  );
}

export default transition(CatalogPage);
