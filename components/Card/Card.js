import { Button, Card, Col } from "react-bootstrap";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import Image from "next/image";
import classes from "./Card.module.css";
import { useRouter } from "next/router";

const CommonCard = ({ fx, col }) => {
  const router = useRouter();
  return (
    <Col lg={col}>
      <Card
        className={classes.common_card}
        style={{ margin: col ? "1rem 0" : "1rem 0.6rem" }}
        onClick={() => router.push("/usename/fix_name_or_title")}
      >
        <div className={classes.fix_card}>
          <div
            className={classes.card_img}
            style={{ backgroundImage: `url(${fx.img})` }}
          ></div>
          <div className={classes.card_body}>
            <div className={classes.author_info}>
              <div className={classes.author}>
                <Image
                  src={fx.author_img}
                  width={50}
                  height={50}
                  alt="author_img"
                  objectFit="fill"
                  priority={true}
                />
              </div>
              <p onClick={() => router.push("/username")}>elijahTomilawa</p>
            </div>
            <div className={classes.title}>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className={classes.ratings_div}>
              <div className={classes.rating}>
                <p>
                  <StarIcon className={classes.rating_icon} /> 5.0
                </p>
                <span> (2444) </span>
              </div>
              <div className={classes.card_price}>
                <p>&#x20A6;25000</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <div
        className={classes.mobile_card}
        onClick={() => router.push("/usename/fix_name_or_title")}
      >
        <div className={classes.mobile_card_top}>
          <div
            className={classes.mobile_card_img}
            style={{ backgroundImage: `url(${fx.img})` }}
          ></div>
          <div className={classes.mobile_card_details}>
            <div className={classes.mobile_card_title}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim.
              </p>
            </div>
            <div className={classes.mobile_rating}>
              <p>
                <StarIcon className={classes._mobile_rating_icon} /> 5.0
              </p>
              <span> (2444) </span>
            </div>
          </div>
        </div>
        <div className={classes.mobile_card_bottom}>
          <div className={classes.offer_by}>
            <div
              className={classes.circle}
              style={{ backgroundImage: `url(/images/author.jpg)` }}
            ></div>
            <span>username23</span>
          </div>
          <div>
            <h6 className={classes.mobile_card_price}>&#x20A6;10,000</h6>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CommonCard;
