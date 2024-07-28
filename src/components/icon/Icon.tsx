import styled from 'styled-components';

type IconProps = {
  size: string[];
  src: { src: string; alt: string };
};
export const Icon = ({ src, size }: IconProps) => {
  return <StyledIcon {...src} size={size} />;
};

type StyledIconProps = {
  size: string[];
};

const StyledIcon = styled.img<StyledIconProps>`
  width: ${({ size }) => size[0]};
`;
