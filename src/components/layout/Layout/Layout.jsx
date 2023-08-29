import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
