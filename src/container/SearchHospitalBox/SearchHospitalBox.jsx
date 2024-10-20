import SearchHospital from "../SearchHospital/SearchHospital";
import SearchOptions from "../SearchHospital/SearchOptions";
import "./SearchHospitalBox.css";
const SearchHospitalBox = () => {
  return (
    <div className="search-hospital-box">
      <SearchHospital />
      <SearchOptions />
    </div>
  );
};
export default SearchHospitalBox;
