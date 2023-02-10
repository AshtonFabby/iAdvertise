import Footer from "./footer";
import NavBar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
