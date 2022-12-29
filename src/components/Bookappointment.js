import "./book.css";
import appointmentImg from "../imgs/mobile.png";
import girl from "../imgs/girl.png";
function Book() {
  return (
    <section className="booking">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-5 col-md-5">
            <div className="appointment-form">
              <h2>Book Appointment</h2>
              <form>
                <div>
                  <select>
                    <option disabled={true}>Selecty Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
                <div>
                  <select>
                    <option disabled={true}>Selecty Doctor</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>

                <div>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div>
                  <input type="number" placeholder="Your Phone" />
                </div>
                <div>
                  <input type="date" placeholder="mm/dd/yy" />
                </div>
                <button className="btn">Appointment Now</button>
              </form>
            </div>
          </div>
          <div className="col-lg-7 col-md-7">
            <div className="appointment-thumb">
              <img src={appointmentImg} className="phone" alt="appointment" />
              <div className="img-group">
                <img src={girl} className="girl" alt="girl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Book;
