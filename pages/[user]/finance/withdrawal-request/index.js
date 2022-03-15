import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import FooterBottom from "../../../../components/FooterBottom/FooterBottom";
import LandingPageHeader from "../../../../components/LandingPageHeader/LandingPageHeader";
import classes from "./withdrawal_request.module.css";
import CreateIcon from "@mui/icons-material/Create";

const WithdrawalRequest = () => {
  return (
    <section className={classes.withdrawal_request}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <h1 className={classes.title}>Request Withdrawal</h1>
          </Col>
          <Col lg="6 mx-auto">
            <div className="d-flex align-items-start">
              <div className={`${classes.revenue_card} ${classes.card}`}>
                <span className={classes.tag}>Revenue</span>
                <Image
                  src="/icons/fi1.png"
                  alt="logo_img"
                  width={50}
                  height={50}
                />
                <h5 className={classes.amount}>&#x20A6;872,000.0</h5>
              </div>
              <div className={classes.withdraw_card}>
                <input
                  type="text"
                  placeholder="Enter Amount"
                  className={classes.amount_input}
                />
                <div className={classes.bank_details}>
                  <div className={classes.bank_title}>
                    <p>Bank Details </p>
                    <CreateIcon className={classes.edit_icon} />
                  </div>
                  <div className={classes.bank_account_info}>
                    <div>
                      <p>Account Name:</p>
                      <p>Account No:</p>
                      <p>Bank:</p>
                    </div>
                    <div>
                      <p>Fountain Bank Account</p>
                      <p>2891428066</p>
                      <p>GTBank</p>
                    </div>
                  </div>
                </div>
                <input
                  type="password"
                  className={classes.amount_input}
                  placeholder="Current Password"
                />
                <div>
                  <button className={classes.withdraw_btn}>Withdraw</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WithdrawalRequest;

WithdrawalRequest.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
