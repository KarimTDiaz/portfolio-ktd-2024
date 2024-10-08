import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  padding: 1rem;
`;
