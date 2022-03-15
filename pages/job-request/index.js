import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import classes from "./job_request.module.css";
import { useRouter } from "next/router";

const JobRequest = () => {
  const router = useRouter();

  return (
    <section className={classes.job_request}>
      <Container>
        <Row>
          <div>
            <h4 className={classes.title}>Job Request</h4>
          </div>
          <Col
            lg="10 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/job-request/job-request-details")}
          >
            <div className={classes.user_img}>
              <Image
                src="/images/author2.png"
                alt="user_img"
                width={50}
                height={50}
              />
            </div>
            <div className={classes.card_content}>
              <div className="d-flex justify-content-between mb-4">
                <h6>
                  I want my ui design done asap with with with immediate
                  immeadite effect right now!
                </h6>
                <h5>&#x20A6;5000</h5>
              </div>
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
            </div>
          </Col>
          <Col
            lg="10 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/job-request/job-request-details")}
          >
            <div className={classes.user_img}>
              <Image
                src="/images/author2.png"
                alt="user_img"
                width={50}
                height={50}
              />
            </div>
            <div className={classes.card_content}>
              <div className="d-flex justify-content-between mb-4">
                <h6>
                  I want my ui design done asap with with with immediate
                  immeadite effect right now!
                </h6>
                <h5>&#x20A6;5000</h5>
              </div>
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
            </div>
          </Col>
          <Col
            lg="10 mx-auto"
            className={classes.job_request_card}
            onClick={() => router.push("/job-request/job-request-details")}
          >
            <div className={classes.user_img}>
              <Image
                src="/images/author2.png"
                alt="user_img"
                width={50}
                height={50}
              />
            </div>
            <div className={classes.card_content}>
              <div className="d-flex justify-content-between mb-4">
                <h6>
                  I want my ui design done asap with with with immediate
                  immeadite effect right now!
                </h6>
                <h5>&#x20A6;5000</h5>
              </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JobRequest;

JobRequest.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
