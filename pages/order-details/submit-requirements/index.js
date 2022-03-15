import { Col, Container, Form, Row } from "react-bootstrap";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import classes from "./submit_requirements.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckIcon from "@mui/icons-material/Check";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useRouter } from "next/router";
const SubmitRequirements = () => {
  const router = useRouter();
  const [orderObject, setOrderObject] = useState({});
  const handleInputChange = (e) => {
    if (e.target.name === "file") {
      setOrderObject({
        ...orderObject,
        file: e.target.files[0],
      });
    } else {
      let newObj = { ...orderObject };
      newObj[e.target.name] = e.target.value;
      setOrderObject(newObj);
    }
  };
  return (
    <section className={classes.submit_requirements}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <div className={classes.stepper}>
              <div className={`${classes.step} ${classes.step1}`}>
                <div className={classes.step_number}>
                  <span>1</span>
                </div>
                <div className={classes.stepper_text}>
                  <span>
                    Order Details <ArrowForwardIosIcon />
                  </span>
                </div>
              </div>
              <div className={classes.step}>
                <div className={classes.step_number}>
                  <span>2</span>
                </div>
                <div className={classes.stepper_text}>
                  <span>Submit Requirements </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 flex-column">
          <Col lg="4 mx-auto">
            <div className={classes.thank_you_purchase}>
              <CheckIcon className={classes.check_icon} />
              <div>
                <h6>Thank You for Your Purchase</h6>
                <p>A receipt was sent to your email</p>
              </div>
            </div>
          </Col>
          <Col lg="8 mx-auto mt-5">
            <p>The seller needs the following to start working on your order</p>{" "}
            <Divider className="mb-3" />
            <small>
              I need you to provide sample of the logo you want done. Thanks
            </small>
            <Form.Control
              type="text"
              as="textarea"
              rows={10}
              className={classes.textarea}
              placeholder="Write something.."
            />{" "}
            <div className={classes.input_div}>
              {orderObject.file ? (
                <div className="d-flex justify-content-center">
                  <p>{orderObject.file && orderObject.file.name}</p>
                </div>
              ) : (
                <label htmlFor="file_input">
                  <div className={classes.file_input_btn}>+ Attach File</div>
                  <span>No files selected</span>
                  <input
                    type="file"
                    id="file_input"
                    placeholder="  File"
                    name="file"
                    onChange={handleInputChange}
                  />
                </label>
              )}
              <p>
                By clicking <span>Start Order</span>, I agree to the information
                I provide as complete. Any further changes may be subject to
                extra cost.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  className={classes.start_order}
                  onClick={() => router.push("/order/chat")}
                >
                  Start Order
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubmitRequirements;

SubmitRequirements.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
