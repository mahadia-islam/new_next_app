import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import ListItemButton from "@mui/material/ListItemButton";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import classes from "./MenuDrawer.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

export default function SwipeableTemporaryDrawer({ login }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
    >
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: "1px solid #F2F2F2",
          borderRadius: "5px",
          marginBottom: "2rem",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <div className={classes.close_btn}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={toggleDrawer("left", false)}
          >
            <CloseIcon className={classes.close_icon} />
          </IconButton>
        </div>
        {login && (
          <div className={classes.dashboard_header}>
            <div className="d-flex align-items-center">
              <div
                className={classes.user_img}
                onClick={() => {
                  setState({ left: false });
                  router.push("/username");
                }}
              >
                <Image
                  src="/images/author.jpg"
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
              <p>amanda</p>
            </div>
            <button
              className={classes.edit_profile}
              onClick={() => {
                setState({ left: false });
                router.push("/username/edit-profile");
              }}
            >
              <CreateOutlinedIcon className={classes.pen_icon} /> Edit Profile
            </button>
          </div>
        )}

        {!login && (
          <>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                router.push("/login");
                setState({ left: false });
              }}
            >
              <ListItemText
                primary="Login"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                router.push("/signup");
                setState({ left: false });
              }}
            >
              <ListItemText
                primary="Register"
                className={classes.list_item_text}
              />
            </ListItemButton>
          </>
        )}

        {login && (
          <>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                setState({ left: false });
                router.push("/users/username/dashboard");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/home.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={16}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText primary="Home" className={classes.list_item_text} />
            </ListItemButton>
            <ListItemButton className={classes.list_btn} onClick={handleClick}>
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/job_req.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={20}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Job Request"
                className={classes.list_item_text}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 7 }}
                  className={classes.list_btn}
                  onClick={() => {
                    setState({ left: false });
                    router.push("/job-request");
                  }}
                >
                  <ListItemIcon className={classes.list_icon_btn}>
                    <Image
                      src="/icons/bag.svg"
                      alt="job_req"
                      className={classes.list_btn_icon}
                      height={15}
                      width={15}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="All Request"
                    className={classes.list_item_text}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  className={classes.list_btn}
                  onClick={() => {
                    setState({ left: false });
                    router.push("/my-request");
                  }}
                >
                  <ListItemIcon className={classes.list_icon_btn}>
                    <Image
                      src="/icons/req.svg"
                      alt="job_req"
                      className={classes.list_btn_icon}
                      height={17}
                      width={18}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="My Request"
                    className={classes.list_item_text}
                  />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 7 }}
                  className={classes.list_btn}
                  onClick={() => {
                    setState({ left: false });
                    router.push("/username/new-job-request");
                  }}
                >
                  <ListItemIcon className={classes.list_icon_btn}>
                    <Image
                      src="/icons/pen.svg"
                      alt="job_req"
                      className={classes.list_btn_icon}
                      height={16}
                      width={18}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Post New Request"
                    className={classes.list_item_text}
                  />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                setState({ left: false });
                router.push("/username/new-fix");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/cart.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={16}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Start Selling"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                router.push("/order/manage-sales");
                setState({ left: false });
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/time.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Manage Sales"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                setState({ left: false });
                router.push("/order/manage-order");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/order.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Manage Orders"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={() => {
                setState({ left: false });
                router.push("/username/finance");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/finance.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Finance"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={`mt-4 ${classes.list_btn}`}
              onClick={() => {
                setState({ left: false });
                router.push("/faq");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/bookmark.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="How it Works"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={toggleDrawer("left", false)}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/terms.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Terms of Service"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={classes.list_btn}
              onClick={toggleDrawer("left", false)}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/heart.svg"
                  alt="job_req"
                  className={`mr-2 ${classes.list_btn_icon}`}
                  height={24}
                  width={24}
                />
              </ListItemIcon>
              <ListItemText
                primary="Contact Us"
                className={classes.list_item_text}
              />
            </ListItemButton>
            <ListItemButton
              className={`mt-4 mb-5 ${classes.list_btn}`}
              onClick={() => {
                setState({ left: false });
                router.push("/login");
              }}
            >
              <ListItemIcon className={classes.list_icon_btn}>
                <Image
                  src="/icons/logout.svg"
                  alt="job_req"
                  className={classes.list_btn_icon}
                  height={14}
                  width={26}
                />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                className={classes.list_item_text}
              />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <div className={classes.drawer_menu_btn_div}>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>

      <IconButton
        color="primary"
        aria-label="upload picture"
        component="span"
        onClick={toggleDrawer("left", true)}
        className={classes.menu_drawer_btn}
      >
        <MenuIcon className={classes.drawer_menu_icon} />
      </IconButton>
    </div>
  );
}
