import React from 'react';
import styled from 'styled-components';

type IconProps = {
  size: string[];
  src: { src: string; alt: string };
};
export const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ src, size }, ref) => {
    return <StyledIcon ref={ref} {...src} size={size} />;
  }
);

type StyledIconProps = {
  size: string[];
};

const StyledIcon = styled.img<StyledIconProps>`
  width: ${({ size }) => size[0]};
`;
