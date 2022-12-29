import "./latestnews.css";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic1 from "../imgs/pic1.jpg";
import dow1 from "../imgs/download (1).jpeg";
import Image from "react-bootstrap/Image";
import Arrowbtn from "./Arrowbtn";
import { useEffect, useState } from "react";
function Newsbox() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((res) => setNews(res));
  }, []);
  let result = news.slice(0, 3).map((ele) => {
    return (
      <div className="col-lg-4" key={ele.id}>
        <div className="news-box">
          <img src={pic1} alt="" className="main-img" />
          <div className="img-info d-flex  align-items-center gap-3 m-3">
            <div>
              <Image src={dow1} alt="" roundedCircle={true} />
              <span>John Deo</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarWeek} />
              <span>21 july 2022</span>
            </div>
          </div>
          <p>{ele.title.slice(0, 35)}</p>
          <Arrowbtn
            value="read more"
            background="#fff"
            color="#565acf"
            border="2px solid #565acf"
            arrow="#565acf"
            arrowColor="#fff"
          />
        </div>
      </div>
    );
  });
  return <>{result}</>;
}
export default Newsbox;
