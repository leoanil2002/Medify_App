import { useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

import SearchHospital from "../SearchHospital/SearchHospital";
import HospitalCard from "../HospitaalCard/HospitalCard";
import "./HospitalRender.css";
import img from "../Img/HospitalRen/imgren.png";
const HospitalRender = () => {
  const [allHospitalData, setAllHospitalData] = useState([]);
  const [cityName, setCityName] = useState("");
  console.log(allHospitalData);
  return (
    <div className="hospital-main">
      <div className="search-container">
        <div className="hospital-render-top" />
        <div
          style={{
            position: "absolute",
            top: "31px",
            left: "11vw",
            width: "80%",
          }}
        >
          <SearchHospital
            setAllHospitalData={setAllHospitalData}
            setCityName={setCityName}
          />
        </div>
      </div>
      <div className="hospital-render-bottom">
        <div className="hospital-render-container">
          <div className="hospital-render-content">
            {allHospitalData?.length > 0 && (
              <p style={{ fontSize: "24px", fontWeight: "500" }}>
                <BsPatchCheckFill /> {allHospitalData?.length} medical centers
                available in {cityName}.
              </p>
            )}
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(120, 120, 135, 1)",
              }}
            >
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          <div className="hospital-render-data">
            {!allHospitalData[0] ? (
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "600",
                  paddingTop: "60px",
                  width: "60%",
                  color: "gray",
                }}
              >
                No Hospital found....
              </div>
            ) : (
              <div className="hospital-render-list">
                {allHospitalData.map((data) => {
                  return (
                    <HospitalCard
                      details={data}
                      key={data["Hospital Name"]}
                      name={data["Hospital Name"]}
                      city={data.City}
                      state={data.State}
                      rating={data["Hospital overall rating"]}
                      type={data["Hospital Type"]}
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
    </div>
  );
};
export default HospitalRender;

// [
// {
//     "Provider ID": "040007",
//     "Hospital Name": "CHI-ST VINCENT INFIRMARY",
//     "Address": "TWO ST VINCENT CIRCLE",
//     "City": "LITTLE ROCK",
//     "State": "Arkansas",
//     "ZIP Code": 72205,
//     "County Name": "PULASKI",
//     "Phone Number": 5015523000,
//     "Hospital Type": "Acute Care Hospitals",
//     "Hospital Ownership": "Voluntary non-profit - Private",
//     "Emergency Services": "Yes",
//     "Meets criteria for meaningful use of EHRs": "Y",
//     "Hospital overall rating": 2,
//     "Hospital overall rating footnote": "",
//     "Mortality national comparison": "Below the national average",
//     "Mortality national comparison footnote": "",
//     "Safety of care national comparison": "Below the national average",
//     "Safety of care national comparison footnote": "",
//     "Readmission national comparison": "Below the national average",
//     "Readmission national comparison footnote": "",
//     "Patient experience national comparison": "Below the national average",
//     "Patient experience national comparison footnote": "",
//     "Effectiveness of care national comparison": "Same as the national average",
//     "Effectiveness of care national comparison footnote": "",
//     "Timeliness of care national comparison": "Same as the national average",
//     "Timeliness of care national comparison footnote": "",
//     "Efficient use of medical imaging national comparison": "Same as the national average",
//     "Efficient use of medical imaging national comparison footnote": ""
// },

// ]
// const arr1 = [1, 2, 3, 4, 9];
//     const arr2 = [4, 6, 7, 8];

//     const fun = (arr1, arr2) => {
//         const n = arr1.length;
//         const m = arr2.length;
//         let i = 0;
//         let j = 0;
//         const arr = [];
//         while (i < n && j < m) {
//             if (arr1[i] < arr2[j]) {
//                 arr.push(arr1[i]);
//                 i++;
//             } else {
//                 arr.push(arr2[j]);
//                 j++;
//             }
//         }

//         while (i < n) {
//             arr.push(arr1[i]);
//             i++;
//         }

//         while (j < m) {
//             arr.push(arr2[j]);
//             j++;
//         }

//         console.log(arr);
//     };

//     fun(arr1, arr2);
