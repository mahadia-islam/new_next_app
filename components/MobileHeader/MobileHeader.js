import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./MobileHeader.module.css";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import NotificationCard from "../NotificationCard/NotificationCard";
import { useRouter } from "next/router";
import SwipeableTemporaryDrawer from "../MenuDrawer/MenuDrawer";
import Image from "next/image";

const MobileHeader = () => {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Navbar collapseOnSelect expand="lg py-0" className={classes.home_nav}>
        <Container className={classes.nav_container}>
          <div className={classes.brand_logo}>
            <Link href="/">
              <a className={classes.brandlogo}>
                <div
                  className={classes.logo_img_div}
                  style={{ backgroundImage: `url(/images/logo2.png)` }}
                ></div>
              </a>
            </Link>
          </div>

          <Nav className="ms-auto"></Nav>
          <div className="d-flex align-items-center">
            <IconButton
              color="primary"
              component="span"
              className={classes.chat}
              onClick={() => router.push("/inbox")}
            >
              <EmailIcon className={classes.email} />
            </IconButton>
            <NotificationCard />
            <SwipeableTemporaryDrawer login={true} />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default MobileHeader;
