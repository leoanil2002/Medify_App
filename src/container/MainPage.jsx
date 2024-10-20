import Header from "./Header/Header";
import HeroSection from "./HeroSec/HeroSection";
import OfferSlider from "./Offer-slider/OfferSlider";
import Specialition from "./Specialition/Specialition";
import Specialist from "./Specialist/Specialist";
import Patient from "./Patient-Caring/Patient";
import Blogs from "./Blogs/Blogs";
import About from "./AboutUs/About";
import Faq from "./FAQ/Faq";
import Download from "./Download/Download";
import Footer from "./Footer/Footer";
const MainPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <OfferSlider />
      <Specialition />
      <Specialist />
      <Patient />
      <Blogs />
      <About />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};
export default MainPage;
