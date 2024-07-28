import { Header } from './header/Header';
import { Socials } from './socials/Socials';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Socials />
    </>
  );
};
