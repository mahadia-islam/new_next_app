import Image from "next/image";
import { Container, Row } from "react-bootstrap";
import classes from "./FundsProtected.module.css";

const FundsProtected = () => {
  return (
    <section className={classes.funds_protected}>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Image
            src="/images/shield.png"
            alt="sheild_img"
            width={227}
            height={227}
          />
          <h3>Funds Protected</h3>
          <p>
            We monitor every transcation and have smart procedures to protect{" "}
            <br />
            you from phishing, fraud and identity theft.
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default FundsProtected;
