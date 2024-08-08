import styled from 'styled-components';
import { Button } from '../../../components/button/Button';
import { TextRevealed } from '../../../components/text-revealed/TextRevealed';
import { BUTTONS } from '../../../constants/buttons';
import { ThemeProvider } from '../../../providers/ThemeProvider';
import { GreenText, SectionTitle } from '../styles';

export const HomeAbout = () => {
  return (
    <HomeAboutContainer className="aboutContainerHome">
      <TextRevealed
        lineClassName="lineTitleAboutHome"
        revealClassName="titleRevealAboutHome"
        height={['10vh']}
        mb={['0']}
      >
        <SectionTitle>SOME ABOUT</SectionTitle>
      </TextRevealed>
      <HomeAboutText className="aboutSpanHome">
        I'm a web developer specializing in the
      </HomeAboutText>
      <HomeAboutTextSpan> MERN </HomeAboutTextSpan>
      <HomeAboutText className="aboutSpanHome">
        stack (MongoDB, Express, React, Node.js). I love building applications
        that bring together backend and frontend, and I'm
      </HomeAboutText>
      <HomeAboutTextSpan> always </HomeAboutTextSpan>
      <HomeAboutText className="aboutSpanHome">
        eager to learn new technologies. While I don't have formal design
        training, I have a good eye for creating appealing and functional
      </HomeAboutText>
      <HomeAboutTextSpan>interfaces.</HomeAboutTextSpan>
      <HomeAboutTextContainer>
        <HomeAboutText className="aboutSpanHome">
          Besides my passion for
        </HomeAboutText>
        <HomeAboutTextSpan> technology, </HomeAboutTextSpan>
        <HomeAboutText className="aboutSpanHome">
          I'm also a music producer and DJ, which helps me stay proactive and
        </HomeAboutText>
        <HomeAboutTextSpan> creative in my work. </HomeAboutTextSpan>
        <HomeAboutText className="aboutSpanHome">
          Check out my portfolio to see some of my projects. I hope you enjoy
        </HomeAboutText>
        <HomeAboutTextSpan> exploring them! </HomeAboutTextSpan>
      </HomeAboutTextContainer>
      <Button type={BUTTONS.blob}>
        <GreenText>MORE ABOUT ME</GreenText>
      </Button>
    </HomeAboutContainer>
  );
};

const HomeAboutContainer = styled.div`
  padding-top: 5rem;
  /* height: 150vh; */
  @media screen and (min-width: 640px) {
    padding-top: 7rem;
  }
`;
const HomeAboutText = styled.span`
  opacity: 0.3;
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 1.25rem;
  font-family: ${ThemeProvider.fonts.secondary};
  line-height: 2rem;
  @media screen and (min-width: 640px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;
const HomeAboutTextSpan = styled.span`
  color: ${ThemeProvider.colors.core.secondary};
  font-size: 1.25rem;
  font-family: ${ThemeProvider.fonts.tertiary};
  line-height: 2rem;
  @media screen and (min-width: 640px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;

const HomeAboutTextContainer = styled.div`
  padding-top: '2rem';
`;
