import { CiHospital1 } from "react-icons/ci";
import { CiStethoscope } from "react-icons/ci";
import { BsHeartPulse } from "react-icons/bs";
import { RiRadioLine } from "react-icons/ri";
import { LuTestTube2 } from "react-icons/lu";
import { BiSolidShieldPlus } from "react-icons/bi";
import { LiaBoneSolid } from "react-icons/lia";
import "./Specialition.css";
const Specialition = () => {
  return (
    <div className="specialition-container">
      <div className="specialition-container-heading">
        Find by specialisation
      </div>
      <div className="card-specialition-container">
        <div className="card-specialition">
          <div>
            <CiHospital1 className="icons" />
            <div>Dentistry</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <CiStethoscope className="icons" />
            <div>Primary Care</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <BsHeartPulse className="icons" />
            <div>Cardiology</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <RiRadioLine className="icons" />
            <div>MRI Resonance</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <LuTestTube2 className="icons" />
            <div>Blood Test</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <BiSolidShieldPlus className="icons" />
            <div>Piscologist</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <CiHospital1 className="icons" />
            <div>Laboratory</div>
          </div>
        </div>
        <div className="card-specialition">
          <div>
            <LiaBoneSolid className="icons" />
            <div>X-Ray</div>
          </div>
        </div>
      </div>
      <div className="specialition-container-button">
        <button
          type="button"
          className="btn btn-primary "
          style={{
            backgroundColor: "rgba(42, 168, 255, 1)",
            border: "none",
            padding: "8px 36px",
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
};
export default Specialition;
