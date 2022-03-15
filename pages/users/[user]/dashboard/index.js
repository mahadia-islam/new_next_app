import { IconButton } from "@mui/material";
import classes from "./dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CommonCard from "../../../../components/Card/Card";
import { categories } from "../../../../dummy_data/dummy_fixes";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import FooterBottom from "../../../../components/FooterBottom/FooterBottom";
import FeaturedFixes from "../../../../components/FeaturedFixes/FeaturedFixes";
import FixSlider from "../../../../components/FixSlider/FixSlider";
import MobileSlider from "../../../../components/MobileSlider/MobileSlider";
import ViewAllCategory from "../../../../components/ViewAllCategory/ViewAllCategory";
import { useRouter } from "next/router";
import NotificationCard from "../../../../components/NotificationCard/NotificationCard";
import MobileHeader from "../../../../components/MobileHeader/MobileHeader";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <section>
      <Navbar collapseOnSelect expand="lg" className={classes.home_nav}>
        <Container>
          <div className={classes.balance}>
            <h6>&#x20A6;500000</h6>
          </div>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={classes.brand_logo}>
              <Link href="/">
                <a className={classes.logo}>
                  <Image
                    src="/images/logo2.png"
                    width={174}
                    height={50}
                    alt="Fixlancer"
                  />
                </a>
              </Link>
            </Nav>
            <Nav className={classes.chat_and_notification}>
              <IconButton
                color="primary"
                component="span"
                className={classes.chat}
                onClick={() => router.push("/inbox")}
              >
                <EmailIcon className={classes.email} />
              </IconButton>

              <NotificationCard />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MobileHeader />
      <Container>
        <Row className={`mb-3 ${classes.view_all_cat}`}>
          <ViewAllCategory />
        </Row>
        <Row>
          <Col lg="3" className={classes.dashboard_sidebar}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                border: "1px solid #F2F2F2",
                borderRadius: "5px",
                marginBottom: "2rem",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className="p-0"
                >
                  <div className={classes.dashboard_header}>
                    <div className={classes.user_img}>
                      <Image
                        src="/images/author.jpg"
                        alt="user"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p>amanda</p>
                    <button
                      className={classes.edit_profile}
                      onClick={() => router.push("/username/edit-profile")}
                    >
                      <CreateOutlinedIcon className={classes.pen_icon} /> Edit
                      Profile
                    </button>
                  </div>
                </ListSubheader>
              }
            >
              <ListItemButton
                className={classes.list_btn}
                onClick={handleClick}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/job_req.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={20}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Job Request"
                  className={classes.list_item_text}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    className={classes.list_btn}
                    onClick={() => router.push("/job-request")}
                  >
                    <ListItemIcon className={classes.list_icon_btn}>
                      <Image
                        src="/icons/bag.svg"
                        alt="job_req"
                        className={classes.list_btn_icon}
                        height={15}
                        width={15}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="All Request"
                      className={classes.list_item_text}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    className={classes.list_btn}
                    onClick={() => router.push("/my-request")}
                  >
                    <ListItemIcon className={classes.list_icon_btn}>
                      <Image
                        src="/icons/req.svg"
                        alt="job_req"
                        className={classes.list_btn_icon}
                        height={17}
                        width={18}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="My Request"
                      className={classes.list_item_text}
                    />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 7 }}
                    className={classes.list_btn}
                    onClick={() => router.push("/username/new-job-request")}
                  >
                    <ListItemIcon className={classes.list_icon_btn}>
                      <Image
                        src="/icons/pen.svg"
                        alt="job_req"
                        className={classes.list_btn_icon}
                        height={16}
                        width={18}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="Post New Request"
                      className={classes.list_item_text}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                className={classes.list_btn}
                onClick={() => router.push("/username/new-fix")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/cart.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={16}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Start Selling"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton
                className={classes.list_btn}
                onClick={() => router.push("/order/manage-sales")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/time.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Sales"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton
                className={classes.list_btn}
                onClick={() => router.push("/order/manage-order")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/order.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Manage Orders"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton
                className={classes.list_btn}
                onClick={() => router.push("/username/finance")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/finance.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Finance"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton
                className={`mt-4 ${classes.list_btn}`}
                onClick={() => router.push("/faq")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/bookmark.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="How it Works"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton className={classes.list_btn}>
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/terms.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Terms of Service"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton className={classes.list_btn}>
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/heart.svg"
                    alt="job_req"
                    className={`mr-2 ${classes.list_btn_icon}`}
                    height={24}
                    width={24}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Contact Us"
                  className={classes.list_item_text}
                />
              </ListItemButton>
              <ListItemButton
                className={`mt-4 mb-5 ${classes.list_btn}`}
                onClick={() => router.push("/login")}
              >
                <ListItemIcon className={classes.list_icon_btn}>
                  <Image
                    src="/icons/logout.svg"
                    alt="job_req"
                    className={classes.list_btn_icon}
                    height={14}
                    width={26}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Logout"
                  className={classes.list_item_text}
                />
              </ListItemButton>
            </List>
          </Col>
          <Col lg="9">
            <Row>
              <Col lg="4">
                <div className={classes.find}>
                  <p>Find what your business need</p>
                  <div className={classes.search_div}>
                    <SearchIcon className={classes.search_icon} />
                    <input type="text" placeholder="Try ‘logo’" />
                  </div>
                </div>
                <div className={classes.find}>
                  <p>Post a job request and select from different bid prices</p>
                  <button
                    className={classes.post_job}
                    onClick={() => router.push("/username/new-job-request")}
                  >
                    Post a Job Request
                  </button>
                </div>
              </Col>
              <Col lg="8">
                <div className={classes.sales_card}>
                  <div className={classes.card_item}>
                    <Image
                      src="/icons/cl_red.svg"
                      alt="cl_red"
                      width={50}
                      height={50}
                      objectFit="fill"
                    />
                    <div className={classes.sales_details}>
                      <p>onging sales</p>
                      <h5>10</h5>
                    </div>
                  </div>
                  <div className={classes.card_item}>
                    <Image
                      src="/icons/cl_orange.svg"
                      alt="cl_red"
                      width={50}
                      height={50}
                      objectFit="fill"
                    />
                    <div className={classes.sales_details}>
                      <p>onging Orders</p>
                      <h5>4</h5>
                    </div>
                  </div>
                </div>
              </Col>
              <div className="my-5">
                <h3 className={classes.title}>My Fixes</h3>
                <FixSlider fixes={categories} slide_to_show={3} />
                <MobileSlider fixes={categories} slide_to_show={3} />
              </div>
              <Row className="mb-5 pe-0">
                <h3 className={classes.title}>Featured</h3>
                {categories.map((item, indx) => (
                  <CommonCard fx={item} key={indx} col="4" />
                ))}
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
      <Divider className={classes.bottom_divider} />
      <Container>
        <Row>
          <FooterBottom />
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => <>{page}</>;
