import adverts from 'data/adverts.json';
import { List } from './AdvertsList.styled';
import { AdvertCard } from 'components/AdvertCard/AdvertCard';

export const AdvertsList = () => {
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
