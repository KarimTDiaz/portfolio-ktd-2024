import styled from 'styled-components';
import { ThemeProvider } from '../../providers/ThemeProvider';

export const SectionTitle = styled.h2`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 30px;
  font-weight: 300;
  font-family: ${ThemeProvider.fonts.primaryRegular};
`;

export const GreenText = styled.span`
  font-size: 20px;
  font-family: ${ThemeProvider.fonts.tertiary};
  line-height: 2rem;
  opacity: 1;
  color: ${ThemeProvider.colors.misc.primary};
`;

export const HomeProjectsButton = styled.div`
  position: absolute;
  top: 250px;
  left: 20vw;
  display: flex;
  align-items: center;
  padding: 2rem;
  color: ${ThemeProvider.colors.core.secondary};
  width: 150px;
  height: 150px;
  border: solid 2px white;
  border-radius: 50%;
  text-align: center;
  opacity: 0;
  transform: translateY(-150) scale(0);
`;
