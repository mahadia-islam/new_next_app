import Image from "next/image";
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "../NewsCard/NewsCard";
import classes from "./TheNews.module.css";

const TheNews = () => {
  const router = useRouter();

  const newses = [
    {
      img: "/images/news1.png",
      title:
        "How tech startup Fixlancer is changing the job market in Nigeria.",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news2.png",
      title: "Efe Ejeba Bags Fixlancer Endorsement Deal",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news3.png",
      title:
        "How Nigerian tech startup Fixlancer is changing how jobs get done",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
    {
      img: "/images/news4.png",
      title: "Fixlancer partners with Jooble to change how jobs get done",
      description:
        "The idea of Fixlancer in Africa is strongly driving freelancing to a comfortable zone; a home where freelancing will be more of working, earning, connecting, and learning, rather than just working.",
    },
  ];
  return (
    <section className={classes.the_news}>
      <Container>
        <Row>
          <Col lg="12">
            <div className={classes.title}>
              <h1>In The News</h1>
            </div>
          </Col>
          <Col
            lg="8 ms-auto"
            className={classes.col_div_for_news}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
            onClick={() =>
              router.push(
                "https://disrupt-africa.com/2020/05/06/how-nigerian-tech-startup-fixlancer-is-changing-how-jobs-get-done/"
              )
            }
          >
            <div className={classes.text_content}>
              <div>1</div>
            </div>
            <div className={classes.news_content1}>
              <Image
                src="/images/news3.png"
                alt="news_img"
                width={75}
                height={50}
                className={classes.news_img}
                objectFit="contain"
              />
              <p>
                How tech startup Fixlancer is changing the job market in Nigeria
              </p>
            </div>
          </Col>
          <Col
            lg="8 ms-auto"
            className={classes.col_div_for_news}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            onClick={() =>
              router.push(
                "https://www.nairaland.com/5285913/efe-ejeba-bags-fixlancer-endorsement/"
              )
            }
          >
            <div className={classes.text_content}>
              <div>2</div>
            </div>
            <div className={classes.news_content2}>
              <Image
                src="/images/news2.png"
                alt="news_img"
                width={130}
                height={50}
                className={classes.news_img}
                objectFit="contain"
              />
              <p>Efe Ejeba Bags Fixlancer Endorsement Deal</p>
            </div>
          </Col>
          <Col
            lg="8 ms-auto"
            className={classes.col_div_for_news}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
            onClick={() =>
              router.push(
                "https://techpoint.africa/2020/05/11/how-tech-startup-fixlancer-is-changing-the-job-market-in-nigeria/"
              )
            }
          >
            <div
              className={`${classes.text_content} ${classes.last_text_content}`}
            >
              <div>3</div>
            </div>
            <div className={classes.news_content3}>
              <Image
                src="/images/news1.png"
                alt="news_img"
                width={130}
                height={50}
                className={classes.news_img}
                objectFit="contain"
              />
              <p>
                How Nigerian tech startup Fixlancer is changing how jobs get
                done
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TheNews;
