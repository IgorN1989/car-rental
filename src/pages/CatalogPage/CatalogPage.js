import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectAdverts,
  selectError,
  selectIsLoading,
  selectPagination,
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
  const { page, limit } = useSelector(selectPagination);

  useEffect(() => {
    dispatch(fetchAdverts({ page, limit }));
  }, [dispatch, page, limit]);

  const onLoadMore = () => {
    dispatch(fetchAdverts({ page: page + 1, limit }));
  };

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
          {adverts?.length > 0 && (
            <LoadMoreButton onClick={onLoadMore}>Load more</LoadMoreButton>
          )}
        </Content>
      )}
    </CatalogContainer>
  );
}

export default transition(CatalogPage);
