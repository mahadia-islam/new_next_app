import { Col, Container, Form, Row } from "react-bootstrap";
import classes from "./new_job_request.module.css";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";

const NewJobRequest = () => {
  const categories = [
    "Business/Branding",
    "Digital Marketing",
    "Ecommerce",
    "Graphics Design",
    "Logo Design",
    "Mobile App",
    "SEO",
    "Software Development",
    "Video & Animations",
    "Web Design/Dev",
    "Writing",
  ];

  const deliveryDays = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "10",
    "15",
    "30",
    "45",
    "60",
    "90",
  ];

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Container>
        <Row className={classes.request_row}>
          <Col lg="8 mx-auto" className={classes.card_container}>
            <Col lg="6 mx-auto">
              <Form onSubmit={submitHandler} noValidate>
                <div>
                  <h3 className={classes.title}>New Request</h3>
                </div>
                <div className={classes.form_row}>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Title
                    </Form.Label>
                    <Form.Control type="text" className={classes.input_field} />
                  </Form.Group>
                </div>
                <div className={classes.form_row}>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.input_label}>
                      Describe the job you want done.
                    </Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={8}
                      className={classes.input_field}
                    />
                  </Form.Group>
                </div>

                <div className={`mb-3 ${classes.form_row}`}>
                  <p className={classes.input_label}>Select a Category</p>
                  <Form.Select
                    className={classes.input_field}
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  >
                    {categories.map((item, indx) => (
                      <option value={item} key={indx}>
                        {item}
                      </option>
                    ))}
                  </Form.Select>
                </div>
                <div className={classes.form_row}>
                  <p className={classes.input_label}>Delivery Days</p>
                  <Form.Select
                    className={classes.input_field}
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  >
                    {deliveryDays.map((item, indx) => (
                      <option value={item} key={indx}>
                        {item} days
                      </option>
                    ))}
                  </Form.Select>
                </div>

                <div className="d-flex justify-content-center">
                  <button className={classes.create_fix} type="submit">
                    Post Request
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

export default NewJobRequest;

NewJobRequest.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
