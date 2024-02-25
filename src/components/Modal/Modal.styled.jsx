import styled from 'styled-components';

export const ModalCustomStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(18, 20, 23, 0.5)',
    backdropFilter: 'blur(1px)',
    zIndex: 1200,
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '14px',
    padding: 0,
  },
};

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 541px;
  padding: ${p => p.theme.spacing(20)};
  overflow: hidden;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
  right: 16px;
  top: 16px;
  color: ${p => p.theme.colors.mainFont};
  background-color: inherit;
  transition: all ${p => p.theme.transition};
  cursor: pointer;

  &:hover {
    color: ${p => p.theme.colors.hover};
  }
`;

export const ImageContainer = styled.div`
  width: 461px;
  height: 248px;
  border-radius: ${p => p.theme.radius};
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 248px;
  border-radius: ${p => p.theme.radius};
  object-fit: cover;
  overflow: hidden;
  transition: all ${p => p.theme.transition};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
  margin-top: ${p => p.theme.spacing(7)};
`;

export const MainInfo = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors.mainFont};

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const ModelTitle = styled.span`
  color: ${p => p.theme.colors.accent};
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(2)};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${p => p.theme.colors.secondFont};

  span {
    padding: 0 ${p => p.theme.spacing(3)};
    white-space: nowrap;
    text-transform: capitalize;

    &:not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.line};
    }

    &:first-child {
      padding-left: 0;
    }
  }
`;

export const Description = styled.div`
  margin-top: ${p => p.theme.spacing(3)};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${p => p.theme.colors.mailFont};
`;

export const SectionTitle = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${p => p.theme.colors.mailFont};
`;

export const Features = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(4)};
  margin-top: ${p => p.theme.spacing(8)};
  max-height: 68px;
  overflow: hidden;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(3)};
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${p => p.theme.colors.secondFont};
    white-space: nowrap;
    text-transform: capitalize;
    padding-right: ${p => p.theme.spacing(3)};

    &:not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.line};
    }

    &:first-child {
      padding-left: 0;
    }
  }
`;

export const Conditions = styled.div`
  margin-top: ${p => p.theme.spacing(8)};
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
`;

export const ConditionInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(4)};
`;

export const Condition = styled.div`
  height: 32px;
  padding: 7px 14px;
  border: none;
  border-radius: 35px;
  background-color: rgba(249, 249, 249, 1);
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: rgba(54, 53, 53, 1);

  span {
    color: ${p => p.theme.colors.accent};
  }
`;

export const OrderButton = styled.button`
  width: 168px;
  height: 44px;
  margin-top: ${p => p.theme.spacing(8)};
  border: none;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  text-align: center;
  transition: all ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ButtonTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${p => p.theme.colors.white};

  &::first-letter {
    text-transform: capitalize;
  }
`;
