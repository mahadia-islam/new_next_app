import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./fix.module.css";
import StarIcon from "@mui/icons-material/Star";
import { Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ChatIcon from "@mui/icons-material/Chat";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import Flags from "country-flag-icons/react/3x2";
import AddIcon from "@mui/icons-material/Add";
import { categories } from "../../../dummy_data/dummy_fixes";
import FooterBottom from "../../../components/FooterBottom/FooterBottom";
import FixSlider from "../../../components/FixSlider/FixSlider";
import MobileSlider from "../../../components/MobileSlider/MobileSlider";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";

const Fix = () => {
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(false);

  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section className={classes.fix}>
        <Container className={classes.fix_container}>
          <Row>
            <div className={classes.category}>
              <h4>
                Graphic Design <ArrowForwardIosIcon /> Flyer Design
              </h4>
            </div>
            <Col lg="10" className={classes.fix_image}>
              <Image
                alt="fix_image"
                src="/images/fix_banner.png"
                width={550}
                height={370}
              />
            </Col>

            <Col lg="8" className={classes.fix_info}>
              <div className={classes.fix_title}>
                <h1>
                  I will design eyecatching flyer design will suit your needs
                  perfectly
                </h1>
              </div>

              <Col lg="6" className={classes.rating_price}>
                <div className={classes.rating}>
                  <div className={classes.rating_icon}>
                    <StarIcon className={classes.star_icon} /> <span>5.0</span>
                  </div>
                  <div className={classes.rating_amount}>
                    <span>(3424) </span>
                  </div>
                </div>
                <div className={classes.price_span}>
                  <span>&#8358;15000</span>
                </div>
              </Col>
              <Divider />

              <Col lg="5" className={classes.des_work}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  className={classes.tab_class}
                >
                  <Tab label="Description" />
                  <Tab label="Work Samples" />
                </Tabs>
              </Col>
            </Col>
            <Col lg="8 mx-auto" className={classes.tab_value}>
              {value === 0 ? (
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  mattis facilisis ac elit adipiscing amet, ultrices sed. Sed
                  tortor amet est, commodo laoreet turpis. Fames risus, diam
                  lobortis interdum vitae viverra pellentesque luctus pharetra.
                  Erat lorem laoreet nisi, nec facilisi vehicula.Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Enim mattis
                </p>
              ) : (
                <div className={classes.work_samples}>
                  {[1, 2, 3, 4, 5].map((num, indx) => (
                    <div className={classes.sample} key={indx}>
                      <div
                        className={`${classes.link_number} ${
                          indx === [1, 2, 3, 4, 5].length - 1
                            ? classes.last_number_link
                            : ""
                        }`}
                      >
                        <span>{num} </span>
                      </div>
                      <div>
                        <p onClick={() => router.push("/")}>
                          www.worksamplesexsample.com
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Col>
            <Col lg="8" className={classes.about_seller}>
              <div className={classes.extra_report}>
                <div className={classes.extra}>
                  <IconButton
                    color="primary"
                    component="span"
                    className={classes.chat}
                    onClick={() => setCheck(!check)}
                  >
                    <CheckCircleIcon
                      className={
                        check ? classes.circle_icon : classes.not_check_circle
                      }
                    />
                  </IconButton>

                  <p>
                    For extra fast delivery in less than 8 hours for
                    &#x20A6;1,000
                  </p>
                </div>
              </div>

              <div className={classes.chat_order}>
                <button
                  className={classes.chat_btn}
                  onClick={() => router.push("/inbox/dev_aslam")}
                >
                  <ChatIcon className={classes.chat_icon} />
                  <span> Chat</span>
                </button>
                <button
                  className={classes.order_btn}
                  onClick={() => router.push("/order-details")}
                >
                  Order Now &#x20A6;5,000
                </button>
              </div>

              <div className={classes.seller_info}>
                <div>
                  <h2>about seller</h2>
                </div>
                <div className={classes.user_image}>
                  <Image
                    src="/images/author.jpg"
                    alt="user_img"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={classes.userinfo}>
                  <h4>dev_aslam</h4>
                  <div className={classes.user_rating}>
                    <div>
                      <StarIcon className={classes.user_star} />
                      <StarIcon className={classes.user_star} />
                      <StarIcon className={classes.user_star} />
                      <StarIcon className={classes.user_star} />
                      <StarIcon className={classes.user_star} />
                    </div>
                    <div>
                      <span>5.0</span>
                    </div>
                  </div>
                  <button
                    className={classes.order_btn}
                    onClick={() => router.push("/inbox/dev_aslam")}
                  >
                    Contact me
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <div>
              <div className={classes.total_rating}>
                <h3>Ratings 5.0</h3>
                <div className={classes.review_rating}>
                  <StarIcon className={classes.star_icon} />
                  <span>( 20 reviews )</span>
                </div>
              </div>
            </div>
            <div className={classes.review}>
              <div className={classes.reviewer}>
                <Image
                  alt="user_img"
                  src="/images/author.jpg"
                  width={70}
                  height={70}
                />
              </div>
              <div>
                <div className={classes.review_div}>
                  <div className={classes.reviewer_name}>
                    <h6>rafin_biswas</h6>
                    <div className={classes.country}>
                      <Flags.US
                        title="United States"
                        className={classes.country_flag}
                      />
                      <span>United States</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <StarIcon className={classes.user_star} />
                    <strong> 5.0</strong>
                  </div>
                </div>
                <div className={classes.review_content}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Enim mattis facilisis ac elit adipiscing amet, ultrices sed.
                    Sed tortor amet est, commodo laoreet turpis. Fames risus,
                    diam lobortis interdum vitae viverra pellentesque luctus
                    pharetra. Erat lorem laoreet nisi,
                  </p>
                  <span>3 week ago</span>
                </div>
                <div className="d-flex justify-content-center my-5">
                  <button className={classes.see_more}>
                    <AddIcon /> see more
                  </button>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className={classes.more_fix}>
              <h1>More fixes by the seller</h1>
            </div>
            {/* {categories.map((item, indx) => (
              <CommonCard fx={item} key={indx} col={3} />
            ))} */}
            <FixSlider fixes={categories} slide_to_show={4} />
            <MobileSlider fixes={categories} slide_to_show={4} />
          </Row>
          <Row>
            <div className={classes.more_fix}>
              <h1>Recommanded for you</h1>
            </div>
            <FixSlider fixes={categories} slide_to_show={4} />
            <MobileSlider fixes={categories} slide_to_show={4} />
          </Row>
        </Container>
        <Divider className={classes.divider_bottom} />
        <Container>
          <Row>
            <FooterBottom />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fix;

Fix.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
