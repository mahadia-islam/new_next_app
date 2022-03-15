import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./messages.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";
import { dummy_persons } from "../../../dummy_data/dummy_persons";
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Messages = () => {
  const [visited, setVisited] = useState("");
  const [createOffer, setCreateOffer] = useState(false);
  const [selectedPerson, setSelectedPeroson] = useState(0);
  const inputRef = useRef();
  const router = useRouter();

  let hour;
  let minute;
  let ampm;

  const timeArr =
    dummy_persons[0] &&
    dummy_persons[0].chat.forEach((ch, indx) => {
      if (indx === dummy_persons[0].chat.length - 1) {
        const selectedTimes = new Date(ch.time).toLocaleTimeString().split(":");

        hour = selectedTimes[0];
        minute = selectedTimes[1];
        ampm = selectedTimes[2].split(" ")[1];
      }
    });

  return (
    <DashBoardLayout appbar_title="Messages">
      <section className={classes.inbox_section}>
        <Container>
          <Row>
            <Col
              lg="3"
              className={`${classes.chat_col} ${classes.mobile_chat_col}`}
            >
              <div className={classes.chat_box_header}>
                <div className={classes.search_input_div}>
                  <input type="text" placeholder="Search" />
                  <SearchOutlinedIcon className={classes.search_icon} />
                </div>
              </div>
              <div
                className={`${classes.messages_list} ${
                  dummy_persons[selectedPerson] &&
                  dummy_persons[selectedPerson].username
                    ? classes.mobile_chatbody_show
                    : classes.mobile_chatbody_hide
                }`}
              >
                {dummy_persons.map((personData, indx) => (
                  <div
                    key={indx}
                    className={`${classes.chat_person} ${
                      personData && visited === personData.username
                        ? classes.person_selected
                        : ""
                    }`}
                    onClick={() => setSelectedPeroson(indx)}
                  >
                    <div className={classes.person_image}>
                      <Image
                        src={personData.img}
                        alt="user_img"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className={classes.username}>
                        {personData ? personData.username : "dummy user"}
                      </p>
                      {/* {personData.chat.map((ch, indx) => {
                    return indx === personData.chat.length - 1 ? (
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
                ))}
              </div>
            </Col>
            <Col lg="8" className={`${classes.chat_body_col}`}>
              <Row>
                <>
                  <Col lg="11" className={classes.appbar}>
                    <Col lg="11">
                      <div className={classes.messages_top}>
                        <p>Seller:</p>
                        <div
                          className={classes.user_img}
                          style={{
                            backgroundImage: `url(${dummy_persons[selectedPerson].img})`,
                          }}
                        ></div>
                        <span>{dummy_persons[selectedPerson].username}</span>
                      </div>
                    </Col>
                  </Col>

                  <Col lg="11" className={classes.message_body_mid}>
                    <div className={classes.mobile_messages_body}>
                      {dummy_persons[selectedPerson] &&
                        dummy_persons[selectedPerson].chat.map((ch, indx) => (
                          <Fragment key={indx}>
                            {ch.by === "him" ? (
                              <div className={classes.from_msg_box}>
                                <div className={classes.message_body_text} s>
                                  <p>{ch.msg}</p>
                                </div>
                                <div>
                                  <button className={classes.restrict}>
                                    restrict
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className={classes.to_msg_box}>
                                <div>
                                  <button className={classes.restricted}>
                                    restricted
                                  </button>
                                </div>
                                <div
                                  className={`${classes.message_body_text} ${classes.from_me}`}
                                >
                                  <p>{ch.msg}</p>
                                </div>
                              </div>
                            )}
                          </Fragment>
                        ))}
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

export default Messages;

Messages.getLayout = (page) => <>{page} </>;
