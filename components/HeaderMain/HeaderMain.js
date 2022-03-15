import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import classes from "./HeaderMain.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

const HeaderMain = () => {
  const router = useRouter();
  return (
    <section className={classes.section_headerMain}>
      <Container className={classes.header_main_container}>
        <Row className="align-items-end h-100">
          <Col lg="5" className={classes.left_header_main}>
            <div className={classes.find_service}>
              <h1>
                A <span> Better Way </span> to get <br /> jobs done
              </h1>
              <p>
                Fixlancer lets you get jobs done person-to-person in an easy,
                safe and secured way from anywhere at anytime
              </p>
            </div>
            <div>
              <div className={classes.search_input}>
                <SearchIcon className={classes.searchIcon} />
                <Form.Control
                  size="lg"
                  type="search"
                  onFocus={() => false}
                  placeholder="Try ‘logo’"
                />
                <button>Search</button>
              </div>
            </div>
            <div>
              <div className={classes.popular_search}>
                <button
                  className={classes.popular}
                  onClick={() => router.push("/?login=true")}
                >
                  Popular
                </button>
                <button
                  className={classes.popular_btn}
                  onClick={() => router.push("/?login=true")}
                >
                  Logo
                </button>
                <button
                  className={classes.popular_btn}
                  onClick={() => router.push("/?login=true")}
                >
                  Website design
                </button>
                <button
                  className={classes.popular_btn}
                  onClick={() => router.push("/?login=true")}
                >
                  Writing
                </button>
              </div>
            </div>
            <div className={classes.login_register}>
              <Link href="/login">
                <a className={classes.login}>Login</a>
              </Link>
              <Link href="/signup">
                <a className={classes.register}> Register</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeaderMain;
