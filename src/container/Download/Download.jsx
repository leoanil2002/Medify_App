import "./Download.css";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import img1 from "../Img/Download/deef.jpg";
const Download = () => {
  return (
    <div className="down-cont">
      <div className="down-img-cont">
        <img src={img1} alt="" />
      </div>
      <div className="down-content-cont">
        <div className=" down-content-heading">
          Download the <span>Medify</span> App
        </div>
        <div className="down-content-info">
          Get the link to download the app
        </div>
        <div className="phone-input-cont">
          <span className="country-code">+91</span>
          <input
            type="text"
            placeholder="Enter phone number"
            className="phone-input"
          />
          <button
            type="button"
            className="btn btn-primary "
            style={{
              backgroundColor: "rgba(42, 168, 255, 1)",
              border: "none",
              padding: "8px 18px",
            }}
          >
            Send SMS
          </button>
        </div>
        <div className="download-app-btn">
          <button
            type="button"
            className="btn btn-primary "
            style={{
              backgroundColor: "black",
              border: "none",
              padding: "8px 22px",
            }}
          >
            <IoLogoGooglePlaystore /> Play Store
          </button>
          <button
            type="button"
            className="btn btn-primary "
            style={{
              backgroundColor: "black",
              border: "none",
              padding: "8px 22px",
            }}
          >
            <FaApple /> App Store
          </button>
        </div>
      </div>
    </div>
  );
};
export default Download;
