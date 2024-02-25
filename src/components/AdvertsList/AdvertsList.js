import { AdvertCard } from 'components/AdvertCard/AdvertCard';
import { List } from './AdvertsList.styled';

// ========================

export const AdvertsList = ({ adverts }) => {
  return (
    <List>
      {adverts.map(advert => (
        <li key={advert.id}>
          <AdvertCard advert={advert} />
        </li>
      ))}
    </List>
  );
};
