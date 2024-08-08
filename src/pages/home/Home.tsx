import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Icon } from '../../components/icon/Icon';
import { Marquee } from '../../components/marquee/Marquee';
import { Model } from '../../components/Model';
import { ScrollUi } from '../../components/scroll-ui/ScrollUi';
import {
  useHeroDataTrigger,
  useMarqueeTrigger,
  useModelTrigger,
  useTextReveal,
  useTransparentSpan
} from './animations';
import { HomeAbout } from './home-sections/HomeAbout';
import { HomeHero } from './home-sections/HomeHero';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { TextRevealed } from '../../components/text-revealed/TextRevealed';
import { WORKS } from '../../constants/works';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { SectionTitle } from './styles';
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useTextReveal();
  useHeroDataTrigger();
  useTransparentSpan();
  useModelTrigger();
  useMarqueeTrigger();

  useGSAP(() => {
    /* ScrollTrigger.create({
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
    }); */
  }, {});
  useGSAP(() => {
    let projectCardsHome = gsap.utils.toArray('.projectCardHome');
    gsap.to(projectCardsHome, {
      xPercent: -110 * (projectCardsHome.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.projectsCarrouselContainer',
        pin: true,
        scrub: 1,
        snap: 1 / (projectCardsHome.length - 1),
        end: () => {
          const container = document.querySelector(
            '.projectsCarrouselContainer'
          );
          if (container instanceof HTMLElement) {
            return `+=${container.offsetWidth}`;
          } else {
            return '+=1000';
          }
        }
      }
    });
  }, {});
  return (
    <HomeContainer>
      <div className="homeContainerTop">
        <HomeHero />
        <HomeAbout />
      </div>
      <HomeMarqueeContainer className="homeMarqueeContainer">
        <Marquee className="homeMarqueeLogo">
          {Array.from({ length: 10 }).map((_, index) => (
            <Icon
              key={index}
              src={{ src: '/assets/logos/logo.svg', alt: 'logo' }}
              size={['500px', '800px']}
              height={['auto','80px']}
            />
          ))}
        </Marquee>
      </HomeMarqueeContainer>
      <div
        className="trigger-2"
        style={{ paddingTop: '5rem', position: 'relative' }}
      >
        <ProjectsCarrouselContainer className="projectsCarrouselContainer">
          <TextRevealed
            lineClassName="lineTitleProjectsHome"
            revealClassName="titleRevealProjectsHome"
            height={['10vh']}
            mb={['0']}
          >
            <SectionTitle>SELECTED WORKS</SectionTitle>
          </TextRevealed>
          <ProjectsCarrousel>
            {WORKS.map(item => (
              <ProjectCard key={item.name} className="projectCardHome">
                <ProjectCardHeader>
                  <ProjectCardTitle>{item.name}</ProjectCardTitle>
                  <ProjectCardNumber>{item.number}</ProjectCardNumber>
                </ProjectCardHeader>
                <ProjectCardImage src={item.preview} alt="ProjectImage" />
                <ProjectCardFooter>{item.type}</ProjectCardFooter>
              </ProjectCard>
            ))}
          </ProjectsCarrousel>
        </ProjectsCarrouselContainer>
        <HomeHero />
      </div>
      <Model className="modelHome" />
      <ScrollUi />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  padding: 1rem;
  overflow: hidden;
`;

const HomeMarqueeContainer = styled.div`
  overflow: hidden;
  padding-top: 10rem;
  margin: -40px;
  transform: rotate(-10deg);
`;

const ProjectsCarrouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 0;
  height: 100vh;
  overflow-x: hidden;
`;
const ProjectsCarrousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 2rem;
  width: 410%;
`;

const ProjectCard = styled.div`
  height: 50vh;
  width: 92vw;
`;

const ProjectCardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const ProjectCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const ProjectCardTitle = styled.h3`
  font-family: ${ThemeProvider.fonts.tertiary};
  font-weight: 100;
  font-size: 1.5rem;
  color: ${ThemeProvider.colors.core.secondary};
`;
const ProjectCardNumber = styled.p`
  font-family: ${ThemeProvider.fonts.secondary};
  font-weight: 100;
  font-size: 1rem;
  color: ${ThemeProvider.colors.misc.primary};
`;
const ProjectCardFooter = styled.p`
  display: flex;
  justify-content: end;
  padding: 0 1rem;
  font-family: ${ThemeProvider.fonts.secondary};
  font-weight: 100;
  font-size: 1rem;
  color: ${ThemeProvider.colors.core.secondary};
`;
