import styled from 'styled-components';
import { BUTTONS } from '../../constants/buttons';
import { ThemeProvider } from '../../providers/ThemeProvider';
type ButtonProps = {
  type: string;
  children: React.ReactNode;
  /*  size?: string[]; */
  action?: () => void;
};

export const Button = ({ type, children, action }: ButtonProps) => {
  switch (type) {
    case BUTTONS.primary:
      break;
    case BUTTONS.blob:
      return (
        <StyledBlobButton onClick={action} className="blob-element">
          {children}
        </StyledBlobButton>
      );
    default:
      break;
  }
};

const StyledBlobButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 5rem;
  text-align: center;
  background-image: url('/assets/icons/blob-stroke.svg');
  background-position: center;
  background-size: contain;
  border-radius: 50%;

  /* border: 1px solid wheat; */
  transition: all 0.5s;
  &:hover {
    background-color: ${ThemeProvider.colors.misc.primary};
    width: 150px;
    height: 150px;
  }
`;
