import Image from "next/image";
import { Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import StarIcon from "@mui/icons-material/Star";
import classes from "./MobileSlider.module.css";
import { useRouter } from "next/router";

const MobileSlider = ({ fixes, slide_to_show }) => {
  const router = useRouter();

  const cateslider = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 200,
    slidesToShow: slide_to_show,
    swipeToSlide: true,
    slidesToScroll: slide_to_show,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          slidesToShow: 3,
          infinite: true,
          dots: false,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          initialSlide: 1,
          dots: false,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20%",
        },
      },
    ],
  };

  return (
    <Slider {...cateslider} className={classes.mobile_slider}>
      {fixes.map((fx, indx) => (
        <Col lg={11} key={indx}>
          <Card
            className={classes.common_card}
            style={{ margin: "0 .5rem" }}
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
                      width={30}
                      height={30}
                      alt="author_img"
                      objectFit="fill"
                      priority={true}
                    />
                  </div>
                  <p onClick={() => router.push("/username")}>elijahTomilawa</p>
                </div>
                <div className={classes.title}>
                  <p>
                    Lorem, ipsum dolor sit amet conse cte tur adipisicing elit.
                  </p>
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
        </Col>
      ))}
    </Slider>
  );
};

export default MobileSlider;
