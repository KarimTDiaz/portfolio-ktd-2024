import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { ICONS } from '../../constants/images';
import { ThemeProvider } from '../../providers/ThemeProvider';

export const Socials = () => {
  return (
    <StyledSocialsContainer>
      <SocialsLinkContainer>
        <SocialsLink>LNK</SocialsLink>
        <Icon src={ICONS.arrowDown} size={['10px']} />
      </SocialsLinkContainer>
      <SocialsLinkContainer>
        <SocialsLink>GIT</SocialsLink>
        <Icon src={ICONS.arrowDown} size={['10px']} />
      </SocialsLinkContainer>
      <SocialsLinkContainer>
        <SocialsLink>INS</SocialsLink>
        <Icon src={ICONS.arrowDown} size={['10px']} />
      </SocialsLinkContainer>
    </StyledSocialsContainer>
  );
};

const StyledSocialsContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;

const SocialsLinkContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.5rem;
`;

const SocialsLink = styled.p`
  color: ${ThemeProvider.colors.core.secondary};
  font-family: ${ThemeProvider.fonts.tertiary};
`;
