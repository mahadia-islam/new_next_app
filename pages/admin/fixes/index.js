import { Container } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classes from "./fixes.module.scss";
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

const Fixes = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cardDatas = [
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "published",
      days: 1,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "published",
      days: 1,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "published",
      days: 1,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "draft",
      days: 0,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "draft",
      days: 0,
    },
    {
      name: "Sajawal",
      title: "I need a logo designer...",
      amount: "14,000",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      status: "draft",
      days: 0,
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
    <DashBoardLayout appbar_title="Fixes">
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
                className={activeBtn === "draft" ? classes.active : null}
                onClick={() => setActiveBtn("draft")}
              >
                Draft (3)
              </button>
            </div>
          </div>
          <div className={classes.job_card_grid}>
            {cardDatas.map((item, indx) => (
              <Fragment key={indx}>
                {activeBtn === "all" ? (
                  <div className={classes.card_cover}>
                    <div
                      className={classes.job_card}
                      key={indx}
                      onClick={() => router.push("/username/fix-title")}
                    >
                      <div className={classes.job_card_top}>
                        <div className={classes.top_info}>
                          <span>Sajawal</span>
                          <p>I need a logo designer...</p>
                          <span>&#x20A6;14,000</span>
                        </div>
                        <div
                          style={{
                            backgroundImage: `url(/images/placeholder.png)`,
                          }}
                          className={classes.job_card_img}
                        ></div>
                      </div>
                      <div className={classes.card_details}>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam...
                        </p>
                      </div>
                      <div className={classes.card_bottom_grid}>
                        <div className={classes.card_button_grid}>
                          <div className={classes.button_div}>
                            {item.status === "published" ? (
                              <button className={classes.approve}>
                                Published
                              </button>
                            ) : (
                              <button className={classes.delete}>Draft</button>
                            )}
                          </div>
                        </div>
                        <div className={classes.offer_info}></div>
                      </div>
                    </div>
                    <button
                      onClick={handleClick}
                      className={classes.bottom_card_btn}
                    >
                      {item.status === "published" && (
                        <>
                          <WatchLaterIcon className={classes.offer_info_icon} />
                          <span>1 Day delivery</span>
                        </>
                      )}
                      <KeyboardArrowDownIcon
                        className={classes.offer_info_icon}
                      />
                    </button>
                  </div>
                ) : (
                  <>
                    {activeBtn === item.status && (
                      <div
                        className={classes.job_card}
                        key={indx}
                        onClick={() => router.push("/username/fix-title")}
                      >
                        <div className={classes.job_card_top}>
                          <div className={classes.top_info}>
                            <span>Sajawal</span>
                            <p>I need a logo designer...</p>
                            <span>&#x20A6;14,000</span>
                          </div>
                          <div
                            style={{
                              backgroundImage: `url(/images/placeholder.png)`,
                            }}
                            className={classes.job_card_img}
                          ></div>
                        </div>
                        <div className={classes.card_details}>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam...
                          </p>
                        </div>
                        <div className={classes.card_bottom_grid}>
                          <div className={classes.card_button_grid}>
                            <div className={classes.button_div}>
                              {item.status === "published" ? (
                                <button className={classes.approve}>
                                  Published
                                </button>
                              ) : (
                                <button className={classes.delete}>
                                  Draft
                                </button>
                              )}
                            </div>
                          </div>
                          <div className={classes.offer_info}>
                            <button onClick={handleClick}>
                              {item.status === "published" && (
                                <>
                                  <WatchLaterIcon
                                    className={classes.offer_info_icon}
                                  />
                                  <span>1 Day delivery</span>
                                </>
                              )}
                              <KeyboardArrowDownIcon
                                className={classes.offer_info_icon}
                              />
                            </button>
                          </div>
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
