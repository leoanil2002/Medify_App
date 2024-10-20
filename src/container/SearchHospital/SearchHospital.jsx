import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./SearchHospital.css";

import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchHospital = ({ setAllHospitalData, setCityName }) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [allStates, setAllStates] = useState([]);
  const [allCities, setAllCities] = useState([]);

  const handleSelectState = (event) => {
    setState(event.target.value);
    fetchCitiesData(event.target.value);
  };

  const handleSelectCity = (event) => {
    setCity(event.target.value);
    if (setCityName) {
      setCityName(event.target.value);
    }
  };

  useEffect(() => {
    async function fetchStatesData() {
      try {
        const res = await fetch("https://meddata-backend.onrender.com/states");
        if (!res.ok) {
          throw new Error();
        }
        const states = await res.json();
        setAllStates(states);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStatesData();
  }, []);

  async function fetchCitiesData(stateName) {
    try {
      const res = await fetch(
        `https://meddata-backend.onrender.com/cities/${stateName}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const cities = await res.json();
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  }

  const searchHospital = async () => {
    try {
      const res = await fetch(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      if (!res.ok) {
        throw new Error();
      }
      const hospitalData = await res.json();
      setAllHospitalData(hospitalData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="search-hospital-container">
      <div className="search-bar">
        <FormControl fullWidth className="search-bar-ele">
          <Select
            className="select-state"
            value={state}
            displayEmpty
            onChange={handleSelectState}
          >
            <MenuItem value="" disabled>
              Select State
            </MenuItem>
            {allStates.map((state) => (
              <MenuItem value={state} key={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth className="search-bar-ele">
          <Select
            className="select-city"
            value={city}
            displayEmpty
            onChange={handleSelectCity}
          >
            <MenuItem value="" disabled>
              Select City
            </MenuItem>
            {allCities.map((city) => (
              <MenuItem value={city} key={city}>
                {city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <button className="search-button" onClick={searchHospital}>
          <Link
            to={"/apoinment"}
            style={{ color: "white", textDecoration: "none" }}
          >
            <FaSearch /> SEARCH
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SearchHospital;
