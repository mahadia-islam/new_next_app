import { Col, Container, Form, Row } from "react-bootstrap";
import classes from "./edit_profile.module.css";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";

const EditProfile = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const banks = [
    "Access Bank",
    "Access Bank",
    "Citi Bank",
    "Ecobank",
    "FCMB",
    "Fidelity Bank",
    "First Bank of Nigeria ",
    "GTBank Plc ",
    "Heritage Bank",
    "JAIZ Bank",
    "Keystone Bank",
    "Kuda",
    "Paga",
    "PALMPAY",
    "PayAttitude Online",
    "Paycom(OPay)",
    "POLARIS BANK",
    "Paycom(OPay)",
    "Rubies",
    "Providus Bank",
    "Sparkle",
    "Stanbic IBTC Bank",
    "Stanbic Mobile Money",
    "Standard Chartered",
    "Sterling Bank",
    "SUNTRUST BANK",
    "Titan Trust Bank",
    "Union Bank",
    "United Bank of Africa (UBA)",
    "Unity Bank",
    "VDF MFB",
    "Wema Bank",
    "ZENITH BANK PLC",
  ];
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8 mx-auto" className={classes.card_container}>
            <Col lg="6 mx-auto">
              <Form onSubmit={submitHandler} noValidate>
                <div>
                  <h3 className={classes.title}>Personal Details</h3>
                </div>
                <div className={classes.form_row}>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Username
                    </Form.Label>
                    <Form.Control type="text" className={classes.input_field} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Full name
                    </Form.Label>
                    <Form.Control type="text" className={classes.input_field} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      City
                    </Form.Label>
                    <Form.Control type="text" className={classes.input_field} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Mobile No.
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className={classes.input_field}
                    />
                    <Form.Text className="text-danger">
                      <small> *For sms notifications</small>
                    </Form.Text>
                  </Form.Group>
                </div>
                <div className={classes.form_row}>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>Bio</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={8}
                      className={classes.input_field}
                    />
                    <Form.Text className="text-danger">
                      <small>
                        *Posting of contact informations may result in perment
                        blocking of your account
                      </small>
                    </Form.Text>
                  </Form.Group>
                  <div>
                    <h5 className={classes.input_section_title}>
                      Change Password
                    </h5>
                  </div>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className={classes.input_field}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Repeat Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      className={classes.input_field}
                    />
                  </Form.Group>
                  <div>
                    <h5 className={classes.input_section_title}>
                      Bank Transfer Details
                    </h5>
                  </div>
                </div>

                <div className={`mb-3 ${classes.form_row}`}>
                  <p className={classes.input_label}>Bank name</p>
                  <Form.Select
                    className={classes.input_field}
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  >
                    {banks.map((item, indx) => (
                      <option value={item} key={indx}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <div className={classes.form_row}>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Account name
                    </Form.Label>
                    <Form.Control type="text" className={classes.input_field} />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Account No.
                    </Form.Label>
                    <Form.Control
                      type="number"
                      className={classes.input_field}
                    />
                  </Form.Group>
                </div>

                <div className="d-flex justify-content-center">
                  <button className={classes.create_fix} type="submit">
                    Save
                  </button>
                </div>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default EditProfile;

EditProfile.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
