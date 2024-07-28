import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Icon } from '../../components/icon/Icon';
import { ScrollUi } from '../../components/scroll-ui/ScrollUi';
import { ICONS } from '../../constants/images';
import { ThemeProvider } from '../../providers/ThemeProvider';
import {
  useHeroDataTrigger,
  useModelTrigger,
  useTextReveal
} from './animations';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useTextReveal();
  useHeroDataTrigger();
  useModelTrigger();

  useGSAP(() => {
    gsap.fromTo(
      '.aboutSpan',
      { x: 0, opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.aboutTrigger',
          start: 'top 50vh',
          end: 'bottom 100vh',
          toggleActions: 'play none none reset',
          scrub: true,
          pin: true
        }
      }
    );
  }, {});

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.trigger-2',
      start: 'top top',
      once: true,
      onEnter: () => {
        gsap.to('.projectsTrigger', {
          opacity: 1,
          y: 50,
          scale: 1.2,
          duration: 0.3
        });
      }
    });
    gsap.to('.p ', {
      xPercent: -50,
      scrollTrigger: {
        trigger: '.logoTrigger',
        start: 'top center',
        scrub: 0.5
      }
    });
  }, {});

  return (
    <HomeContainer>
      <div className="homeTrigger">
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
          <ScrollUi />
        </HeroContainer>
        {/* CONTENEDOR ABOUT */}
        <AboutContainer className="aboutTrigger">
          <AboutText className="aboutSpan">
            I'm a web developer specializing in the
          </AboutText>
          <AboutTextSpan> MERN </AboutTextSpan>
          <AboutText className="aboutSpan">
            stack (MongoDB, Express, React, Node.js). I love building
            applications that bring together backend and frontend, and I'm
          </AboutText>
          <AboutTextSpan> always </AboutTextSpan>
          <AboutText className="aboutSpan">
            eager to learn new technologies. While I don't have formal design
            training, I have a good eye for creating appealing and functional{' '}
          </AboutText>
          <AboutTextSpan>interfaces.</AboutTextSpan>
          <div style={{ paddingTop: '2rem' }}>
            <AboutText className="aboutSpan">Besides my passion for</AboutText>
            <AboutTextSpan> technology, </AboutTextSpan>
            <AboutText className="aboutSpan">
              I'm also a music producer and DJ, which helps me stay proactive
              and
            </AboutText>
            <AboutTextSpan> creative in my work. </AboutTextSpan>
            <AboutText className="aboutSpan">
              Check out my portfolio to see some of my projects. I hope you
              enjoy
            </AboutText>
            <AboutTextSpan> exploring them! </AboutTextSpan>
          </div>
        </AboutContainer>
        <ModelContainer className="model">
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
      </div>
      <div
        className="logoTrigger"
        style={{
          overflow: 'hidden',
          color: 'white',
          paddingTop: '10rem',
          /* fontSize: '5rem', */
          display: 'flex'
        }}
      >
        <div className="p" style={{ display: 'flex', gap: '1rem' }}>
          {Array.from({ length: 10 }).map((item, index) => (
            <Icon
              key={index}
              src={{ src: './assets/logos/logo.svg', alt: 'logo' }}
              size={['500px']}
            />
          ))}
        </div>
      </div>
      <div
        className="trigger-2"
        style={{ paddingTop: '1rem', height: '1000px', position: 'relative' }}
      >
        <HomeProjectsButton className="projectsTrigger">
          SEE MY PROJECTS
        </HomeProjectsButton>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 1rem;
`;

const HeroContainer = styled.div`
  padding-top: 10rem;
  min-height: 100vh;
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
const AboutContainer = styled.div`
  padding-top: 5rem;
  /* height: 150vh; */
`;
const AboutText = styled.span`
  opacity: 0.3;
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 20px;
  font-family: ${ThemeProvider.fonts.secondary};
  line-height: 2rem;
`;
const AboutTextSpan = styled.span`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 20px;
  font-family: ${ThemeProvider.fonts.tertiary};
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

const StyledModelViewer = styled<any>('model-viewer')`
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

const HomeProjectsButton = styled.div`
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
