import { Container, Row } from "react-bootstrap";
import FooterLink from "../FooterLink/FooterLink";
import classes from "./Footer.module.css";
import Divider from "@mui/material/Divider";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {
  const footerInfo = [
    {
      title: "Category",
      content: [
        {
          link: "/",
          title: "Graphics & Design",
        },
        {
          link: "/",
          title: "Writing",
        },
        {
          link: "/",
          title: "Programming & Tech",
        },
        {
          link: "/",
          title: "Digital Marketing",
        },
        {
          link: "/",
          title: "Music & Audio",
        },
      ],
    },
    {
      title: "Company",
      content: [
        {
          link: "/",
          title: "About us",
        },
        {
          link: "/",
          title: "How it works",
        },
        {
          link: "/faq",
          title: "FAQs",
        },
        {
          link: "/",
          title: "Affiliate Program",
        },
        {
          link: "/",
          title: "Contact us",
        },
      ],
    },
    {
      title: "Quick Links",
      content: [
        {
          link: "/",
          title: "Start Selling",
        },
        {
          link: "/",
          title: "Post Job Request",
        },
      ],
    },
    {
      title: "Connect",
      content: [
        {
          link: "/",
          title: "Facebook",
        },
        {
          link: "/",
          title: "Instargram",
        },
        {
          link: "/",
          title: "Twitter",
        },
        {
          link: "/",
          title: "Linkedin",
        },
      ],
    },
    {
      title: "Leagal",
      content: [
        {
          link: "/",
          title: "Terms and Conditions",
        },
      ],
    },
  ];

  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <div className={classes.links}>
            {footerInfo.map((info, indx) => (
              <FooterLink key={indx} info={info} />
            ))}
          </div>
          <Divider className={classes.footer_divider} />
          <FooterBottom />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
