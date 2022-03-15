import Slider from "react-slick";
import CommonCard from "../Card/Card";
import classes from "./FixSlider.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
const FixSlider = ({ fixes, slide_to_show }) => {
  const cateslider = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 200,
    slidesToShow: slide_to_show,
    swipeToSlide: true,
    slidesToScroll: slide_to_show,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true,
          slidesToShow: 3,
          infinite: true,
          arrows: true,
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
          arrows: true,
          dots: false,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          swipeToSlide: true,
          slidesToShow: 1,
          arrows: true,
          dots: false,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...cateslider} className={classes.fix_slider}>
      {fixes.map((category, indx) => (
        <CommonCard key={indx} fx={category} col={11} />
      ))}
    </Slider>
  );
};

export default FixSlider;
