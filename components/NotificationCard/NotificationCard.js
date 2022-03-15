import { Fragment, useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import classes from "./NotificationCard.module.css";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Image from "next/image";
import { dummy_notifications } from "../../dummy_data/dummy_notifications";

const NotificationCard = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="position-relative">
      <IconButton
        color="primary"
        component="span"
        className={classes.notification}
        onClick={handleToggle}
        ref={anchorRef}
      >
        <NotificationsIcon className={classes.bell_icon} />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        className={`${classes.drop_down_menu} ${
          open ? classes.drop_before : ""
        }`}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps}>
            <Paper className={classes.notification_card}>
              <div className={classes.clip_path}></div>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  className={classes.menu_list}
                >
                  <div>
                    <div className={classes.header}>
                      <h4 className={classes.title}>Notifications</h4>
                      <button className={classes.mark}>Mark All as read</button>
                    </div>
                    {dummy_notifications.map((noti, indx) => (
                      <Fragment key={indx}>
                        <div
                          className={`${classes.notification_content} ${
                            indx % 2 === 0 ? classes.readed : null
                          }`}
                        >
                          <div className={classes.notifiacation_image}>
                            <Image
                              src={noti.img}
                              alt="user_image"
                              width={30}
                              height={30}
                              objectFit="fill"
                            />
                          </div>
                          <div>
                            <p className={classes.text}>{noti.text}</p>
                          </div>
                          <span className={classes.time}>{noti.time}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default NotificationCard;
