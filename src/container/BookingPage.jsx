import Navbar from "./Header/Header";

import Faq from "./FAQ/Faq";
import Download from "./Download/Download";
import Footer from "./Footer/Footer";
import BookingRender from "./Booking/BookingRender";
const BookingPage = () => {
  return (
    <>
      <Navbar />
      <BookingRender />
      <Faq />
      <Download />
      <Footer />
    </>
  );
};
export default BookingPage;
