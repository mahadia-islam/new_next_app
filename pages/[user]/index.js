import { Col, Container, Row } from "react-bootstrap";
import { categories } from "../../dummy_data/dummy_fixes";
import CommonCard from "../../components/Card/Card";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import CreateIcon from "@mui/icons-material/Create";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import classes from "./user.module.css";
import FooterBottom from "../../components/FooterBottom/FooterBottom";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  return (
    <section className={classes.user}>
      <Container>
        <Row>
          <Col lg="3">
            <div className={classes.user_card}>
              <div className={classes.active_status}>
                <div className={classes.dot}></div>
                <span>Away</span>
              </div>
              <div className={classes.user_image}>
                <Image
                  alt="user_img"
                  src="/images/author.jpg"
                  width={100}
                  height={100}
                />
              </div>
              <h4>username</h4>
              <span className={classes.username}>
                @uidesigner <CreateIcon className={classes.create_icon} />
              </span>
              <p>
                I am a graphics designer with more than 2yrs of experience.
                Clients satisfaction is a top priority to me. You can contact me
                anytime. I am always...
              </p>
              <div className={classes.bottom_div}>
                <div className={classes.small_text}>
                  <StarIcon className={classes.star_icon} /> <span>100%</span>
                </div>

                <div className={classes.small_text}>
                  <DateRangeOutlinedIcon className={classes.date} />
                  <span>
                    Joined :{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "short", //to display the full name of the month
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div>
                <button
                  className={classes.contact_me}
                  onClick={() => router.push("/inbox/dev_aslam")}
                >
                  contact me
                </button>
              </div>
            </div>
          </Col>
          <Col lg="9">
            <div className={classes.fix_by}>
              <h3>Fix by username</h3>
            </div>
            <Row>
              {categories.map((item, indx) => (
                <CommonCard key={indx} fx={item} col={4} />
              ))}
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

export default User;

User.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
