import { Col, Container, Row } from "react-bootstrap";
import classes from "./FeelTheBlend.module.css";

const FeelTheBlend = () => {
  return (
    <section className={classes.feel_the_blend}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={classes.details}>
              <h1>Feel The Blend</h1>
              <p>
                We make buying and selling more <br /> of a colaborative
                relation rather than a manipulative one
              </p>
            </div>
          </Col>
          <div className={classes.card_grid}>
            <div
              className={classes.grid_card}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="0"
            >
              <h6>Find Services</h6>
              <div className={classes.number_div1}>
                <h3>1</h3>
              </div>
              <p>
                Search for a service, with few details, describe your project.
                You will have the freedom to choose from lots of expert that are
                ready to get your jobs
              </p>
            </div>
            <div
              className={classes.grid_card}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <h6>Hire with Ease</h6>
              <div className={classes.number_div2}>
                <h3>2</h3>
              </div>
              <p>
                We only house the best hands when it comes to digital jobs, and
                we will walk you through every process until your job is done.
                No setup fee, No hidden charges
              </p>
            </div>
            <div
              className={classes.grid_card}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <h6>Work Together</h6>
              <div className={classes.number_div3}>
                <h3>3</h3>
              </div>
              <p>
                Chat dirtectly with your expert. Ask questions and request for
                changes where possible. Feel the blend of friendship and work in
                one place.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default FeelTheBlend;
