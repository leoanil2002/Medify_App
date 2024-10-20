import "./Faq.css";
import { FaPlus } from "react-icons/fa";
import img1 from "../Img/FAQ/Image-21-1.png.png";
const Faq = () => {
  return (
    <div className="faq-cont">
      <div className="faq-tag">Get Your Answer</div>
      <div className="faq-heading">Frequently Asked Questions</div>
      <div className="faq-second-cont">
        <div className="faq-img-cont">
          <img src={img1} alt="" />
        </div>
        <div className="faq-list-cont">
          <ul>
            <li className="faq-list">
              Why choose our medical for your family?
              <span
                style={{ paddingLeft: "58px", color: "rgba(42, 167, 255, 1)" }}
              >
                <FaPlus />
              </span>
            </li>
            <li className="faq-list">
              Why we are different from others?
              <span
                style={{ paddingLeft: "112px", color: "rgba(42, 167, 255, 1)" }}
              >
                <FaPlus />
              </span>
            </li>
            <li className="faq-list">
              Trusted & experience senior care & love
              <span
                style={{ paddingLeft: "70px", color: "rgba(42, 167, 255, 1)" }}
              >
                <FaPlus />
              </span>
            </li>
            <li className="faq-list">
              How to get appointment for emergency case?
              <span
                style={{ paddingLeft: "20px", color: "rgba(42, 167, 255, 1)" }}
              >
                <FaPlus />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Faq;
