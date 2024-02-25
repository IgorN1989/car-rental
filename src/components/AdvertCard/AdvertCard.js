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
import { getWord } from 'helpers/getWord';

export const AdvertCard = ({ advert }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = advert;
  return (
    <CardContainer>
      <ImageContainer>
        <CarImage src={img} alt={`${make} ${model}`} />
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
      <InfoButton>
        <ButtonTitle>Learn more</ButtonTitle>
      </InfoButton>
    </CardContainer>
  );
};
