import "./latestnews.css";

import Mainheading from "./Mainheading";
import Newsbox from "./Newsbox";

function Latestnews() {
  return (
    <section className="latest-news">
      <div className="container">
        <Mainheading title="Latest News" subTitle="Our Latest News" />
        <div className="row align-items-center justify-content-center ">
          <Newsbox />
        </div>
      </div>
    </section>
  );
}
export default Latestnews;
