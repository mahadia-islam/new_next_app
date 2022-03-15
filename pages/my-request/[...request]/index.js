import { Col, Container, Row } from "react-bootstrap";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import classes from "./request.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const SingleRequest = ({ params }) => {
  let param = params.request[0];
  const router = useRouter();

  return (
    <section className={classes.request}>
      <Container>
        <Row className="mb-5">
          <div>
            <h4 className={classes.title}>Job Request</h4>
          </div>{" "}
          <Col lg="10 mx-auto" className={classes.job_request_card}>
            <div className={classes.card_content}>
              <div className="d-flex align-items-center  mb-4">
                <div className={classes.user_img}>
                  <Image
                    src="/images/author2.png"
                    alt="user_img"
                    width={50}
                    height={50}
                  />
                </div>
                <h4>
                  I want my ui design done asap with with with immediate
                  immeadite effect right now!
                </h4>
              </div>
              <div className={classes.offer_details}>
                <p>
                  Hi guys, I urgently need a standalone bulk SMS and bulk voice
                  messaging service just like voiceandtext.com <br /> <br /> 1
                  Normal bulk SMS messaging <br /> 2 Normal bulk voice messaging{" "}
                  <br />
                  3. Normal bulk email messaging <br /> 4 Online payment using
                  cashenvoy and Luno wallet <br /> 5 Up to &#x20A6;500 Referral
                  bonus system <br /> 6 Up to &#x20A6;100 Sign up bonus <br /> 7
                  Sms, Voice and email advert
                  <br /> 8 Credit Transfer to other users <br /> 9 N200 bonus
                  for every N3000 credit purchase <br /> 10 Shortcode purchase
                  and manager <br /> 11 Can upload contct either by typing in
                  the contacts or uploading it from Excel other file extension{" "}
                  <br /> 12 Contact Might be either in local or international
                  format <br /> 13 Send sms and voice sms to all nation in the
                  world.
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-wrap">
                  <div className="d-flex me-4 align-items-center">
                    <LibraryBooksIcon className={classes.books_icon} />
                    <span>0 offer</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <DateRangeOutlinedIcon className={classes.books_icon} />
                    <span>1 Day delivery</span>
                  </div>
                </div>
                <div>
                  <h5>&#x20A6;5000</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>{" "}
        {param === "norequest" ? (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className={classes.no_offer}>
              <h5>No Offer has been placed</h5>
            </div>
          </div>
        ) : (
          <>
            <Row>
              <div>
                <h4 className={classes.title}>Your Offer</h4>
              </div>{" "}
              <Col lg="10 mx-auto" className={classes.job_request_card}>
                <div className={classes.card_content}>
                  <div className="d-flex align-items-center  mb-4">
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
                  <div className={classes.offer_details}>
                    <p>
                      Hi guys, I urgently need a standalone bulk SMS and bulk
                      voice messaging service just like voiceandtext.com <br />{" "}
                      <br /> 1 Normal bulk SMS messaging <br /> 2 Normal bulk
                      voice messaging <br />
                      3. Normal bulk email messaging <br /> 4 Online payment
                      using cashenvoy and Luno wallet <br /> 5 Up to &#x20A6;500
                      Referral bonus system <br /> 6 Up to &#x20A6;100 Sign up
                      bonus <br /> 7 Sms, Voice and email advert
                      <br /> 8 Credit Transfer to other users <br /> 9 N200
                      bonus for every N3000 credit purchase <br /> 10 Shortcode
                      purchase and manager <br /> 11 Can upload contct either by
                      typing in the contacts or uploading it from Excel other
                      file extension <br /> 12 Contact Might be either in local
                      or international format <br /> 13 Send sms and voice sms
                      to all nation in the world.
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-wrap">
                      <div className="d-flex me-4 align-items-center">
                        <CircleIcon className={classes.circle_icon} />
                        <Link href="/username">
                          <a className="text-decoration-none">
                            <span>username23</span>
                          </a>
                        </Link>
                      </div>
                      <div className="d-flex me-4  align-items-center">
                        <DateRangeOutlinedIcon className={classes.books_icon} />
                        <span>1 Day delivery</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <StarIcon className={classes.rating_icon} />
                        <span>5.0</span>
                        <span>(2345)</span>
                      </div>
                    </div>
                    <div>
                      <h5>&#x20A6;5000</h5>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    className={classes.message}
                    onClick={() => router.push("/inbox/dev_aslam")}
                  >
                    Message
                  </button>
                  <button
                    className={classes.send_offer}
                    onClick={() => router.push("/order-details")}
                  >
                    Order Now
                  </button>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;

  console.log(params);
  return {
    props: {
      params,
    },
  };
}

export default SingleRequest;

SingleRequest.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
