import styled from 'styled-components';
import { ThemeProvider } from '../../../providers/ThemeProvider';
import { SectionTitle } from '../styles';
import { TextRevealed } from '../../../components/text-revealed/TextRevealed';
import { HomeHero } from './HomeHero';
import { WORKS } from '../../../constants/works';

export const HomeProjects = () => {
  return (
    <>
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
    </>
  );
};

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
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
`;
const ProjectCardNumber = styled.p`
  font-family: ${ThemeProvider.fonts.secondary};
  font-weight: 100;
  font-size: 1rem;
  color: ${ThemeProvider.colors.misc.primary};
  @media screen and (min-width: 640px) {
    font-size: 1.5rem;
  }
`;
const ProjectCardFooter = styled.p`
  display: flex;
  justify-content: end;
  padding: 0 1rem;
  font-family: ${ThemeProvider.fonts.secondary};
  font-weight: 100;
  font-size: 1rem;
  color: ${ThemeProvider.colors.core.secondary};
  @media screen and (min-width: 640px) {
    font-size: 1.5rem;
  }
`;
