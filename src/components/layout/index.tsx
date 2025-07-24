import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="relative pt-14 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
