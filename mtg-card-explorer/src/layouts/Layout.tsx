import { ReactNode } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
