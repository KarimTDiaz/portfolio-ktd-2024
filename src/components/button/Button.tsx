import styled from 'styled-components';
import { BUTTONS } from '../../constants/buttons';
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
        <div>
          <StyledBlobButton onClick={action} className="blob-element">
            {children}
          </StyledBlobButton>
          <img
            style={{ width: '1000px' }}
            src="assets/icons/blob-stroke-2.svg"
            alt=""
          />
        </div>
      );
    default:
      break;
  }
};

const StyledBlobButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 250px;
  height: 250px;
  padding: 5rem;
  text-align: center;
  background-image: url('/assets/icons/blob-stroke.svg');
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  /* border: 1px solid wheat; */
  transition: all 0.5s;
`;
