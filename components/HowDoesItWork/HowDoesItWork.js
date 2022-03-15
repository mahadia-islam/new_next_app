import { Col, Container, Row } from "react-bootstrap";
import HowDoesItWorkCard from "../HowDoesItWorkCard/HowDoesItWorkCard";
import classes from "./HowDoesItWork.module.css";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

const Tab = styled(TabUnstyled)`
  font-family: "Nunito", sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 12px 16px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #e16f26;
    color: white;
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #e16f26;
    color: white;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: "Nunito", sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  background-color: #d6d2d4;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

const HowDoesItWork = () => {
  const info = [
    [
      {
        title: "Find the perfect expert",
        color: "blue",
        details:
          "Search for a service, with few details, describe your project, you will have the freedom to choose from lots of expert that are ready to get your job done",
      },
      {
        title: "Hire with ease",
        color: "orange",
        details:
          "We only house the best hands when it comes to digital jobs, and we will walk you through every process untill your job is done. No setup fee, No hidden charges",
      },
      {
        title: "Find the perfect expert",
        color: "sky",
        details:
          "Search for a service, with few details, describe your project, you will have the freedom to choose from lots of expert that are ready to get your job done",
      },
    ],
    [
      {
        title: "Find an expert fast",
        color: "blue",
        details:
          "It can take hours to find the perfect hand for your project, but not with Fixlancer. Find services in miniute with fixed prices all from the comfort of your home.",
      },
      {
        title: "Secured payment, always",
        color: "orange",
        details:
          "Note that for every services, you’ll make an upfront payment. Your payment will be held on escrow untill you approve the job based on your satisfication.",
      },
      {
        title: "24/7 assistance",
        color: "sky",
        details:
          "Enquiries? Our help team is always available and ready to give you that premium support you need. Wherever, whenever",
      },
    ],
  ];
  return (
    <section className={classes.section_how_does_it_work}>
      <Container>
        <Row>
          <TabsUnstyled defaultValue={0}>
            <Col lg="4 mx-auto" className="mb-5">
              <TabsList>
                <Tab className={classes.tab_btn}>How does it work?</Tab>
                <Tab className={classes.tab_btn}>Why fixlancer?</Tab>
              </TabsList>
            </Col>

            {info.map((singlecardinfo, indx) => (
              <TabPanel value={indx} key={indx}>
                <Row>
                  <HowDoesItWorkCard col={4} singlecardinfo={singlecardinfo} />
                </Row>
              </TabPanel>
            ))}
          </TabsUnstyled>
        </Row>
      </Container>
    </section>
  );
};

export default HowDoesItWork;
