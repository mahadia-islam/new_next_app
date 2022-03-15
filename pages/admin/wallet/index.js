import { Col, Container, Form, Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./wallet.module.scss";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

const Wallet = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <DashBoardLayout>
      <section>
        <Container>
          <Row>
            <Col lg="10 mx-auto">
              <div className={classes.wallet_card}>
                <div className={classes.single_card}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={`${classes.single_card} ${classes.bg_card}`}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={classes.single_card}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={`${classes.single_card} ${classes.bg_card}`}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={classes.single_card}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={`${classes.single_card} ${classes.bg_card}`}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={classes.single_card}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
                <div className={`${classes.single_card} ${classes.bg_card}`}>
                  <div className={classes.card_top}>
                    <div className={classes.card_top_grid}>
                      <div className="d-flex align-items-center">
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(/images/author2.png)`,
                          }}
                        ></div>
                        <p>sajawal</p>
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                        <div className={classes.tag}>
                          <span>Reveunes: N0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.card_bottom}>
                    <Col lg="5" className={classes.select_input}>
                      <Form.Select aria-label="Default select example">
                        <option>Select wallet</option>
                        <option value="1">Pending</option>
                        <option value="2">Deposits</option>
                        <option value="3">Refunds</option>
                        <option value="4">Revenues</option>
                      </Form.Select>
                      <Form.Control type="text" placeholder="Amount" />
                    </Col>
                    <p className={classes.action}>Action: </p>
                    <Form.Check
                      inline
                      label="Increase"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline-1`}
                    />
                    <Form.Check
                      inline
                      label="Decrease"
                      name="group1"
                      type="radio"
                      className={classes.radio_btn}
                      id={`inline`}
                    />
                    <button>Update</button>
                  </div>
                </div>
              </div>
            </Col>
            <div className="d-flex justify-content-center my-5">
              <LoadMoreButton />
            </div>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Wallet;

Wallet.getLayout = (page) => <>{page} </>;
