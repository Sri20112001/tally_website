import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="2xl:container w-screen px-4 lg:w-[90%] mx-auto flex flex-col">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer/>
    </section>
  );
};

export default Layout;
