import { getWord } from 'helpers/getWord';
import {
  InfoButton,
  CarImage,
  CardContainer,
  InfoBox,
  ButtonTitle,
  MainInfo,
  ModelTitle,
  AdditionalInfo,
  ImageContainer,
} from './AdvertCard.styled';
import { useDispatch } from 'react-redux';
import { onOpenModal } from '../../redux/adverts/advertsSlice';

// ========================

export const AdvertCard = ({ advert }) => {
  const {
    year,
    make,
    model,
    type,
    img,
    engineSize,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = advert;

  const dispatch = useDispatch();

  const onLearnMore = () => {
    dispatch(onOpenModal(advert));
  };

  return (
    <CardContainer>
      <ImageContainer>
        <CarImage loading="lazy" src={img} alt={`${make} ${model}`} />
      </ImageContainer>
      <InfoBox>
        <MainInfo>
          <div>
            {make} <ModelTitle>{model}</ModelTitle>, {year}
          </div>
          {rentalPrice}
        </MainInfo>
        <AdditionalInfo>
          <div>
            <span>{getWord(`${address}`, 1)}</span>
            <span>{getWord(`${address}`, 2)}</span>
            <span>{rentalCompany}</span>
          </div>
          <div>
            <span>{type}</span>
            <span>{engineSize}</span>
            <span>{mileage} km</span>
          </div>
        </AdditionalInfo>
      </InfoBox>
      <InfoButton onClick={onLearnMore}>
        <ButtonTitle>Learn more</ButtonTitle>
      </InfoButton>
    </CardContainer>
  );
};
