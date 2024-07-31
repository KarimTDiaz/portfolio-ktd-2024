import styled from 'styled-components';

type TextRevealesProps = {
  lineClassName: string;
  revealClassName: string;
  height: string;
  mb: string;
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
  height: string;
  mb: string;
};

export const Line = styled.div<LineProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  margin-bottom: ${({ mb }) => mb};
  /* border: 1px solid white; */
  overflow: hidden;
`;
export const TextReveal = styled.div`
  position: absolute;
`;
