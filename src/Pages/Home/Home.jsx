import CertifiedPartner from "../../Components/Home/CertifiedPartner";
import ClientPartners from "../../Components/Home/ClientPartners";
import CoreService from "../../Components/Home/CoreService";
import IndustrySolutions from "../../Components/Home/IndustrySolutions";
import Intro from "../../Components/Home/Intro";
import StatsGrid from "../../Components/Home/StatsGrid";
import Testimonial from "../../Components/Home/Testimonial";
import Layout from "../../Layout";

const Home = () => {
  return (
    <Layout>
      <section className="">
        <Intro />
        <CertifiedPartner />
        <CoreService />
        <StatsGrid />
        <IndustrySolutions />
        <ClientPartners/>
        <Testimonial/>
      </section>
    </Layout>
  );
};

export default Home;
