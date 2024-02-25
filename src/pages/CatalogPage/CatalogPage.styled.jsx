import styled from 'styled-components';

export const CatalogContainer = styled.div`
  height: calc(100vh - 50px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.spacing(25)};
  padding: ${p => p.theme.spacing(25)} ${p => p.theme.spacing(64)};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.white};
    border: 3px solid ${p => p.theme.colors.accent};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.accent};
    width: 4px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const LoadMoreButton = styled.button`
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(4)};
  cursor: pointer;
  background-color: ${p => p.theme.colors.white};
  border: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: underline;
  color: ${p => p.theme.colors.accent};
  transition: all ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.colors.hover};
  }
`;
