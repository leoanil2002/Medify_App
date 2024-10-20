import {
  FaUserMd,
  FaVials,
  FaHospital,
  FaPills,
  FaAmbulance,
} from "react-icons/fa";
import "./SearchOptions.css";
const SearchOptions = () => {
  return (
    <div className="serch-option-cont">
      <h2 className="section-title">You may be looking for</h2>
      <div className="categories">
        <div className="category">
          <FaUserMd className="category-icon" />
          <span>Doctors</span>
        </div>
        <div className="category">
          <FaVials className="category-icon" />
          <span>Labs</span>
        </div>
        <div className="category selected">
          <FaHospital className="category-icon" />
          <span>Hospitals</span>
        </div>
        <div className="category">
          <FaPills className="category-icon" />
          <span>Medical Store</span>
        </div>
        <div className="category">
          <FaAmbulance className="category-icon" />
          <span>Ambulance</span>
        </div>
      </div>
    </div>
  );
};
export default SearchOptions;
