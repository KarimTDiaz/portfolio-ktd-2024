import styled from 'styled-components';

type MarqueeProps = {
  className: string;
  children: React.ReactNode;
};
export const Marquee = ({ className, children }: MarqueeProps) => {
  return (
    <MarqueeContentContainer className={className}>
      {children}
    </MarqueeContentContainer>
  );
};

const MarqueeContentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
