import { Col, Container, Row } from "react-bootstrap";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Footer from "../../components/Footer/Footer";
import { Fragment, useState } from "react";
import classes from "./faq.module.css";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grow from "@mui/material/Grow";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);
  const [value, setValue] = useState(0);
  const [catToShow, SetCatToShow] = useState("about");

  const accordianInfo = [
    {
      category: "about",
      info: [
        {
          title: "How does Fixlancer work?",
          details:
            "Fixlancer.com is a freelance, digital marketplace for small and large scale businesses. It's a platform where you can Work or Hire freelance services from home. A service offered on Fixlancer is called a Fix.",
        },
        {
          title: "How do i contact a buyer/seller on an ongoing order?",
          details:
            "When an order is created, an order page is created where both parties can communicate, and seller can deliver work. And it can be accessed via the 'Sales' link(for sellers) or 'Orders' link(for buyers) on the menu. We strongly advice all communications should be done on the order page for transparency.",
        },
      ],
    },
    {
      category: "for buyers",
      info: [
        {
          title: "How do I place an order?",
          details:
            "As a user/guest you are absolutely free to browse through our various category of Fixes and select your preferred Fix. and click the 'Order Now' button. It can also be done through a custom offer received in your inbox from the seller or through a Job Request posted by you. After you place the order, a new page is created where you can send your requirememts, communicate with the seller and get updates on the order in progress.",
        },
        {
          title: "When can I cancel an order?",
          details:
            "Cancellation of order can only be initiated when an order is still in progress. Upon completion it is not allowed. Order cancellation will only take effect on a mutual ground between both parties, Otherwise filing a dispute will be the next available option.",
        },
        {
          title: "How do I contact seller",
          details:
            "Contacting a seller is quite easy. Visit the Fix page or the seller's profile, there is a contact seller button on these pages. Click the button, type your message and send. You will be notified when they respond",
        },
        {
          title: "How do I find a Fix",
          details:
            "You will be able to find a Fix by searching any keywords related to the type of services you are interested in.",
        },
      ],
    },
    {
      category: "for sellers",
      info: [
        {
          title: "How does the order process work?",
          details:
            "When an order is placed, the funds are held on escrow with Fixlancer. Once you complete the order, 85% of the order amount will be released to you but placed in your pending balance for 3 days to clear. This is so to ensure buyer satisfaction. After 3 days it will be available for you to withdraw to your Bank Account",
        },
        {
          title: "What happens when my buyer stops responding after delivery?",
          details:
            "The buyer will have 3 days to respond from the day you delivered or order will be automatically marked as complete and funds released to you.",
        },
        {
          title: "How do I withdraw my earnings",
          details:
            "Once logged in, from the menu, click Finance Click Request Withdrawal from the sidebar (its underneath the page when on mobile), Enter your amount (minimum withdrawal is N1500), your bank account details will autofill the space if it's set    Then enter your password, and submit. Your request will be processed within 2-3 business days",
        },
        {
          title: "How do I start selling?",
          details:
            "Click on the menu link, navigate to 'Start Selling' click on the link. Create a fix of the service you are offering, click submit and you are set.",
        },
        {
          title: "What to avoid?",
          details:
            "Creating duplicate accounts Requesting to take communications and payments outside Fixlancer",
        },
        {
          title: "Why was my Fix deleted?",
          details:
            "On Fixlancer, we monitor all Fixes created from time to time and whenever a Fix violates our terms of service we are obliged to delete that Fix without prior warning to the seller.",
        },
      ],
    },
  ];

  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      SetCatToShow("about");
    } else if (newValue === 1) {
      SetCatToShow("for buyers");
    } else if (newValue === 2) {
      SetCatToShow("for sellers");
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <section className={classes.faq_top}>
        <Container>
          <div className={classes.header_faq}>
            <Link href="/">
              <a>
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  width={174}
                  height={64}
                />{" "}
              </a>
            </Link>
            <Divider
              orientation="vertical"
              className={classes.vertical_divider}
            />
            <Link href="/">
              <a className={classes.home}>Home</a>
            </Link>
          </div>
          <Row className="justify-content-center align-items-center">
            <div className={classes.faq_title_text}>
              <h1>Common Questions Asked?</h1>
              <p>
                We give you the leverage to get jobs done <br />
                person-to-person in an easy, <br />
                fast and secured way
              </p>
            </div>
          </Row>
        </Container>
      </section>
      <section className={classes.faq_middle}>
        <Container>
          <Row>
            <Col lg="3">
              <div className={classes.button_group}>
                {/* <button>About</button>
                <button>For Buyers</button>
                <button>For Sellers</button> */}
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChangeValue}
                  aria-label="Vertical tabs example"
                  className={`verticalTab_faq activeBtn${value}`}
                >
                  <Tab
                    label="About"
                    className={value == 0 ? classes.active_btn : ""}
                  />
                  <Tab
                    label="For Buyers"
                    className={value == 1 ? classes.active_btn : ""}
                  />
                  <Tab
                    label="For Sellers"
                    className={value == 2 ? classes.active_btn : ""}
                  />
                </Tabs>
              </div>
            </Col>
            <Col lg="9">
              {accordianInfo.map((item, indx) => (
                <Grow in={item.category === catToShow} key={indx}>
                  {
                    <div className={classes.accordian_card}>
                      {item.category === catToShow &&
                        item.info.map((single_item, ind) => (
                          <Fragment key={ind}>
                            <Accordion
                              expanded={
                                expanded === `panel${item.category}${ind}`
                              }
                              onChange={handleChange(
                                `panel${item.category}${ind}`
                              )}
                              className={classes.accordian_item}
                            >
                              <AccordionSummary
                                expandIcon={
                                  <ExpandMoreIcon
                                    className={classes.expand_more}
                                  />
                                }
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                              >
                                <h5 className={classes.title}>
                                  {single_item.title}
                                </h5>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className={classes.details}>
                                  {single_item.details}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </Fragment>
                        ))}
                    </div>
                  }
                </Grow>
              ))}
            </Col>
          </Row>
          <Col
            lg="8"
            className={`d-flex justify-content-around align-items-center mx-auto flex-wrap ${classes.connect}`}
          >
            <div>
              <div className={classes.contact_mail}>
                <EmailOutlinedIcon className={classes.email} />
                <p>Feel free to Contact Fixlancer Support</p>
                <Link href="mailto:support@fixlancer.com">
                  <a className={classes.mailto}> support@fixlancer.com</a>
                </Link>
              </div>
            </div>
            <div className={classes.social_media}>
              <div>
                <h6>Connect with us</h6>
              </div>
              <div>
                <Link href="/">
                  <a>
                    <FacebookIcon className={classes.media_icon} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <InstagramIcon className={classes.media_icon} />
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <TwitterIcon className={classes.media_icon} />
                  </a>
                </Link>
              </div>
            </div>
          </Col>
        </Container>
      </section>
    </>
  );
};

export default Faq;

Faq.getLayout = (page) => (
  <>
    {page}
    <Footer />
  </>
);
