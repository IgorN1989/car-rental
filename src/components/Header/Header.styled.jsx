import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${p => p.theme.colors.accent};
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  padding: 6px ${p => p.theme.spacing(64)} 0 ${p => p.theme.spacing(64)};
`;
