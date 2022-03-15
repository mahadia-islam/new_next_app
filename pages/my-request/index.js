import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import classes from "./my_request.module.css";
import FixSlider from "../../components/FixSlider/FixSlider";
import MobileSlider from "../../components/MobileSlider/MobileSlider";
import { categories } from "../../dummy_data/dummy_fixes";
import { useRouter } from "next/router";

const MyRequest = () => {
  const router = useRouter();
  return (
    <section className={classes.my_request}>
      <Container>
        <Row className="mb-5">
          <Col lg="11 mx-auto">
            <h4 className={classes.title}>My Request</h4>
          </Col>
          <Col
            lg="9 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/my-request/2offer")}
          >
            <div className={classes.card_content}>
              <div className={classes.card_content_top}>
                <div className="d-flex align-items-center">
                  <div className={classes.user_img}>
                    <Image
                      src="/images/author4.png"
                      alt="user_img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4>
                    Dignissim nec sed libero, vitae. Et etiam nibh sodales
                    adipiscing.
                  </h4>
                </div>
                <div>
                  <h5>&#x20A6;5000</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="d-flex me-4 align-items-center">
                    <LibraryBooksIcon className={classes.books_icon} />
                    <span>2 offer</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <DateRangeOutlinedIcon className={classes.books_icon} />
                    <span>1 Day delivery</span>
                  </div>
                </div>
                <div>
                  <h6 className={classes.approve}>Approved</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg="9 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/my-request/norequest")}
          >
            <div className={classes.card_content}>
              <div className={classes.card_content_top}>
                <div className="d-flex align-items-center">
                  <div className={classes.user_img}>
                    <Image
                      src="/images/author4.png"
                      alt="user_img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4>
                    Dignissim nec sed libero, vitae. Et etiam nibh sodales
                    adipiscing.
                  </h4>
                </div>
                <div>
                  <h5>&#x20A6;5000</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <DateRangeOutlinedIcon className={classes.books_icon} />
                    <span>1 Day delivery</span>
                  </div>
                </div>
                <div>
                  <h6 className={classes.pending}>Pending</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col
            lg="9 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/my-request/norequest")}
          >
            <div className={classes.card_content}>
              <div className={classes.card_content_top}>
                <div className="d-flex align-items-center">
                  <div className={classes.user_img}>
                    <Image
                      src="/images/author4.png"
                      alt="user_img"
                      width={50}
                      height={50}
                    />
                  </div>
                  <h4>
                    Dignissim nec sed libero, vitae. Et etiam nibh sodales
                    adipiscing.
                  </h4>
                </div>
                <div>
                  <h5>&#x20A6;5000</h5>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <div className="d-flex align-items-center">
                    <DateRangeOutlinedIcon className={classes.books_icon} />
                    <span>1 Day delivery</span>
                  </div>
                </div>
                <div>
                  <h6 className={classes.declined}>Declined</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div className={classes.fix_cat_title}>
            <h4>Recommended for You</h4>
          </div>
          <MobileSlider fixes={categories} slide_to_show={4} />
          <FixSlider fixes={categories} slide_to_show={4} />
        </Row>
      </Container>
    </section>
  );
};

export default MyRequest;

MyRequest.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
