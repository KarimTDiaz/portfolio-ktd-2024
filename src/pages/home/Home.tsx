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
  useButtonTrigger,
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
import { HomeProjects } from './home-sections/HomeProjects';
gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  useTextReveal();
  useHeroDataTrigger();
  useTransparentSpan();
  useButtonTrigger();
  useModelTrigger();
  useMarqueeTrigger();

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
              height={['auto', '80px']}
            />
          ))}
        </Marquee>
      </HomeMarqueeContainer>
      <HomeContainerBottom className="trigger-2">
        <HomeProjects />
      </HomeContainerBottom>
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

const HomeContainerBottom = styled.div`
  padding-top: 5rem;
  position: relative;
`;
