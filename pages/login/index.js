import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import classes from "./login.module.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitHandler = (e) => {
    e.preventDefault();
    router.push("/users/username/dashboard");
  };
  return (
    <section>
      <Container fluid>
        <Row>
          <Col lg="7" className={classes.left_col_login}>
            <Col lg="6" className={classes.login_card}>
              <h3 className={classes.title}>Login to your account!</h3>
              <Form onSubmit={submitHandler} noValidate>
                <div>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.label}>
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      className={classes.input_field}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className={classes.label}>Password</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Password"
                      className={classes.input_field}
                    />
                  </Form.Group>
                  <div className={classes.forget_password_div}>
                    <button
                      className={classes.forget_password}
                      type="button"
                      onClick={handleShow}
                    >
                      Forget Password?
                    </button>
                  </div>
                  <button className={classes.login_btn} type="submit">
                    Login to Continue
                  </button>
                  <p className={classes.have_account}>
                    Don’t have an account ?
                    <Link href="/signup">
                      <a className={classes.sign_up}>Sign up</a>
                    </Link>
                  </p>
                </div>
              </Form>
            </Col>
          </Col>
          <Col lg="5" className={classes.left_col_reg}>
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logo.png"
                      width={174}
                      height={64}
                      alt="logo"
                      objectFit="fill"
                    />
                  </a>
                </Link>
              </div>
              <div>
                <p className={classes.about}>
                  We give you the levereage to get jobs <br /> done person in an
                  easy, fast and <br /> secured way
                </p>
              </div>
              <div>
                <h4 className={classes.download}>Download Our App</h4>
              </div>
              <div className={classes.download_link}>
                <div className={classes.download_store}>
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/app_store.png"
                        alt="app_store"
                        width={72}
                        height={25}
                      />
                    </a>
                  </Link>
                </div>
                <div className={classes.download_store}>
                  <Link href="/">
                    <a>
                      <Image
                        src="/images/play_store.png"
                        alt="play_store"
                        width={90}
                        height={25}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        keyboard={false}
        className={`forgot_modal ${classes.forgot_modal}`}
      >
        <Modal.Body className={classes.modal_body}>
          <div className={classes.modal_card_div}>
            <h4>Forgot Password?</h4>
            <p>Please enter your details. We will send you a new password.</p>
            <Col lg="8">
              <Form.Group className="mb-3">
                <Form.Label className={classes.label}>
                  Username or Email
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username or Email"
                  className={classes.forgot_field}
                />
              </Form.Group>
            </Col>

            <Col lg="8" className={classes.modal_btn_div}>
              <button onClick={handleClose} className={classes.go_back}>
                Go Back
              </button>
              <button className={classes.reset}>Reset</button>
            </Col>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Login;

Login.getLayout = (page) => <>{page}</>;
