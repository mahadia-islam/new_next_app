import { Container, Row } from "react-bootstrap";
import classes from "./FeaturedFixes.module.css";
import Slider from "react-slick";
import CommonCard from "../Card/Card";
import { categories } from "../../dummy_data/dummy_fixes";
import FixSlider from "../FixSlider/FixSlider";
import MobileSlider from "../MobileSlider/MobileSlider";

const FeaturedFixes = () => {
  return (
    <section className={classes.fixCategory_section}>
      <Container>
        <Row>
          <div className={classes.fix_cat_title}>
            <h2>Featured</h2>
          </div>
          <FixSlider fixes={categories} slide_to_show={4} />
        </Row>
      </Container>
      <MobileSlider fixes={categories} slide_to_show={4} />
    </section>
  );
};

export default FeaturedFixes;
