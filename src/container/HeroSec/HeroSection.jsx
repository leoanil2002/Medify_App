import "./HeroSection.css";
import heroImg from "../Img/hero-img/img.png";
import SearchHospitalBox from "../SearchHospitalBox/SearchHospitalBox";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="container-flow hero-sec ">
      <div className="hero-container-main">
        <div className="hero-container">
          <div className="hero-content-heading">
            <div className="heading-skip">Skip the travel! Find Online </div>
            <span className="medical">Medical</span>
            <span className="centers">Centers</span>
          </div>
          <div className="hero-content-connect">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </div>
          <div className="header-content-button">
            <button
              type="button"
              className="btn btn-primary "
              style={{
                backgroundColor: "rgba(42, 168, 255, 1)",
                border: "none",
                padding: "8px 18px",
                //   Width: "177px !important",
                //   height: "41px",
                //   boxSizing: "border-box",
              }}
            >
              <Link
                to={"/apoinment"}
                style={{ color: "white", textDecoration: "none" }}
              >
                Find Centers
              </Link>
            </button>
          </div>
        </div>
        <div className="hero-img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <SearchHospitalBox />
    </div>
  );
};
export default HeroSection;
