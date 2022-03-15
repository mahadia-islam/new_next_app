import Image from "next/image";
import Link from "next/link";
import { Col } from "react-bootstrap";
import FavoriteIcon from "@mui/icons-material/Favorite";
import classes from "./FooterBottom.module.css";

const FooterBottom = () => {
  return (
    <div className={classes.bottom_footer}>
      <Col lg="6 mt-auto" className={classes.footer_bootm_left_col}>
        <div className={classes.footer_logo}>
          <Link href="/">
            <a>
              <Image
                alt="logo"
                src="/images/logo2.png"
                width={174}
                height={50}
              />
            </a>
          </Link>
          <p> &copy; Fixlancer Marketplace {new Date().getFullYear()} </p>
        </div>
      </Col>
      <Col lg="6" className={classes.footer_bootm_right_col}>
        <div className={classes.footer_bottom_right}>
          <div>
            <p className={classes.made_with}>
              Made with <FavoriteIcon className={classes.love} />
            </p>
          </div>
          <div className={classes.social_media}>
            <div>
              <Link href="/">
                <a className={classes.media_icon}>
                  <Image
                    src="/icons/facebook.png"
                    alt="fb"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className={classes.media_icon}>
                  <Image
                    src="/icons/twitter.png"
                    width={25}
                    height={25}
                    alt="twitter"
                  />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a className={classes.media_icon}>
                  <Image
                    src="/icons/instagram.png"
                    width={25}
                    height={25}
                    alt="insta"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <h5 className={classes.download_title}>
                Download the Fixlancer App
              </h5>
            </div>
            <div className={classes.store_div}>
              <Link href="/">
                <a>
                  <div className={classes.store}>
                    <Image
                      src="/images/app_store.png"
                      alt="store"
                      width={87}
                      height={30}
                    />
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className={classes.store}>
                    <Image
                      src="/images/play_store.png"
                      alt="store"
                      width={108}
                      height={30}
                    />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default FooterBottom;
