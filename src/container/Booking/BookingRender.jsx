import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { FaSearch } from "react-icons/fa";
import HospitalCard from "../HospitaalCard/HospitalCard";
import img from "../Img/HospitalRen/imgren.png";
import TextField from "@mui/material/TextField";
import "./BookingRender.css";
const BookingRender = () => {
  const [bData, setBData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  console.log(filteredData);
  useEffect(() => {
    const bookingdata = localStorage.getItem("bookings");
    if (bookingdata) {
      const parsedData = JSON.parse(bookingdata);
      setBData(parsedData);
      setFilteredData(parsedData);
    }
  }, []);
  const handleBooking = () => {
    // console.log(input);
    // console.log(bData[0]["Hospital Name"]);
    if (input) {
      const filtered = bData.filter((data) =>
        data["Hospital Name"].toLowerCase().includes(input.toLowerCase())
      );
      setFilteredData(filtered);
      console.log(filtered);
    } else {
      setFilteredData(bData);
    }
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setInput(value);
  };
  return (
    <div className="hospital-main ">
      <div
        className="hospital-render-top"
        style={{
          fontSize: "48px",
          color: "white",
          fontWeight: "700",
          paddingTop: "30px",
          paddingLeft: "20px",
        }}
      >
        Bookings
      </div>
      <div
        className="search-hospital-container-book"
        style={{ width: "65vw", top: "160px", left: "25vw" }}
      >
        <div className="search-bar">
          <FormControl fullWidth className="search-bar-ele">
            <TextField
              id="outlined-basic"
              placeholder="Search Booking"
              variant="outlined"
              onChange={handleInputChange}
            />
          </FormControl>
          <button className="search-button" onClick={handleBooking}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "80px",
        }}
      >
        <div className="hospital-render-data" style={{ paddingBottom: "40px" }}>
          {!bData[0] ? (
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                paddingTop: "60px",
                width: "60%",
                color: "gray",
              }}
            >
              No booking found....
            </div>
          ) : (
            <div className="hospital-render-list">
              {filteredData.map((data) => {
                return (
                  <HospitalCard
                    details={data}
                    key={data["Hospital Name"]}
                    name={data["Hospital Name"]}
                    city={data.City}
                    state={data.State}
                    rating={data["Hospital overall rating"]}
                    type={data["Hospital Type"]}
                    btime={data.bookingTime}
                    bdate={data.bookingDate}
                  />
                );
              })}
            </div>
          )}
          <div className="hospital-render-img">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingRender;
