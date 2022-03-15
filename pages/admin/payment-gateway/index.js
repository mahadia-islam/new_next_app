import { Col, Container, Form, Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./payment_gateway.module.scss";

const PaymentGateway = () => {
  return (
    <DashBoardLayout appbar_title="Payment Gateway">
      <section>
        <Container>
          <Row>
            <Col lg="10 mx-auto mt-5">
              <h4 className={classes.account_title}>Account Details</h4>

              <div className={classes.input_grid}>
                <div className={classes.grid_card}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label className={classes.input_label}>
                      Account Name
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </div>
                <div className={classes.grid_card}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label className={classes.input_label}>
                      Account Number
                    </Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </div>
              </div>
              <div className={classes.input_grid}>
                <div className={classes.grid_card}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label className={classes.input_label}>
                      Bank Name
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className={classes.grid_card}>
                  <Form.Group controlId="formGridEmail">
                    <Form.Label className={classes.input_label}>
                      Account Type
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>

              <div className={classes.update}>
                <button>Update</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default PaymentGateway;

PaymentGateway.getLayout = (page) => <>{page} </>;
