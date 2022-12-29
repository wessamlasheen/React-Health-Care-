import "./about.css";
import aboutImg1 from "../imgs/pic-1.jpg";
import aboutImg2 from "../imgs/pic-2.jpg";
import aboutImg3 from "../imgs/pic-3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBedPulse,
  faStethoscope,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import Mainheading from "./Mainheading";
function About(props) {
  return (
    <section
      className="about"
      style={{ top: props.page ? "76px" : "0", position: "relative" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-imgs gap-3">
              <img src={aboutImg1} alt="" className="about-thumb1" />
              <img src={aboutImg2} alt="" className="about-thumb1" />
              <img src={aboutImg3} alt="" className="about-thumb1" />
              <div className="num">
                20<p>Year Experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <Mainheading title="About Us" />
              <h2>The Great Place Of Medical Hospital Center</h2>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best technology involve in the our hospital.
              </p>
              <div className="about-buttons d-flex gap-4">
                <div className="single-btn d-flex align-items-center gap-4">
                  <FontAwesomeIcon icon={faTruckMedical} />
                  <h5>Emergency Help</h5>
                </div>
                <div className="single-btn d-flex align-items-center  gap-4">
                  <FontAwesomeIcon icon={faStethoscope} />
                  <h5>Qualified Doctors</h5>
                </div>
                <div className="single-btn d-flex align-items-center  gap-4">
                  <FontAwesomeIcon icon={faSyringe} />
                  <h5>Best Professionals</h5>
                </div>
                <div className="single-btn d-flex align-items-center  gap-4">
                  <FontAwesomeIcon icon={faBedPulse} />
                  <h5>Medical Treatment</h5>
                </div>
              </div>
              <button className="btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
