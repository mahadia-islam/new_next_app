import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import classes from "./signup.module.css";

const SignUp = () => {
  const [randNum, setRandNum] = useState({});
  const [newUser, setNewUser] = useState({});
  const router = useRouter();

  useEffect(() => {
    let rand_num_1 = Math.floor(Math.random() * 50);
    let rand_num_2 = Math.floor(Math.random() * 50);
    setRandNum({
      rand1: rand_num_1,
      rand2: rand_num_2,
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    router.push("/users/username/dashboard");

    if (randNum.rand1 + randNum.rand2 == newUser.numToCheck) {
      console.log("correct answer");
    } else {
      console.log(randNum.rand1, randNum.rand2, newUser.numToCheck);
    }
  };

  return (
    <section className={classes.sign_up}>
      <Container fluid>
        <Row>
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
          <Col lg="7" className={classes.reg_right_col}>
            <div>
              <Row>
                <Col lg="6">
                  <h4 className={classes.sing_up_title}>Create Account</h4>
                  <p>
                    Follow the instructions to make it easier to register and
                    you will be able to explore inside
                  </p>
                </Col>
                <Col lg="6">
                  <p className={classes.have_account}>
                    Do you have account?
                    <Link href="/login">
                      <a>Sign in</a>
                    </Link>
                  </p>
                </Col>
              </Row>
              <Form onSubmit={submitHandler} noValidate>
                <Row>
                  <Col lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        Password
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        Mobile Number
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Mobile Number"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        {`${randNum.rand1} +  ${randNum.rand2}`}
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter the correct number"
                        className={classes.input_field}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            numToCheck: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>
                        Retype Passwrod
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Retype Password"
                        className={classes.input_field}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className={classes.label}>Country</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        className={classes.input_field}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Col lg="6">
                  <button className={classes.create_account} type="submit">
                    Create Account
                  </button>
                </Col>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignUp;

SignUp.getLayout = (page) => <>{page}</>;
