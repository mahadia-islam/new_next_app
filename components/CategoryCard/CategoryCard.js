import Image from "next/image";
import { Col } from "react-bootstrap";
import classes from "./CategoryCard.module.css";

const CategoryCard = ({ category }) => {
  return (
    <div className={classes.category_card}>
      <div className={classes.category_name}>
        <h6>{category.name}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;
