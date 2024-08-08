import styled from 'styled-components';

type TextRevealesProps = {
  lineClassName: string;
  revealClassName: string;
  height: string [];
  mb: string [];
  children: React.ReactNode;
};

export const TextRevealed = ({
  lineClassName,
  revealClassName,
  height,
  mb,
  children
}: TextRevealesProps) => {
  return (
    <Line className={lineClassName} height={height} mb={mb}>
      <TextReveal className={revealClassName}>{children}</TextReveal>
    </Line>
  );
};

type LineProps = {
  height: string []
  mb: string []
};

export const Line = styled.div<LineProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height[0]};
  margin-bottom: ${({ mb }) => mb[0]};
  /* border: 1px solid white; */
  overflow: hidden;
  @media screen and (min-width: 640px) {
    height: ${({ height }) => height[1]};
  margin-bottom: ${({ mb }) => mb[1]};
  }
  @media screen and (min-width: 1024px) {
    height: ${({ height }) => height[2]};
  margin-bottom: ${({ mb }) => mb[2]};
  }
  @media screen and (min-width: 1440px) {
    height: ${({ height }) => height[3]};
  margin-bottom: ${({ mb }) => mb[3]};
  }
`;
export const TextReveal = styled.div`
  position: absolute;
`;
