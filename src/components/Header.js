import "./header.css";
import banner from "../imgs/banner.png";
import triangle from "../imgs/animateImg1.png";
import plus from "../imgs/animateImg2.png";
import circle from "../imgs/animateImg5.png";
import square from "../imgs/animateImg3.png";
import orange from "../imgs/heading-background2.png";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-7">
            <div className="header-content">
              <h2>We Provide All Health Care Solution</h2>
              <p>Protect Your Health And Take Care To Of Your Health</p>
              <button className="btn">Read More</button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-5">
            <img src={banner} alt="doctors" />
          </div>
        </div>
        <img src={triangle} alt="triangle" className="triangle" />
        <img src={plus} alt="plus" className="plus" />
        <img src={circle} alt="circle" className="circle" />
        <img src={square} alt="square" className="square" />
        <img src={orange} alt="orange" className="orange" />
      </div>
    </header>
  );
}
export default Header;
