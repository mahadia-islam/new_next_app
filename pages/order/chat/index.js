import { Col, Container, Form, Row } from "react-bootstrap";
import classes from "./chat.module.scss";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import WarningIcon from "@mui/icons-material/Warning";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ReportIcon from "@mui/icons-material/Report";
import Divider from "@mui/material/Divider";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CheckIcon from "@mui/icons-material/Check";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import DoDisturbOffOutlinedIcon from "@mui/icons-material/DoDisturbOffOutlined";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
    background: "white",
    borderRadius: "12px",
    border: "2px solid white",
  },
}));

const Chat = () => {
  const [activeToggle, setActiveToggle] = useState("chat");
  const [open, setOpen] = useState(false);
  const [cancelOrderOpen, setCancelOrderOpen] = useState(false);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [declineCancelOrder, setDeclineCancelOrder] = useState(false);
  const [disputeOpen, setDisputeOpen] = useState(false);
  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [completeOpen, setCompleteOpen] = useState(false);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const [deliverOrder, setDeliverOrder] = useState(false);
  const [offerExtra, setOfferExtra] = useState(false);
  const [acceptExtraOpen, setAcceptExtraOpen] = useState(false);
  const [orderDispute, setOrderDispute] = useState(false);
  const [rated, setRated] = useState(false);
  const [modification, setModification] = useState(false);
  const [starNumber, setStarNumber] = useState(0);

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const inputRef = useRef();

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const person = {
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
  };
  const deliveryDays = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "10",
    "15",
    "30",
    "45",
    "60",
    "90",
  ];

  const mouseOverHandler = (num) => {
    setStarNumber(num);
  };

  return (
    <section className={classes.chat}>
      <Container>
        <Row>
          <Col lg="8 mx-auto">
            <div>
              {" "}
              <Col lg="12" className={classes.message_body_mid}>
                <div className={classes.message_body_top}>
                  {/* <CustomOfferModal setCreateOffer={setCreateOffer} /> */}
                  <div className={classes.safty_warning}>
                    <div className={classes.warning_body}>
                      <Col lg="4" className={classes.user_info}>
                        <h5>Gloria Emeka</h5>{" "}
                        <div className="d-flex align-items-center">
                          <div className={classes.status_light}></div>
                          <span>Online</span>
                        </div>
                      </Col>
                      <Col lg="8" className={classes.toggle_btn_col}>
                        <div className={classes.toggle_btn_div}>
                          <button
                            className={`${classes.toggle_btn1} ${
                              activeToggle === "chat" && classes.activeBtn
                            }`}
                            onClick={() => setActiveToggle("chat")}
                          >
                            Chat
                          </button>
                          <button
                            className={`${classes.toggle_btn2} ${
                              activeToggle === "order" && classes.activeBtn
                            }`}
                            onClick={() => setActiveToggle("order")}
                          >
                            Order
                          </button>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
                <div className={classes.message_content}>
                  {activeToggle === "chat" && (
                    <div className="d-flex align-items-center justify-content-center">
                      <div className={classes.warning}>
                        <WarningIcon className={classes.warning_icon} />
                        <p>
                          For your safety, keep communications and payments
                          within Fixlancer
                        </p>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" &&
                    personData &&
                    personData.chat.map((ch, indx) => (
                      <Fragment key={indx}>
                        {ch.by === "him" ? (
                          <div className={classes.from_msg_box}>
                            <Col lg="5" className={classes.message_body_text}>
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
                  {activeToggle === "chat" && orderDispute && (
                    <div className="d-flex justify-content-center">
                      <div className={classes.dispute_card}>
                        <GavelOutlinedIcon className={classes.gavel_icon} />
                        <h6>Under Dispute</h6>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" && deliverOrder && (
                    <div className={classes.deliver_work_div}>
                      <Col lg="5" className={`${classes.deliver_work}`}>
                        <p>
                          Good afternoon Mr. Gloria Emeka. Thanks for contacting
                          me.
                        </p>
                        <div>
                          <FileDownloadIcon
                            className={classes.file_download_icon}
                          />
                        </div>
                      </Col>
                    </div>
                  )}
                  {activeToggle === "chat" && deliverOrder && (
                    <div className={classes.deliver_work_div}>
                      <Col lg="5" className={classes.order_delivery}>
                        <div className="d-flex flex-column align-items-start">
                          <div className={classes.deliver_chip}>
                            <div>order delivered</div>
                          </div>
                          <p>
                            Good afternoon Mr. Orlando Efe. Thanks for
                            contacting me.
                          </p>
                        </div>

                        <div className={classes.download_grid}>
                          <div className={`${classes.downLoad_file}`}>
                            <div></div>
                            <div>
                              <FileDownloadIcon
                                className={classes.file_download_icon}
                              />
                            </div>
                          </div>
                          <div className={`${classes.downLoad_file}`}>
                            <div></div>
                            <div>
                              <FileDownloadIcon
                                className={classes.file_download_icon}
                              />
                            </div>
                          </div>
                          <div className={`${classes.downLoad_file}`}>
                            <div></div>
                            <div>
                              <FileDownloadIcon
                                className={classes.file_download_icon}
                              />
                            </div>
                          </div>
                          <div className={`${classes.downLoad_file}`}>
                            <div></div>
                            <div>
                              <FileDownloadIcon
                                className={classes.file_download_icon}
                              />
                            </div>
                          </div>
                          <div className={`${classes.downLoad_file}`}>
                            <div></div>
                            <div>
                              <FileDownloadIcon
                                className={classes.file_download_icon}
                              />
                            </div>
                          </div>
                        </div>
                      </Col>
                    </div>
                  )}
                  {activeToggle === "chat" && deliverOrder && !rated && (
                    <div className={classes.complete_or_modification}>
                      <div>
                        <button
                          className={classes.modification}
                          onClick={() => setModification(true)}
                        >
                          Request Modification
                        </button>
                        <button
                          className={classes.complete}
                          onClick={() => setCompleteOpen(true)}
                        >
                          Mark As Complete
                        </button>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" && offerExtra && (
                    <div className={classes.deliver_work_div}>
                      <Col lg="5" className={`${classes.offer_extra_div}`}>
                        <div>
                          <h6>Extras</h6>
                          <p>Fast Delivery (+1day)</p>
                          <span>N1000</span>
                        </div>
                        <button
                          onClick={() => {
                            setAcceptExtraOpen(true);
                          }}
                        >
                          accept offer
                        </button>
                      </Col>
                    </div>
                  )}
                  {activeToggle === "chat" && modification && (
                    <div className="d-flex justify-content-center">
                      <div className={classes.modification_card}>
                        <SettingsIcon className={classes.settings_icon} />
                        <div>
                          <h6>Modification Requested</h6>
                          <p>The buyer requested for modifications</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" && cancelOrder && (
                    <div className="d-flex justify-content-center">
                      <div className={classes.modification_card}>
                        <CancelOutlinedIcon className={classes.cancel_icon} />
                        <div>
                          <h6>Order Cancellation</h6>
                          <p>
                            You have requested a mutual cancellation for this
                            order
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" && declineCancelOrder && (
                    <div className="d-flex justify-content-center">
                      <div className={classes.modification_card}>
                        <DoDisturbOffOutlinedIcon
                          className={classes.cancel_icon}
                        />
                        <div>
                          <h6>Order Denied</h6>
                          <p>Mutual Cancellation of the Order was rejected.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeToggle === "chat" &&
                    cancelOrder &&
                    !declineCancelOrder && (
                      <div className={classes.complete_or_modification}>
                        <div>
                          <button
                            className={classes.modification}
                            // onClick={() => setModification(true)}
                          >
                            Accept
                          </button>
                          <button
                            className={classes.complete}
                            onClick={() => setDeclineCancelOrder(true)}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    )}
                  {activeToggle === "chat" && rated && (
                    <div className={classes.deliver_work_div}>
                      <Col lg="5" className={`${classes.reted_div}`}>
                        <StarOutlinedIcon className={classes.rating_icon} />{" "}
                        <span>4.5</span>
                        <div className={classes.rating_text}>
                          Excellent job again, thanks
                        </div>
                      </Col>
                    </div>
                  )}{" "}
                  {activeToggle === "order" && (
                    <div className="pt-5">
                      <div>
                        <div className={classes.order_item_top}>
                          <Col lg="2">
                            <div className={classes.order_img}></div>
                          </Col>
                          <Col lg="10">
                            <div className={classes.order_details_grid}>
                              <div>
                                <p className={classes.order_title}>
                                  Promote my telegram channel Promote my
                                  telegram channel{" "}
                                </p>{" "}
                                <div className="d-flex">
                                  <div className={classes.offer_by}>
                                    <div className={classes.circle}></div>
                                    <Link href="/username">
                                      <a className="text-decoration-none">
                                        <span>username23</span>
                                      </a>
                                    </Link>
                                  </div>
                                  <div className={classes.delivery_date}>
                                    <DateRangeOutlinedIcon
                                      className={classes.date_range}
                                    />
                                    <span>2 days delivery</span>
                                  </div>
                                </div>
                              </div>
                              <div className={classes.order_item_details_grid}>
                                <div>
                                  <p className={classes.order_other_title}>
                                    ID
                                  </p>
                                  <p>#65</p>
                                </div>
                                <div>
                                  <p className={classes.order_other_title}>
                                    Total
                                  </p>
                                  <p>&#x20A6;5,150</p>
                                </div>
                                <div>
                                  <p className={classes.order_other_title}>
                                    To Deliver
                                  </p>
                                  <p>21 May 2020</p>
                                </div>
                                <div>
                                  <p className={classes.order_other_title}>
                                    Seller
                                  </p>
                                  <p>Demouser</p>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </div>
                        <div className={classes.timer_div}>
                          <h1 className={classes.time_ticking}>{timerDays}</h1>
                          <h1 className={classes.time_ticking_colon}>:</h1>
                          <h1 className={classes.time_ticking}>{timerHours}</h1>
                          <h1 className={classes.time_ticking_colon}>:</h1>

                          <h1 className={classes.time_ticking}>
                            {timerMinutes}
                          </h1>
                          <h1 className={classes.time_ticking_colon}>:</h1>
                          <h1 className={classes.time_ticking}>
                            {timerSeconds}
                          </h1>
                        </div>
                        <Col lg="10 mx-auto mb-5">
                          <div>
                            <h4>Requirements</h4>
                            <div className={classes.requirements_div}>
                              <div>
                                <p>This is the Requirements</p> <Divider />
                              </div>
                              <div className="mt-3">
                                <h6>Attachment</h6>
                                <div>
                                  <p className={classes.file_name}>
                                    DSC.001.jpg <FileDownloadIcon />
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg="10 mx-auto">
                          <div>
                            <h4>Extras</h4>
                            <div className={classes.extras_div}>
                              <div className="d-flex justify-content-between align-items-end pb-2">
                                <div>
                                  <p className={classes.fast_delivery}>
                                    Fast Delivery
                                  </p>
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
                                  <p className={classes.fast_delivery}>
                                    Fast Delivery
                                  </p>
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
                        </Col>
                      </div>
                    </div>
                  )}
                </div>

                {activeToggle === "chat" && rated && (
                  <div className={classes.order_completed}>
                    <div>
                      <p>
                        Your order is completed. You may contact the seller via
                        <Link href="/inbox">
                          <a>Inbox</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {activeToggle === "chat" && !rated && (
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
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <IconButton
                          aria-label="delete"
                          onClick={handleClickOpen}
                        >
                          <AddCircleOutlineIcon />
                        </IconButton>

                        <label htmlFor="file-upload">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <Image
                              src="/icons/upload.svg"
                              width={24}
                              height={24}
                              alt="upload_icon"
                            />
                          </IconButton>
                        </label>
                        <input
                          id="file-upload"
                          className={classes.file_input}
                          type="file"
                          multiple
                        />
                      </div>
                      <div>
                        <button
                          className={classes.send_btn}
                          onClick={() => {
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
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
            </div>
          </Col>
        </Row>{" "}
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <IconButton aria-label="delete">
              <AddCircleOutlineIcon />
            </IconButton>

            <div className={classes.offer_extras_div}>
              <button
                onClick={() => {
                  handleClose();
                  setExtrasOpen(true);
                }}
              >
                Offer Extras
              </button>
              <button
                onClick={() => {
                  handleClose();
                  setDeliveryOpen(true);
                }}
              >
                Deliver Job
              </button>
              <button
                onClick={() => {
                  handleClose();
                  setCancelOrderOpen(true);
                }}
              >
                Request Cancellation
              </button>
              <button
                onClick={() => {
                  handleClose();
                  setDisputeOpen(true);
                }}
              >
                Dispute
              </button>
            </div>
          </DialogContent>
        </BootstrapDialog>
        <BootstrapDialog
          onClose={() => setCancelOrderOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={cancelOrderOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.cancel_order_div}>
              <div className={classes.close_icon_div}>
                <CloseIcon className={classes.close_cancel_icon} />
              </div>
              <h5 className={classes.cancel_title}> Cancel Order?</h5>
              <p className={classes.cancel_warning}>
                When you request a mutual cancellation, your order is not
                cancelled immediately. The seller is given 2 days to accept or
                decline your offer to cancel.
              </p>
              <div>
                <button
                  className={classes.back_btn}
                  onClick={() => setCancelOrderOpen(false)}
                >
                  Back
                </button>
                <button
                  className={classes.cancel_order_btn}
                  onClick={() => {
                    setCancelOrderOpen(false);
                    setCancelOrder(true);
                  }}
                >
                  Cancel Order
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
        <BootstrapDialog
          onClose={() => setDisputeOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={disputeOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.dispute_body}>
              <h5>Dispute</h5>
              <p>
                Having issues with this Order? Open a dispute below, an admin
                will come in to assist
              </p>
              <Form.Control
                as="textarea"
                rows={6}
                className={classes.text_area}
                placeholder="Be detailed as possible...."
              />
              <div className={classes.dispute_btns}>
                <button
                  className={classes.cancel_dispute_btn}
                  onClick={() => setDisputeOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={classes.send_dispute_btn}
                  onClick={() => {
                    setDisputeOpen(false);
                    setOrderDispute(true);
                  }}
                >
                  Send Dispute
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
        <BootstrapDialog
          onClose={() => setDeliveryOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={deliveryOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.dispute_body}>
              <h5 className="text-center">Deliver Work</h5>
              <div className="d-flex align-items-center mb-3">
                <ReportIcon className={classes.report_icon} />
                <p className="mb-0">
                  For your safety, keep communications and payments within
                  Fixlancer
                </p>
              </div>
              <Form.Control
                as="textarea"
                rows={8}
                className={classes.text_area}
                placeholder="Type in your delivey message, explaining the content being delivered."
              />
              <div className="d-flex justify-content-center mt-3">
                <label htmlFor="files_upload">
                  <div className={classes.choose_files}>Choose Files</div>
                </label>
                <input
                  id="files_upload"
                  className={classes.file_input}
                  type="file"
                  multiple
                />
              </div>
              <div className={classes.dispute_btns}>
                <button
                  className={classes.cancel_dispute_btn}
                  onClick={() => setDeliveryOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={classes.send_dispute_btn}
                  onClick={() => {
                    setDeliveryOpen(false);
                    setDeliverOrder(true);
                  }}
                >
                  Deliver Work
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>{" "}
        <BootstrapDialog
          onClose={() => setCompleteOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={completeOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.dispute_body}>
              <h5 className="text-center">Mark as complete</h5>
              <div className="d-flex align-items-center ">
                <ReportIcon className={classes.report_icon} />
                <p className="mb-0">
                  Only Mark as Complete when you are satisified & all files have
                  been deliverd.
                </p>
              </div>
              <div className="d-flex justify-content-center mb-3">
                {starNumber >= 1 ? (
                  <StarOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(1)}
                  />
                ) : (
                  <StarBorderOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(1)}
                    onClick={() => setStarNumber(1)}
                  />
                )}
                {starNumber >= 2 ? (
                  <StarOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(2)}
                  />
                ) : (
                  <StarBorderOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(2)}
                    onClick={() => setStarNumber(2)}
                  />
                )}
                {starNumber >= 3 ? (
                  <StarOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(3)}
                  />
                ) : (
                  <StarBorderOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(3)}
                    onClick={() => setStarNumber(3)}
                  />
                )}
                {starNumber >= 4 ? (
                  <StarOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(4)}
                  />
                ) : (
                  <StarBorderOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(4)}
                    onClick={() => setStarNumber(4)}
                  />
                )}
                {starNumber >= 5 ? (
                  <StarOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(5)}
                  />
                ) : (
                  <StarBorderOutlinedIcon
                    className={classes.star_icon}
                    onMouseOver={() => mouseOverHandler(5)}
                    onClick={() => setStarNumber(5)}
                  />
                )}
              </div>
              <Form.Control
                as="textarea"
                rows={8}
                className={classes.text_area}
                placeholder="Add your review!"
              />

              <div className={classes.dispute_btns}>
                <button
                  className={classes.cancel_dispute_btn}
                  onClick={() => setCompleteOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={classes.send_dispute_btn}
                  onClick={() => {
                    setCompleteOpen(false);
                    setRated(true);
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>{" "}
        <BootstrapDialog
          onClose={() => setExtrasOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={extrasOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.dispute_body}>
              <h5 className="text-center">Extras</h5>

              <div className={classes.whats_offering}>
                <h6>What you are offering</h6>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className={classes.text_area}
                  placeholder="E.g Additional logo"
                />
              </div>

              <div className={classes.extras_input}>
                <label htmlFor="delivery">
                  Delivery Time
                  <Form.Select
                    className={classes.input_field}
                    // value={price}
                    // onChange={(e) => setPrice(e.target.value)}
                  >
                    {deliveryDays.map((item, indx) => (
                      <option value={item} key={indx}>
                        {item} days
                      </option>
                    ))}
                  </Form.Select>
                </label>
                <label htmlFor="amount">
                  Amount
                  <input type="text" id="amount" placeholder="200000" />
                </label>
              </div>
              <div className={classes.dispute_btns}>
                <button
                  className={classes.cancel_dispute_btn}
                  onClick={() => setExtrasOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className={classes.send_dispute_btn}
                  onClick={() => {
                    setExtrasOpen(false);
                    setOfferExtra(true);
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
        <BootstrapDialog
          onClose={() => setAcceptExtraOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={acceptExtraOpen}
        >
          <DialogContent dividers className={classes.dialog_body}>
            <div className={classes.pay_extra_body}>
              <h5 className="text-center">Pay for Extra</h5>
              <div className={classes.amount_row1}>
                <p>Available Balance</p>
                <p>&#x20A6;72,000</p>
              </div>
              <Divider />
              <div className={classes.amount_row}>
                <p>Fast delivery</p>
                <p>&#x20A6;1,000</p>
              </div>
              <div className={classes.amount_row}>
                <p>Fee</p>
                <p>&#x20A6;0</p>
              </div>
              <div className={classes.amount_row}>
                <p>Total</p>
                <p>&#x20A6;72,000</p>
              </div>
              <button
                onClick={() => {
                  setAcceptExtraOpen(false);
                  setModification(true);
                }}
              >
                Pay Now
              </button>
              <p>Your payment will be processed and cannot be undone</p>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </Container>
    </section>
  );
};

export default Chat;

Chat.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
