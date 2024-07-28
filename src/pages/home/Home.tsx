import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/icon/Icon';
import { ScrollUi } from '../../components/scroll-ui/ScrollUi';
import { ICONS } from '../../constants/images';
import { ThemeProvider } from '../../providers/ThemeProvider';
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const titleRef = useRef<HTMLDivElement>();
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
      stagger: 0.2,
      delay: 1
    });
  }, {});
  useGSAP(() => {
    gsap.fromTo(
      '.heroTitle',
      { y: 0, scale: 1 },
      {
        y: 0,
        scale: 1.1,
        opacity: 0,
        scrollTrigger: {
          trigger: '.trigger',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  }, {});
  useGSAP(() => {
    gsap.fromTo(
      '.heroData',
      { y: 0 },
      {
        y: 200,
        opacity: 0,
        scrollTrigger: {
          trigger: '.trigger',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  }, {});
  useGSAP(() => {
    gsap.fromTo(
      '.heroDate',
      { x: 0 },
      {
        x: -40,
        opacity: 0,
        scrollTrigger: {
          trigger: '.trigger',
          start: 'top top',
          end: 'bottom center',
          toggleActions: 'play none none reset',
          scrub: true
        }
      }
    );
  }, {});

  return (
    <HomeContainer>
      <HeroContainer className="trigger">
        <Line className="singleLine" height={'12vh'} mb={'5rem'}>
          <TextReveal className="textReveal ">
            <HeroTitle className="heroTitle">TILOUNI</HeroTitle>
          </TextReveal>
        </Line>
        <Line className="singleLine" height={'5vh'} mb={'2rem'}>
          <TextReveal className="textReveal">
            <DateContainer className="heroDate">
              <DateText>1994</DateText>
              <Icon src={ICONS.square} size={['10px']}></Icon>
              <DateText>13/09</DateText>
            </DateContainer>
          </TextReveal>
        </Line>
        <HeroDataContainer className="heroData">
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
      <ScrollUi />
      <ModelContainer>
        <StyledModelViewer
          src="/assets/models/arm2.glb"
          ar
          shadow-intensity="1"
          camera-controls
          touch-action="pan-y"
          interaction-prompt="none"
          /* auto-rotate */
          /*   camera-orbit="-69.8deg 94deg 115.4m" */
          field-of-view="30deg"
          min-camera-orbit="auto 94deg auto"
          max-camera-orbit="auto 94deg auto"
          camera-orbit="calc(-1.5rad + env(window-scroll-y) * 4rad) calc(0deg + env(window-scroll-y) * 180deg)"
        />
        <ModelGradient />
      </ModelContainer>
      <div style={{ height: '1500px' }}></div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 1rem;
`;

const HeroContainer = styled.div`
  padding-top: 10rem;
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

const ModelContainer = styled.div`
  position: fixed;
  top: 5rem;
  left: 2rem;
  height: 100vh;
  width: 100%;
  z-index: -2;
`;

const StyledModelViewer = styled('model-viewer')`
  width: 100vw;
  height: 100vh;
  --progress-bar-color: none;
  --loader-background-color: transparent;
`;

const ModelGradient = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 0;
  top: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    ${ThemeProvider.colors.core.primary} 90%
  );
`;
