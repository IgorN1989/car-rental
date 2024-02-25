import { useState } from 'react';

import { ModalComponent } from 'components/Modal/Modal';
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <InfoButton onClick={openModal}>
        <ButtonTitle>Learn more</ButtonTitle>
      </InfoButton>
      <ModalComponent
        isOpen={isModalOpen}
        onCloseModal={closeModal}
        advert={advert}
      />
    </CardContainer>
  );
};
