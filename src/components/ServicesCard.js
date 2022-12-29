import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faStethoscope,
  faSuitcaseMedical,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function ServicesCard() {
  const [servicesCard, setServicesCard] = useState([]);
  useEffect(() => {
    setServicesCard([
      {
        id: 1,
        iconName: faStethoscope,
        title: "Treatment",
        decrptipn:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 2,
        iconName: faSuitcaseMedical,
        title: "Surgery",
        decrptipn:
          "we are happy to build on the card title and make up the bulk of the card's content.",
      },
      {
        id: 3,
        iconName: faHandHoldingHeart,
        title: "Dignostics",
        decrptipn:
          "here you are text to build on the card title and make up the bulk of the card's content.",
      },
    ]);
  }, []);
  let result = servicesCard.map((ele) => {
    return (
      <Card key={ele.id}>
        <div className="icon">
          <FontAwesomeIcon variant="top" icon={ele.iconName} />
        </div>

        <Card.Body>
          <Card.Title>{ele.title}</Card.Title>
          <Card.Text>{ele.decrptipn.slice(0, 80)}</Card.Text>
          <Button variant="primary">View More</Button>
        </Card.Body>
      </Card>
    );
  });
  return <>{result}</>;
}

export default ServicesCard;
