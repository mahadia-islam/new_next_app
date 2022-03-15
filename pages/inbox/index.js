import { Col, Container, Row } from "react-bootstrap";
import classes from "./inbox.module.css";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Divider from "@mui/material/Divider";
import WarningIcon from "@mui/icons-material/Warning";
import ForumIcon from "@mui/icons-material/Forum";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { dummy_persons } from "../../dummy_data/dummy_persons";
import CustomOfferModal from "../../components/CustomOfferModal/CustomOfferModal";
import InfoIcon from "@mui/icons-material/Info";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Inbox = ({ person }) => {
  const [visited, setVisited] = useState("");
  const [createOffer, setCreateOffer] = useState(false);
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

  let hour;
  let minute;
  let ampm;

  const timeArr =
    person &&
    person.chat.forEach((ch, indx) => {
      if (indx === person.chat.length - 1) {
        const selectedTimes = new Date(ch.time).toLocaleTimeString().split(":");

        hour = selectedTimes[0];
        minute = selectedTimes[1];
        ampm = selectedTimes[2].split(" ")[1];
      }
    });

  return (
    <section className={classes.inbox_section}>
      <Container>
        <Row>
          <Col
            lg="3"
            className={`${classes.chat_col} ${classes.mobile_chat_col}`}
          >
            <div className={classes.chat_box_header}>
              <h5 className={classes.header_title}>Messages</h5>
              <SearchIcon />
            </div>
            <div
              className={`${classes.messages_list} ${
                person && person.username
                  ? classes.mobile_chatbody_show
                  : classes.mobile_chatbody_hide
              }`}
            >
              {dummy_persons.map((person, indx) => (
                <Link href={`/inbox/${person.username}`} key={indx}>
                  <a
                    className={classes.user_link}
                    onClick={() => setVisited(person.username)}
                  >
                    <div
                      className={`${classes.chat_person} ${
                        person && visited === person.username
                          ? classes.person_selected
                          : ""
                      }`}
                    >
                      <div className={classes.person_image}>
                        <Image
                          src={person.img}
                          alt="user_img"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <p className={classes.username}>
                          {person ? person.username : "dummy user"}
                        </p>
                        {/* {person.chat.map((ch, indx) => {
                          return indx === person.chat.length - 1 ? (
                            <p className={classes.user_text} key={indx}>
                              {ch.msg}
                            </p>
                          ) : null;
                        })} */}
                        <p className={classes.user_text}>
                          Me: Good Morning Sir fasdfsa afdfsasfadfds fdsafaf
                          afsdfsa dfsa f
                        </p>
                      </div>
                      <div className={classes.message_time}>
                        {/* <p className={classes.time}>
                          {hour}.{minute}
                          {ampm}
                        </p> */}
                        <p className={classes.time}>7.30am</p>
                        {indx % 2 === 0 ? (
                          <div className={classes.message_number}>
                            <span>2</span>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </Col>
          <Col lg="9" className={`${classes.chat_body_col}`}>
            <Row>
              {person && person.username ? (
                <>
                  <Col lg="12" className={classes.appbar}>
                    <Col lg="8">
                      <button
                        className={classes.back_btn}
                        onClick={() => router.push("/inbox")}
                      >
                        <ArrowBackIosIcon className={classes.arrow_back} />
                      </button>

                      <div className={classes.selected_person}>
                        <h6>{person.username}</h6>
                        <div className={classes.status}>
                          <div className={classes.status_light}></div>
                          <span>Online</span>
                        </div>
                      </div>
                    </Col>
                  </Col>
                  {/* <Col lg="8" className={classes.message_body}>
               
              </Col> */}
                  <Col lg="8" className={classes.message_body_mid}>
                    <div className={classes.message_body_top}>
                      <CustomOfferModal setCreateOffer={setCreateOffer} />
                      <div className={classes.safty_warning}>
                        <div className={classes.warning_body}>
                          <WarningIcon className={classes.warning_icon} />
                          <p>
                            For your safety, keep communications and <br />{" "}
                            payments within Fixlancer
                          </p>
                        </div>
                      </div>
                    </div>
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
                    <div className={classes.bottom_input}>
                      <div className={classes.input_fields}>
                        <input
                          type="text"
                          className={classes.text_input}
                          placeholder="Type a messages"
                          ref={inputRef}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              setPersonData({
                                ...personData,
                                chat: [
                                  ...personData.chat,
                                  {
                                    by: "me",
                                    msg: inputRef.current.value,
                                    time: new Date(),
                                  },
                                ],
                              });

                              inputRef.current.value = "";
                            }
                          }}
                        />
                        <div>
                          <label
                            htmlFor="file-upload"
                            className={classes.upload_label}
                          >
                            <Image
                              src="/icons/upload.svg"
                              width={24}
                              height={24}
                              alt="upload_icon"
                            />
                          </label>
                          <input
                            id="file-upload"
                            className={classes.file_input}
                            type="file"
                          />
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg="4"
                    className={`${classes.about_col} ${classes.mobile_about_col}`}
                  >
                    <div>
                      <div>
                        <h5 className={classes.about_title}>About </h5>
                      </div>
                      <div className={classes.about_user}>
                        <div className={classes.about_user_img}>
                          <Image
                            src={person && person.img}
                            alt="user_image"
                            width={60}
                            height={60}
                            objectFit="fill"
                          />
                        </div>
                        <div>
                          <h6 className={classes.about_username}>
                            {person && person.username}
                          </h6>
                        </div>
                      </div>
                      <Divider />
                      <div>
                        <p className={classes.about_user_bio}>
                          {person && person.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <Col lg="12" className={classes.empty_inbox}>
                  <div className={classes.empty_card}>
                    <ForumIcon className={classes.conversation_icon} />
                    <h1>Select a Conversation</h1>
                    <p>
                      Try selecting a conversation or searching for someone
                      specific.
                    </p>
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inbox;

Inbox.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}{" "}
  </>
);
