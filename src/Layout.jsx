import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./hooks/ScrollToTop";

const Layout = ({children}) => {
    return (
        <div className="2xl:container md:px-4 w-full md:w-[90%] mx-auto scroll-smooth bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <Navbar />
            <ScrollToTop />
            <main className="min-h-screen ">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
