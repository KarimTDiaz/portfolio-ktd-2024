import styled from 'styled-components';
import { ThemeProvider } from '../providers/ThemeProvider';

export const Model = ({ className }: { className: string }) => {
  return (
    <ModelContainer className={className}>
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
  );
};

export const ModelContainer = styled.div`
  position: fixed;
  top: 5rem;
  left: 2rem;
  height: 100vh;
  width: 100%;
  z-index: -2;
`;

export const StyledModelViewer = styled<any>('model-viewer')`
  width: 100vw;
  height: 100vh;
  --progress-bar-color: none;
  --loader-background-color: transparent;
`;

export const ModelGradient = styled.div`
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
