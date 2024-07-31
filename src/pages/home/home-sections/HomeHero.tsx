import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { TextRevealed } from '../../../components/text-revealed/TextRevealed';
import { ICONS } from '../../../constants/images';
import { ThemeProvider } from '../../../providers/ThemeProvider';

export const HomeHero = () => {
  return (
    <HeroContainer className="heroContainerHome">
      <TextRevealed
        lineClassName="lineHeroHome"
        revealClassName="textRevealHeroHome"
        height="12vh"
        mb="5rem"
      >
        <HeroTitle className="heroTitleHome">TILOUNI</HeroTitle>
      </TextRevealed>
      <TextRevealed
        lineClassName="lineHeroHome"
        revealClassName="textRevealHeroHome"
        height="5vh"
        mb="2rem"
      >
        <DateContainer className="heroDateHome">
          <DateText>1994</DateText>
          <Icon src={ICONS.square} size={['10px']}></Icon>
          <DateText>13/09</DateText>
        </DateContainer>
      </TextRevealed>
      <HeroDataContainer className="heroDataHome">
        <TextRevealed
          lineClassName="lineHeroHome"
          revealClassName="textRevealHeroHome"
          height={'5vh'}
          mb={'0px'}
        >
          <HeroDataTitle>WEB DEVELOPER</HeroDataTitle>
        </TextRevealed>
        <TextRevealed
          lineClassName="lineHeroHome"
          revealClassName="textRevealHeroHome"
          height={'15vh'}
          mb={'0px'}
        >
          <HeroDataText>
            Hey, I`m Karim, web developer focused in mern stack, but learning
            and adapting constantly.
          </HeroDataText>
        </TextRevealed>
      </HeroDataContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
`;
const HeroTitle = styled.h1`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 20vw /* 5rem */;
  font-weight: 400;
  font-family: ${ThemeProvider.fonts.primaryMedium};
`;

const DateText = styled.span`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 4vw /*  1.25rem */;
  font-family: ${ThemeProvider.fonts.tertiary};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const HeroDataContainer = styled.div``;

const HeroDataTitle = styled.h2`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 1.875rem;
  font-family: ${ThemeProvider.fonts.primaryRegular};
  font-weight: 300;
`;

const HeroDataText = styled.p`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 20px;
  font-family: ${ThemeProvider.fonts.secondary};
  line-height: 2rem;
`;
