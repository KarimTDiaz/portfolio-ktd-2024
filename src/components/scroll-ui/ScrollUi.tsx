import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styled from 'styled-components';
import { ICONS } from '../../constants/images';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { Icon } from '../icon/Icon';

export const ScrollUi = () => {
  const iconRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    gsap.fromTo(
      iconRef.current,
      { y: 0 },
      {
        y: 35,
        opacity: 0,
        repeat: -1,
        duration: 1.5,
        ease: 'power1.inOut'
      }
    );
  }, {});
  return (
    <StyledScrollUi>
      <Icon src={ICONS.circle} size={['10px']} height={['auto']} ref={iconRef}></Icon>
    </StyledScrollUi>
  );
};

const StyledScrollUi = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: 35px;
  height: 65px;
  border: solid 2px ${ThemeProvider.colors.core.secondary};
  border-radius: 20px;
`;
