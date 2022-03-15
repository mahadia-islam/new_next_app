import { Col } from "react-bootstrap";
import Link from "next/link";
import classes from "./FooterLink.module.css";

const FooterLink = ({ info }) => {
  return (
    <Col lg="12" className={classes.footer_link_col}>
      <div className={classes.title}>
        <h3>{info.title}</h3>
      </div>
      <div className={classes.links}>
        {info.content.map((content, indx) => (
          <Link href={content.link} key={indx}>
            <a className={classes.link}>{content.title}</a>
          </Link>
        ))}
      </div>
    </Col>
  );
};

export default FooterLink;
