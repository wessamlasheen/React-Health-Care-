import "./testimonials.css";
import Mainheading from "./Mainheading";
import testi from "../imgs/testimonials.png";
import doc1 from "../imgs/download (1).jpeg";
import doc2 from "../imgs/download (2).jpeg";
import doc3 from "../imgs/download (3).jpeg";
import doc4 from "../imgs/download (4).jpeg";
import doc5 from "../imgs/download (5).jpeg";
import doc6 from "../imgs/download.jpeg";
import CarouselTestimonials from "./Carouseltestimonials";
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <Mainheading
          title="Testimonials"
          subTitle="See What Are The Patients
Saying About us"
        />
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="testi-img">
              <img src={testi} alt="" className="" />
              <ul>
                <li>
                  <img src={doc1} alt="" />
                </li>
                <li>
                  <img src={doc2} alt="" />
                </li>
                <li>
                  <img src={doc3} alt="" />
                </li>
                <li>
                  <img src={doc4} alt="" />
                </li>
                <li>
                  <img src={doc5} alt="" />
                </li>
                <li>
                  <img src={doc6} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <CarouselTestimonials />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
