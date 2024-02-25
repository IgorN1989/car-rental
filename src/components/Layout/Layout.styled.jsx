import styled from 'styled-components';

export const LayoutContainer = styled.div`
  .slide-in {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${p => p.theme.colors.accent};
    transform-origin: right;
  }

  .slide-out {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${p => p.theme.colors.accent};
    transform-origin: left;
  }
`;
