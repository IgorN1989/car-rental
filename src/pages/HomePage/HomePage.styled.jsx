import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: ${p => p.theme.spacing(16)};
  padding-left: ${p => p.theme.spacing(64)};
  background-image: linear-gradient(
      to left,
      rgba(52, 112, 255, 0.1),
      rgba(52, 112, 255, 0.8)
    ),
    url('https://res.cloudinary.com/dqh1mef9o/image/upload/v1708859343/Car-Hero_1920x800_pyqdgi.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${p => p.theme.spacing(16)};
  width: 540px;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${p => p.theme.colors.white};
`;

export const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 274px;
  height: 48px;
  border: none;
  border-radius: ${p => p.theme.radius};
  background-color: ${p => p.theme.colors.accent};
  cursor: pointer;
  transition: all ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const ButtonTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: ${p => p.theme.colors.white};

  &::first-letter {
    text-transform: capitalize;
  }
`;
