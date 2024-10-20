import Navbar from './Header/Header';
import Faq from './FAQ/Faq';
import Download from './Download/Download';
import Footer from './Footer/Footer';
import HospitalRender from './HospitalRenderPage/HospitalRender';
const ApoinmentPage = () => {
    return (
        <>
            <Navbar />
            <HospitalRender />
            <Faq />
            <Download />
            <Footer />
        </>
    );
};
export default ApoinmentPage;
