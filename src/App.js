import "./App.css";
import MainPage from "./container/MainPage";
import BookingPage from "./container/BookingPage";
import ApoinmentPage from "./container/ApoinmentPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/apoinment" element={<ApoinmentPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
