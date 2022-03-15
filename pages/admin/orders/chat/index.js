import { Col, Container, Row } from "react-bootstrap";
import classes from "./chat.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import WarningIcon from "@mui/icons-material/Warning";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { dummy_persons } from "../../../../dummy_data/dummy_persons";
import CustomOfferModal from "../../../../components/CustomOfferModal/CustomOfferModal";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DashBoardLayout from "../../../../components/DashBoardLayout/DashBoardLayout";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";

const Inbox = ({ person }) => {
  const [visited, setVisited] = useState("");
  const [createOffer, setCreateOffer] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const [personData, setPersonData] = useState({
    username: "dev_aslam",
    description:
      "I am a graphics designer with more than 2yrs of experience. Clients satisfaction is a top priority to me. You can contact me anytime. I am always...",
    img: "/images/author.jpg",
    chat: [
      {
        by: "him",
        msg: "Good morning, I want to boost my telegram channel in three weeks to help sponsor my new single I would be releasing",
        time: "2022/01/28 15:33:12",
      },
      {
        by: "me",
        msg: "Good morning, I want to boost my telegram channel in three weeks to help sponsor my new single I would be releasing",
        time: "2022/01/28 15:37:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost",
        time: "2022/01/28 15:39:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost my telegram channel in three",
        time: "2022/01/28 15:42:12",
      },
      {
        by: "me",
        msg: "Good morning, I want to boost my telegram channel in three weeks to help sponsor my new single I would be releasing",
        time: "2022/01/28 15:45:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost fsadf  fsadf sf  fas fs d  fsa",
        time: "2022/01/28 15:49:12",
      },
      {
        by: "me",
        msg: "Good morning, brother kemon acho tumi",
        time: "2022/01/28 15:59:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost",
        time: "2022/01/28 15:39:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost my telegram channel in three",
        time: "2022/01/28 15:42:12",
      },
      {
        by: "me",
        msg: "Good morning, I want to boost my telegram channel in three weeks to help sponsor my new single I would be releasing",
        time: "2022/01/28 15:45:12",
      },
      {
        by: "him",
        msg: "Good morning, I want to boost fsadf  fsadf sf  fas fs d  fsa",
        time: "2022/01/28 15:49:12",
      },
      {
        by: "me",
        msg: "Good morning, brother kemon acho tumi",
        time: "2022/01/28 15:59:12",
      },
    ],
  });
  const inputRef = useRef();
  const router = useRouter();

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("February 28, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days < 10 ? `0${days}` : days);
        setTimerHours(hours < 10 ? `0${hours}` : hours);
        setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes);
        setTimerSeconds(seconds < 10 ? `0${seconds}` : seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <DashBoardLayout appbar_title="Dashboard">
      <section className={classes.inbox_section}>
        <Container>
          <Row>
            <Col
              lg="4"
              className={`${classes.chat_col} ${classes.mobile_chat_col}`}
            >
              <div className={classes.chat_box_header}>
                <div className={classes.order_chat_top}>
                  <div
                    className={classes.order_img}
                    style={{
                      backgroundImage: `url(/images/order_card_img.png)`,
                    }}
                  ></div>
                  <p>
                    I will design a professional logo for your and your
                    businesss
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div
                      className={classes.buyer_img}
                      style={{
                        backgroundImage: `url(/images/author2.png)`,
                        marginLeft: 0,
                      }}
                    ></div>
                    <p className={classes.user_name}>radovandanley</p>
                  </div>
                  <div className={classes.order_price}>
                    <p>N10,000 | Fee: N200 </p>
                  </div>
                </div>
              </div>
              <div className={classes.order_chat_left_body}>
                <div className={classes.timer_div}>
                  <h1 className={classes.time_ticking}>{timerDays}</h1>
                  <h1 className={classes.time_ticking_colon}>:</h1>
                  <h1 className={classes.time_ticking}>{timerHours}</h1>
                  <h1 className={classes.time_ticking_colon}>:</h1>

                  <h1 className={classes.time_ticking}>{timerMinutes}</h1>
                  <h1 className={classes.time_ticking_colon}>:</h1>
                  <h1 className={classes.time_ticking}>{timerSeconds}</h1>
                </div>
                <div className={classes.order_details}>
                  <p>ID</p>
                  <p>#65</p>
                </div>
                <div className={classes.order_details}>
                  <p>Total</p>
                  <p>N5,150</p>
                </div>
                <div className={classes.order_details}>
                  <p>To Deliver</p>
                  <p>21 May 2020</p>
                </div>
                <div className={classes.order_details}>
                  <p>Seller</p>
                  <p>Demouser</p>
                </div>
                <div className={classes.requirement}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Requirements</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        This is the sample of the logo i want done please make
                        everything nice
                      </p>
                      <Divider />
                      <div>
                        <span>Attachment</span>
                        <p>
                          DSC.001.jpg <DownloadIcon />
                        </p>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div>
                  <h4 className={classes.extras}>Extras</h4>
                  <div className={classes.extras_div}>
                    <div className="d-flex justify-content-between align-items-end pb-2">
                      <div>
                        <p className={classes.fast_delivery}>Fast Delivery</p>
                        <p>
                          N1000 <span>(+1 day)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <CheckIcon className={classes.check_icon} />
                        <p className={classes.paid}>PAID</p>
                      </div>
                    </div>
                    <Divider />
                  </div>
                  <div className={classes.extras_div}>
                    <div className="d-flex justify-content-between align-items-end pb-2">
                      <div>
                        <p className={classes.fast_delivery}>Fast Delivery</p>
                        <p>
                          N1000 <span>(+1 day)</span>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <CheckIcon className={classes.check_icon} />
                        <p className={classes.paid}>PAID</p>
                      </div>
                    </div>
                    <Divider />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="8" className={`${classes.chat_body_col}`}>
              <Row>
                <>
                  <Col lg="12" className={classes.appbar}>
                    <Col lg="10">
                      <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className={classes.buyer}>
                          <p>Buyer</p>
                          <div
                            className={classes.buyer_img}
                            style={{
                              backgroundImage: `url(/images/author2.png)`,
                            }}
                          ></div>
                          <p>dev_aslam</p>
                        </div>
                        <div className={classes.order_status}>
                          <p>
                            Status: <span>In Progress</span>
                          </p>
                          <button>Cancel Order</button>
                        </div>
                      </div>
                    </Col>
                  </Col>
                  {/* <Col lg="8" className={classes.message_body}>
               
              </Col> */}
                  <Col lg="10" className={classes.message_body_mid}>
                    <div className={classes.mobile_messages_body}>
                      {personData &&
                        personData.chat.map((ch, indx) => (
                          <Fragment key={indx}>
                            {ch.by === "him" ? (
                              <div className={classes.from_msg_box}>
                                <Col
                                  lg="5"
                                  className={classes.message_body_text}
                                >
                                  <p>{ch.msg}</p>
                                </Col>
                              </div>
                            ) : (
                              <>
                                <div className={classes.to_msg_box}>
                                  <Col
                                    lg="5"
                                    className={`${classes.message_body_text} ${classes.from_me}`}
                                  >
                                    <p>{ch.msg}</p>
                                  </Col>
                                </div>
                              </>
                            )}
                          </Fragment>
                        ))}

                      {
                        <div
                          className={
                            createOffer
                              ? classes.to_msg_box
                              : classes.hide_offer
                          }
                        >
                          <Col lg="6">
                            <div className={classes.offer_card}>
                              <div className={classes.offer_content}>
                                <div>
                                  <Image
                                    src="/images/offer_img.png"
                                    alt="fix_img"
                                    width={103}
                                    height={77}
                                  />
                                </div>
                                <div className={classes.offer_title_text}>
                                  <h6>CUSTOM OFFER</h6>
                                  <p>
                                    Loraeam ipsum dolor isura ctreed bla engl
                                    Loraeam ipsum dolor isura ctreed bla{" "}
                                  </p>
                                </div>
                              </div>
                              <div className={classes.offer_price_days}>
                                <p>1 Day(s) delivery</p>
                                <h6>&#x20A6;5,000</h6>
                              </div>
                              <div>
                                <button
                                  className={classes.order_now}
                                  onClick={() => router.push("/order-details")}
                                >
                                  Order Now
                                </button>
                              </div>
                            </div>
                          </Col>
                        </div>
                      }

                      <div
                        className={
                          createOffer ? classes.to_msg_box : classes.hide_offer
                        }
                      >
                        <Col lg="6">
                          <div className={classes.violation_warning}>
                            <InfoIcon className={classes.info_icon} />
                            <p>
                              Your messages was flagged for services by our
                              team, due to possible Terms of Services violation.
                              This process may take up to 24 hours. In the
                              meantime, your messages is not visible to
                              @username
                            </p>
                          </div>
                        </Col>
                      </div>
                      <div
                        className={
                          createOffer ? classes.to_msg_box : classes.hide_offer
                        }
                      >
                        <Col lg="6">
                          <div className={classes.approve_access}>
                            <CheckIcon className={classes.check_icon} />
                            <p>
                              Your messages was flagged for services by our
                              team, due to possible Terms of Services violation.
                              This process may take up to 24 hours. In the
                              meantime, your messages is not visible to
                              @username
                            </p>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Inbox;

Inbox.getLayout = (page) => <>{page} </>;
