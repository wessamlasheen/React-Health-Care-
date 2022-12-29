import Mainheading from "./Mainheading";
import "./services.css";
import ServicesCard from "./ServicesCard";
// import MultipleItems from "./MultipleItems";
function Services() {
  return (
    <section className="services">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className="services-info">
              <Mainheading title="Services" />
              <h2 className="secondary">
                We Cover A Big Variety Of Medical Services
              </h2>
              <p>
                We provide the special tips and advice’s of heath care treatment
                and high level of best.
              </p>
              <button className="btn">All Services</button>
            </div>
          </div>
          <div className="col-lg-8 d-flex gap-3 justify-content-center flex-wrap   services-carousel">
            <ServicesCard />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
