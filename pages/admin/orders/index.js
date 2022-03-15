import { Container } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./orders.module.scss";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

const Fixes = () => {
  const [activeBtn, setActiveBtn] = useState("ongoing");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const router = useRouter();

  const cardDatas = [
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "deliverd",
      days: 1,

      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "deliverd",
      days: 1,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "deliverd",
      days: 1,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "cancelled",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "cancelled",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "cancelled",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "completed",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "completed",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "dispute",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "dispute",
      days: 0,
      offer: 2,
    },
  ];

  const menuList = [
    "Edit Fix",
    "Approve",
    "Decline",
    "Draft fix",
    "Delete Fix",
  ];

  return (
    <DashBoardLayout appbar_title="Orders">
      <section>
        <Container>
          <div className={classes.button_div_container}>
            <div className={classes.button_div}>
              <button
                className={activeBtn === "ongoing" ? classes.active : null}
                onClick={() => setActiveBtn("ongoing")}
              >
                Ongoing (8)
              </button>
              <button
                className={activeBtn === "deliverd" ? classes.active : null}
                onClick={() => setActiveBtn("deliverd")}
              >
                Deliverd (0)
              </button>
              <button
                className={activeBtn === "completed" ? classes.active : null}
                onClick={() => setActiveBtn("completed")}
              >
                Completed (0)
              </button>
              <button
                className={activeBtn === "cancelled" ? classes.active : null}
                onClick={() => setActiveBtn("cancelled")}
              >
                Cancelled (3)
              </button>
              <button
                className={activeBtn === "dispute" ? classes.active : null}
                onClick={() => setActiveBtn("dispute")}
              >
                Dispute (3)
              </button>
            </div>
          </div>
          <div className={classes.job_card_grid}>
            {cardDatas.map((item, indx) => (
              <Fragment key={indx}>
                {activeBtn === "ongoing" ? (
                  <div
                    className={classes.job_card}
                    onClick={() => router.push("/admin/orders/chat")}
                  >
                    <div>
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className={classes.card_img}
                          style={{
                            backgroundImage: `url(/images/order_card_img.png)`,
                          }}
                        ></div>
                        <h4>I will design a professional logo for you...</h4>
                        <p>2 Jul 2021</p>
                      </div>
                    </div>
                    <div className={classes.card_bottm}>
                      <p>beni</p>
                      <h6>N2,000 | Fee: No</h6>
                    </div>
                  </div>
                ) : (
                  <>
                    {activeBtn === item.status && (
                      <div
                        className={classes.job_card}
                        onClick={() => router.push("/admin/orders/chat")}
                      >
                        <div>
                          <div className="d-flex flex-column align-items-center">
                            <div
                              className={classes.card_img}
                              style={{
                                backgroundImage: `url(/images/order_card_img.png)`,
                              }}
                            ></div>
                            <h4>
                              I will design a professional logo for you...
                            </h4>
                            <p>2 Jul 2021</p>
                          </div>
                        </div>
                        <div className={classes.card_bottm}>
                          <p>beni</p>
                          <h6>N2,000 | Fee: No</h6>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Fragment>
            ))}
          </div>
          <div className="d-flex justify-content-center my-5">
            <LoadMoreButton />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {menuList.map((item, indx) => (
              <MenuItem
                onClick={handleClose}
                key={indx}
                className={classes.menu_item}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Fixes;

Fixes.getLayout = (page) => <>{page} </>;
