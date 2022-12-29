import Mainheading from "./Mainheading";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import "./working.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Working() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setCard(data));
  }, []);
  const result = card.slice(0, 3).map((ele) => {
    return (
      <div
        className="col-lg-4 col-sm-6 cardy d-flex align-items-center justify-content-center"
        key={ele.id}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>0{ele.id}</Card.Title>
            <Card.Subtitle className="mb-2">
              {ele.title.slice(0, 30)}
            </Card.Subtitle>
            <Card.Text>{ele.body.slice(0, 80)}</Card.Text>
            <Card.Link href="#">
              View More <FontAwesomeIcon icon={faChevronRight} />
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <section className="working">
      <div className="container-sm">
        <Mainheading title="Working Process" subTitle="How We Work? " />
        <div className="row justify-content-center align-items-center">
          {result}
        </div>
      </div>
    </section>
  );
}
export default Working;
