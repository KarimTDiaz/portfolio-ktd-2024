import styled from 'styled-components';

export const Logo = () => {
  return <StyledLogo src="/assets/logos/logo.svg" />;
};

const StyledLogo = styled.img`
  width: 4.375rem;
  @media screen and (min-width: 640px) {
    width: 6rem;
  }
`;
