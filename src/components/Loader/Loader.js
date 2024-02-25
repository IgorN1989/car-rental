import { Puff } from 'react-loader-spinner';

import { LoaderContainer } from './Loader.styled';

// ========================

export const Loader = () => (
  <LoaderContainer>
    <Puff
      visible={true}
      height="80"
      width="80"
      color="#3470FF"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </LoaderContainer>
);
