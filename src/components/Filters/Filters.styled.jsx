import styled from 'styled-components';

export const FiltersContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: end;
  /* min-height: 74px; */
  gap: ${p => p.theme.spacing(8)};
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Select = styled.select`
  width: 224px;
  height: 48px;
  border-radius: ${p => p.theme.radius};
  border: none;
  padding: ${p => p.theme.spacing(7)} ${p => p.theme.spacing(9)};
  background-color: ${p => p.theme.colors.selectBackground};
`;

export const SearchButton = styled.button`
  min-width: 136px;
  height: 48px;
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
