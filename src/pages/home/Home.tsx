import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { ICONS } from '../../constants/images';
import { ThemeProvider } from '../../providers/ThemeProvider';

export const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    let parentHeight;

    document.querySelectorAll('.singleLine .textReveal').forEach(el => {
      parentHeight = (el.parentNode as HTMLElement).clientHeight;
    });

    tl.from('.singleLine .textReveal', {
      y: parentHeight,
      ease: 'power4.out',
      duration: 1,
      stagger: 0.2
    });
  }, {});

  return (
    <HomeContainer>
      <HeroContainer>
        <Line className="singleLine" height={'12vh'} mb={'5rem'}>
          <TextReveal className="textReveal">
            <HeroTitle>TILOUNI</HeroTitle>
          </TextReveal>
        </Line>
        <Line className="singleLine" height={'5vh'} mb={'2rem'}>
          <TextReveal className="textReveal">
            <DateContainer>
              <DateText>1994</DateText>
              <Icon src={ICONS.square} size={['10px']}></Icon>
              <DateText>13/09</DateText>
            </DateContainer>
          </TextReveal>
        </Line>
        <HeroDataContainer>
          <Line className="singleLine" height={'5vh'} mb={''}>
            <TextReveal className="textReveal">
              <HeroDataTitle>WEB DEVELOPER</HeroDataTitle>
            </TextReveal>
          </Line>
          <Line className="singleLine" height={'15vh'} mb={''}>
            <TextReveal className="textReveal">
              <HeroDataText>
                Hey, I`m Karim, web developer focused in mern stack, but
                learning and adapting constantly.
              </HeroDataText>
            </TextReveal>
          </Line>
        </HeroDataContainer>
      </HeroContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 1rem;
`;

const HeroContainer = styled.div`
  padding-top: 6rem;
`;

const HeroTitle = styled.h1`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 5rem;
  font-weight: 400;
  font-family: ${ThemeProvider.fonts.primaryMedium};
`;

const DateText = styled.span`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 1.25rem;
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

type LineProps = {
  height: string;
  mb: string;
};

const Line = styled.div<LineProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  margin-bottom: ${({ mb }) => mb};
  /* border: 1px solid white; */
  overflow: hidden;
`;
const TextReveal = styled.div`
  position: absolute;
`;
