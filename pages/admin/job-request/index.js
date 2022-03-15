import { Container } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./job_request.module.scss";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";

const Fixes = () => {
  const [activeBtn, setActiveBtn] = useState("all");
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
      status: "published",
      days: 1,

      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "published",
      days: 1,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "published",
      days: 1,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "declined",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "declined",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "declined",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "pending",
      days: 0,
      offer: 2,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "pending",
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
    <DashBoardLayout appbar_title="Job Request">
      <section>
        <Container>
          <div className={classes.button_div_container}>
            <div className={classes.button_div}>
              <button
                className={activeBtn === "all" ? classes.active : null}
                onClick={() => setActiveBtn("all")}
              >
                All (8)
              </button>
              <button
                className={activeBtn === "published" ? classes.active : null}
                onClick={() => setActiveBtn("published")}
              >
                published (5)
              </button>
              <button
                className={activeBtn === "pending" ? classes.active : null}
                onClick={() => setActiveBtn("pending")}
              >
                Pending (1)
              </button>
              <button
                className={activeBtn === "declined" ? classes.active : null}
                onClick={() => setActiveBtn("declined")}
              >
                Declined (0)
              </button>
            </div>
          </div>
          <div className={classes.job_card_grid}>
            {cardDatas.map((item, indx) => (
              <Fragment key={indx}>
                {activeBtn === "all" ? (
                  <div
                    className={classes.job_card}
                    onClick={() => {
                      router.push("/job-request/job-request-details");
                    }}
                  >
                    <div className={classes.job_card_top}>
                      <div className={classes.top_info}>
                        <span>{item.name}</span>
                        <p>{item.title}</p>
                        <span>{item.amount}</span>
                      </div>
                      <div
                        style={{
                          backgroundImage: `url(/images/placeholder.png)`,
                        }}
                        className={classes.job_card_img}
                      ></div>
                    </div>
                    <div className={classes.card_details}>
                      <p>{item.description}</p>
                    </div>
                    <div className={classes.card_bottom_grid}>
                      <div className={classes.card_button_grid}>
                        {item.status !== "published" ? (
                          <>
                            <div className={classes.button_div}>
                              <button className={classes.approve}>
                                Approve
                              </button>
                              <button>Edit</button>
                            </div>
                            <div className={classes.button_div}>
                              <button className={classes.delete}>
                                Decline
                              </button>
                              <button className={classes.delete}>Delete</button>
                            </div>
                          </>
                        ) : (
                          <div className={classes.button_div}>
                            <button className={classes.approve}>Delete</button>
                          </div>
                        )}
                      </div>
                      <div className={classes.offer_info}>
                        <p>
                          <WatchLaterIcon className={classes.offer_info_icon} />
                          {item.days} Day delivery
                        </p>
                        <p>
                          <BackupTableIcon
                            className={classes.offer_info_icon}
                          />
                          {item.offer} Offers
                        </p>
                        <span className={classes[item.status]}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {activeBtn === item.status && (
                      <div
                        className={classes.job_card}
                        onClick={() => {
                          router.push("/job-request/job-request-details");
                        }}
                      >
                        <div className={classes.job_card_top}>
                          <div className={classes.top_info}>
                            <span>{item.name}</span>
                            <p>{item.title}</p>
                            <span>{item.amount}</span>
                          </div>
                          <div
                            style={{
                              backgroundImage: `url(/images/placeholder.png)`,
                            }}
                            className={classes.job_card_img}
                          ></div>
                        </div>
                        <div className={classes.card_details}>
                          <p>{item.description}</p>
                        </div>
                        <div className={classes.card_bottom_grid}>
                          <div className={classes.card_button_grid}>
                            {item.status !== "published" ? (
                              <>
                                <div className={classes.button_div}>
                                  <button className={classes.approve}>
                                    Approve
                                  </button>
                                  <button>Edit</button>
                                </div>
                                <div className={classes.button_div}>
                                  <button className={classes.delete}>
                                    Decline
                                  </button>
                                  <button className={classes.delete}>
                                    Delete
                                  </button>
                                </div>
                              </>
                            ) : (
                              <div className={classes.button_div}>
                                <button className={classes.approve}>
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                          <div className={classes.offer_info}>
                            <p>
                              <WatchLaterIcon
                                className={classes.offer_info_icon}
                              />
                              {item.days} Day delivery
                            </p>
                            <p>
                              <BackupTableIcon
                                className={classes.offer_info_icon}
                              />
                              {item.offer} Offers
                            </p>
                            <span className={classes[item.status]}>
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Fragment>
            ))}
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
