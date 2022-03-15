import { Col } from "react-bootstrap";
import classes from "./HowDoesItWorkCard.module.css";

const HowDoesItWorkCard = ({ col, singlecardinfo }) => {
  return (
    <>
      {singlecardinfo.map((info, indx) => (
        <Col lg={col} className={classes.card_col} key={indx}>
          <div className={`${classes.card_content} ${info.color}`}>
            <h5>{info.title}</h5>
            <p>{info.details}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default HowDoesItWorkCard;
