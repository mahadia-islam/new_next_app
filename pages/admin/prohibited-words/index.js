import { Row, Container } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./prohibited_words.module.scss";

const ProhibitedWords = () => {
  return (
    <DashBoardLayout>
      <section className={classes.prohibitedWords}>
        <Container>
          <Row>
            <div>
              <button className={classes.add_btn}>Add Prohibited Word</button>
            </div>
            <div className={classes.page_body}>
              <h5>Showing 20 most recent</h5>
              <div className={`${classes.bad_word_card} ${classes.trans_back}`}>
                <p>Sex</p>
                <button>Delete</button>
              </div>
              <div className={classes.bad_word_card}>
                <p>Fuck</p>
                <button>Delete</button>
              </div>
              <div className={`${classes.bad_word_card} ${classes.trans_back}`}>
                <p>Weapons</p>
                <button>Delete</button>
              </div>
              <div className={classes.bad_word_card}>
                <p>Contact</p>
                <button>Delete</button>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default ProhibitedWords;

ProhibitedWords.getLayout = (page) => <>{page} </>;
