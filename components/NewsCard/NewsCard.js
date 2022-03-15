import Image from "next/image";
import { Col } from "react-bootstrap";
import classes from "./NewsCard.module.css";

const NewsCard = ({ news, indx }) => {
  return (
    <Col lg="6" className={classes.news_col}>
      <div className={classes.news_card}>
        <Image
          className={classes.newsImg}
          width={200}
          height={100}
          src={news.img}
          alt="newscard_img"
        />
        <h5>{news.title}</h5>
        <p>{news.description}</p>
      </div>
    </Col>
  );
};

export default NewsCard;
