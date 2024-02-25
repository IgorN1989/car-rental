import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(7)};
  width: 274px;
  border-radius: ${p => p.theme.radius};

  &:hover {
    img {
      transform: scale(1.03);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 274px;
  height: 268px;
  border-radius: ${p => p.theme.radius};
  overflow: hidden;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 268px;
  border-radius: ${p => p.theme.radius};
  object-fit: cover;
  overflow: hidden;
  transition: all ${p => p.theme.transition};
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(4)};
`;

export const MainInfo = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors.mainFont};

  &::first-letter {
    text-transform: capitalize;
  }

  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: ${p => p.theme.spacing(4)};
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
  }
`;

export const InfoButton = styled.button`
  width: 100%;
  height: 44px;
  margin-top: ${p => p.theme.spacing(7)};
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
