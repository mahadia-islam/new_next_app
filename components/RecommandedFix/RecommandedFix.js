import { Container, Row } from "react-bootstrap";
import classes from "./RecommandedFix.module.css";
import Slider from "react-slick";
import CommonCard from "../Card/Card";
import { categories } from "../../dummy_data/dummy_fixes";

const RecommandedFix = () => {
  const cateslider = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    autoplay: false,
    speed: 200,
    slidesToShow: 4,
    swipeToSlide: true,
    // slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          slidesToShow: 3,
          // slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          swipeToSlide: true,
          slidesToShow: 2,
          // slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          // slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className={classes.fixCategory_section}>
      <Container>
        <Row>
          <div className={classes.fix_cat_title}>
            <h2>Recommanded For You</h2>
          </div>
          {categories.map((category, indx) => (
            <CommonCard key={indx} fx={category} col={3} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RecommandedFix;
