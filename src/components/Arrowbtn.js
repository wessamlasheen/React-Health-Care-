import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Arrowbtn(props) {
  return (
    <>
      <button
        className="main-btn"
        style={{
          backgroundColor: props.background,
          color: props.color,
          border: props.border,
        }}
      >
        {props.value}
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ backgroundColor: props.arrow, color: props.arrowColor }}
        />
      </button>
    </>
  );
}
export default Arrowbtn;
