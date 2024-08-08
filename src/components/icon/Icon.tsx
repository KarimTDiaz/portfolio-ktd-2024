import React from 'react';
import styled from 'styled-components';

type IconProps = {
  size: string[];
  height:string[];
  src: { src: string; alt: string };
};
export const Icon = React.forwardRef<HTMLImageElement, IconProps>(
  ({ src, size,height }, ref) => {
    return <StyledIcon ref={ref} {...src} size={size} height={height}/>;
  }
);

type StyledIconProps = {
  size: string[];
  height:string[];
};

const StyledIcon = styled.img<StyledIconProps>`
  width: ${({ size }) => size[0]};
  @media screen and (min-width: 640px) {
    width: ${({ size }) => size[1]};
    height: auto;
  }
`;
