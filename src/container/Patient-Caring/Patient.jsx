import "./Patient.css";
import { FaCheckCircle } from "react-icons/fa";
import patient1 from "../Img/Patient/Group 1000011062.png";
const Patient = () => {
  return (
    <div className="patient">
      <div className="patient-cont">
        <div className="patient-img-cont">
          <img src={patient1} alt="" />
        </div>
        <div className="patient-content-cont">
          <div className="patient-content-head">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </div>
          <div className="patient-content-tag">
            <span className="patient">Patient</span>
            <span className="caring">Caring</span>
          </div>
          <div className="patient-content-info">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </div>
          <div className="patient-content-list">
            <ul>
              <li className="list-items">
                <span>
                  <FaCheckCircle style={{ color: "rgba(42, 167, 255, 1)" }} />
                </span>
                Stay Updated About Your Health
              </li>
              <li className="list-items">
                <span>
                  <FaCheckCircle style={{ color: "rgba(42, 167, 255, 1)" }} />
                </span>
                Check Your Results Online
              </li>
              <li className="list-items">
                <span>
                  <FaCheckCircle style={{ color: "rgba(42, 167, 255, 1)" }} />
                </span>
                Manage Your Appointments
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Patient;
