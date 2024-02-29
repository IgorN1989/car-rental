import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';

import { getCondition, getWord } from 'helpers/getWord';
import {
  ModalCustomStyles,
  AdditionalInfo,
  ButtonTitle,
  CarImage,
  CloseButton,
  Condition,
  ConditionInfo,
  Conditions,
  Description,
  Features,
  ImageContainer,
  InfoBox,
  MainInfo,
  ModalContainer,
  ModelTitle,
  OrderButton,
  SectionTitle,
} from './Modal.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectModalContent,
  selectModalStatus,
} from '../../redux/adverts/selectors';
import { onCloseModal } from '../../redux/adverts/advertsSlice';

// ========================

Modal.setAppElement('#root');

export const ModalComponent = () => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(selectModalStatus);
  const modalContent = useSelector(selectModalContent);

  if (!modalStatus || !modalContent) {
    return;
  }
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
    address,
    rentalConditions,
    mileage,
  } = modalContent;

  const features = accessories.concat(functionalities);

  const closeModal = () => {
    dispatch(onCloseModal());
  };

  return (
    <>
      {modalStatus && (
        <Modal
          isOpen={modalStatus}
          onRequestClose={closeModal}
          style={ModalCustomStyles}
        >
          <ModalContainer>
            <CloseButton type="button" onClick={closeModal}>
              <IoMdClose size={24} />
            </CloseButton>

            <ImageContainer>
              <CarImage src={img} alt={`${make} ${model}`} />
            </ImageContainer>

            <InfoBox>
              <MainInfo>
                <div>
                  {make} <ModelTitle>{model}</ModelTitle>, {year}
                </div>
              </MainInfo>

              <AdditionalInfo>
                <div>
                  <span>{getWord(`${address}`, 1)}</span>
                  <span>{getWord(`${address}`, 2)}</span>
                  <span>id: {id}</span>
                  <span>Year: {year}</span>
                  <span>Type: {type}</span>
                </div>
                <div>
                  <span>Fuel Consumption: {fuelConsumption}</span>
                  <span>Engine Size: {engineSize}</span>
                </div>
              </AdditionalInfo>

              <Description>{description}</Description>
              <Features>
                <SectionTitle>Accessories and functionalities:</SectionTitle>
                <div>
                  {features.map((feature, index) => (
                    <span key={index}>{feature}</span>
                  ))}
                </div>
              </Features>
              <Conditions>
                <SectionTitle>Rental Conditions:</SectionTitle>
                <ConditionInfo>
                  {getCondition(rentalConditions).map((condition, index) => (
                    <Condition key={index}>{condition}</Condition>
                  ))}
                  <Condition>
                    Mileage: <span>{mileage}</span>
                  </Condition>
                  <Condition>
                    Price: <span>{rentalPrice}</span>
                  </Condition>
                </ConditionInfo>
              </Conditions>
            </InfoBox>
            <OrderButton>
              <ButtonTitle>Rental car</ButtonTitle>
            </OrderButton>
          </ModalContainer>
        </Modal>
      )}
    </>
  );
};
