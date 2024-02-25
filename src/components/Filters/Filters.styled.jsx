import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: end;
  /* width: 859px; */
  min-height: 74px;
  gap: ${p => p.theme.spacing(8)};
  outline: 1px solid red;
`;

export const BrandSelect = styled.input`
  width: 224px;
  border-radius: ${p => p.theme.radius};
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
