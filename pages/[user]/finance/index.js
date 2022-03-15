import { Col, Container, Row } from "react-bootstrap";
import classes from "./finance.module.css";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import FooterBottom from "../../../components/FooterBottom/FooterBottom";
import Image from "next/image";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";

const Finance = () => {
  const router = useRouter();
  return (
    <section className={classes.finance}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <h1 className={classes.title}>Finance</h1>
          </Col>
          <Col lg="7 mx-auto">
            <div className={classes.earning_row}>
              <div className={`${classes.revenue_card} ${classes.card}`}>
                <span className={classes.tag}>Revenue</span>

                <div
                  className={classes.img_div}
                  style={{ backgroundImage: `url(/icons/fi1.png)` }}
                ></div>
                <h5 className={classes.amount}>&#x20A6;872,000.0</h5>
              </div>
              <div className={`${classes.pending_card} ${classes.card}`}>
                <span className={classes.tag}>Pending</span>
                <div
                  className={classes.img_div}
                  style={{ backgroundImage: `url(/icons/fi2.png)` }}
                ></div>
                <h5 className={classes.amount}>&#x20A6;45,000.0</h5>
              </div>
              <div className={`${classes.refund_card} ${classes.card}`}>
                <span className={classes.tag}>Refund</span>
                <div
                  className={classes.img_div}
                  style={{ backgroundImage: `url(/icons/fi3.png)` }}
                ></div>
                <h5 className={classes.amount}>&#x20A6;50,000.0</h5>
              </div>
              <div className={`${classes.deposit_card} ${classes.card}`}>
                <span className={classes.tag}>Deposit</span>
                <div
                  className={classes.img_div}
                  style={{ backgroundImage: `url(/icons/fi4.png)` }}
                ></div>
                <h5 className={classes.amount}>&#x20A6;0.0</h5>
              </div>
            </div>
          </Col>
          <Col lg="8 mx-auto">
            <h4 className={classes.withdraw_title}>Withdrawals</h4>
          </Col>
          <Col lg="8 my-2 mx-auto">
            <div className={classes.withdraw_card}>
              <Col lg="5" className={classes.user_info}>
                <h6>Joseph Prince</h6>
                <p>0000000011</p>
                <p>GTBank</p>
              </Col>
              <Col lg="5" className={classes.widthdraw_info}>
                <h6>&#x20A6;10,000</h6>
                <p>09 Jul 20</p>
                <p>5:16pm</p>
              </Col>
              <Col lg="1" className="d-flex justify-content-end">
                <IconButton aria-label="delete">
                  <CancelRoundedIcon className={classes.delete_icon} />
                </IconButton>
              </Col>
            </div>
          </Col>
          <Col lg="8 my-2 mx-auto">
            <div className={classes.withdraw_card}>
              <Col lg="5" className={classes.user_info}>
                <h6>Joseph Prince</h6>
                <p>0000000011</p>
                <p>GTBank</p>
              </Col>
              <Col lg="5" className={classes.widthdraw_info}>
                <h6>&#x20A6;10,000</h6>
                <p>09 Jul 20</p>
                <p>5:16pm</p>
              </Col>
              <Col lg="1" className="d-flex justify-content-end">
                <IconButton aria-label="delete">
                  <CancelRoundedIcon className={classes.delete_icon} />
                </IconButton>
              </Col>
            </div>
          </Col>
          <Col lg="7 mx-auto">
            <div className={classes.button_div}>
              <button
                className={classes.request}
                onClick={() =>
                  router.push("/username/finance/withdrawal-request")
                }
              >
                Request Withdrawal
              </button>
              <button
                className={classes.history}
                onClick={() => router.push("/username/finance/transactions")}
              >
                Transaction History
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Finance;

Finance.getLayout = (page) => (
  <>
    <LandingPageHeader />
    {page}
  </>
);
