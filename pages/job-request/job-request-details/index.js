import Image from "next/image";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import classes from "./job_request_details.module.css";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Select from "react-select";
import CircleIcon from "@mui/icons-material/Circle";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

const JobRequestDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <section className={classes.job_request_details}>
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
                  <h5>&#x20A6;5000</h5>
                </div>
              </div>
            </div>
            {!submit && (
              <div className="d-flex justify-content-center">
                <button
                  className={classes.send_offer}
                  onClick={() => setModalShow(true)}
                >
                  Send Offer
                </button>
              </div>
            )}
          </Col>
        </Row>
        {submit && (
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
                    3. Normal bulk email messaging <br /> 4 Online payment using
                    cashenvoy and Luno wallet <br /> 5 Up to &#x20A6;500
                    Referral bonus system <br /> 6 Up to &#x20A6;100 Sign up
                    bonus <br /> 7 Sms, Voice and email advert
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
              <div className="d-flex justify-content-center">
                <button
                  className={classes.send_offer}
                  onClick={() => setModalShow(true)}
                >
                  Edit Offer
                </button>
              </div>
            </Col>
          </Row>
        )}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setSubmit={setSubmit}
        />
      </Container>
    </section>
  );
};

function MyVerticallyCenteredModal(props) {
  const [activeState, setActiveState] = useState(0);
  const [orderObject, setOrderObject] = useState({});

  const handleChange = (value) => {
    // console.log(value);
  };
  const handleInputChange = (e) => {
    if (e.target.name === "file") {
      setOrderObject({
        ...orderObject,
        file: e.target.files[0],
      });
    } else {
      let newObj = { ...orderObject };
      newObj[e.target.name] = e.target.value;
      setOrderObject(newObj);
    }
  };

  const fixes = [
    { value: "I will do logo design", label: "I will do logo design" },
    { value: "I will do ui/ux", label: "I will do ui/ux" },
    { value: "I will create a website", label: "I will create a website" },
  ];

  const deliveryDays = [
    {
      value: "24 hours",
      label: "24 hours",
    },
    {
      value: "2 days",
      label: "2 days",
    },
    {
      value: "3 days",
      label: "3 days",
    },
    {
      value: "4 days",
      label: "4 days",
    },
    {
      value: "5 days",
      label: "5 days",
    },
    {
      value: "7 days",
      label: "7 days",
    },
    {
      value: "10 days",
      label: "10 days",
    },
    {
      value: "15 days",
      label: "15 days",
    },
    {
      value: "30 days",
      label: "30 days",
    },
    {
      value: "45 days",
      label: "45 days",
    },
    {
      value: "60 days",
      label: "60 days",
    },
    {
      value: "90 days",
      label: "90 days",
    },
  ];

  const prices = [
    {
      value: "5",
      label: "5",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "15",
      label: "15",
    },
    {
      value: "20",
      label: "20",
    },
    {
      value: "25",
      label: "25",
    },
    {
      value: "30",
      label: "30",
    },
    {
      value: "35",
      label: "35",
    },
    {
      value: "40",
      label: "40",
    },
    {
      value: "45",
      label: "45",
    },
    {
      value: "50",
      label: "50",
    },
    {
      value: "55",
      label: "55",
    },
    {
      value: "60",
      label: "60",
    },
    {
      value: "65",
      label: "65",
    },
    {
      value: "70",
      label: "70",
    },
    {
      value: "75",
      label: "75",
    },
    {
      value: "80",
      label: "80",
    },
  ];
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      size="lg"
      centered
    >
      <Modal.Body className={classes.modal_body}>
        <div className={classes.modal_header}>
          <h4>Send Offer</h4>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.close_btn}
            onClick={props.onHide}
          >
            <CloseIcon className={classes.close_icon} />
          </IconButton>
        </div>
        <div className={classes.user_info}>
          <div className={classes.modal_user}>
            <Image
              src="/images/author1.png"
              alt="user_img"
              width={50}
              height={50}
            />
          </div>
          <div className={classes.request_text}>
            <p>
              I want my ui design done asap with with with immediate immeadite
              effect right now!{" "}
            </p>
          </div>
        </div>
        <Col lg="9 mx-auto my-5">
          <div className={classes.select_fix}>
            <p>Select Fix</p>
            <Select
              options={fixes}
              isSearchable={true}
              placeholder="Select your Fix"
              className={classes.select_fix_dropdown}
            />
          </div>
          <div className={classes.offer_text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est non
              ut magna lobortis non iaculis adipiscing fermentum neque. Eget
              morbi et etiam placerat. Sed ullamcorper orci tellus enim,
              ultrices laoreet faucibus molestie erat. Integer faucibus
              dignissim morbi pharetra nunc, ac egestas tincidunt eleifend.
              Pellentesque in congue dolor dignissim ac nisl aliquet consequat
              nisl. Arcu egestas vestibulum, porttitor lectus. Potenti dolor in
              sit nec ut mollis. Condimentum libero ultricies nisi ornare
              dictum. Quis at adipiscing pellentesque orci nibh in nisi,
              volutpat vehicula. Elementum sed enim dictum iaculis posuere
              imperdiet sit pretium, venenatis. Iaculis tincidunt.
            </p>
          </div>
          <div className={classes.select_fix}>
            <p>Delivery Days</p>
            <Select
              options={deliveryDays}
              isSearchable={true}
              className={classes.delivery_days_select}
            />
          </div>
          <div className={classes.select_fix}>
            <p>Price</p>
            <input type="text" className={classes.price_input} />
          </div>
          <div>
            <Form.Check
              type="radio"
              label="I accept I have read the project and can complete"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              className={classes.radio_input}
            />
          </div>
          <div className={classes.button_div}>
            <button
              className={classes.btn_cancel}
              onClick={() => props.onHide()}
            >
              Cancel
            </button>
            <button
              className={classes.btn_submit}
              onClick={() => {
                props.setSubmit(true);
                props.onHide();
              }}
            >
              Submit Offer{" "}
            </button>
          </div>
        </Col>
      </Modal.Body>
    </Modal>
  );
}

export default JobRequestDetails;

JobRequestDetails.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
