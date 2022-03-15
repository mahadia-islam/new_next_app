import { Col } from "react-bootstrap";
import { Fragment, useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import classes from "./JobRequestDropdown.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import MenuList from "@mui/material/MenuList";
import Link from "next/link";

const JobRequestDropdown = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [listOpen, setListOpen] = useState(null);

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const jobRequestLinks = [
    {
      title: "All Job Request",
      link: "/job-request",
    },
    {
      title: "My Request",
      link: "/my-request",
    },
    {
      title: "Post Job Request",
      link: "/username/new-job-request",
    },
  ];

  return (
    <Col lg="3">
      <button
        className={classes.view_all}
        onClick={handleToggle}
        ref={anchorRef}
      >
        Job Request
        <ArrowForwardIosOutlinedIcon
          className={`${!open ? classes.arrow_fr : classes.arrow_down}`}
        />
      </button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        className={classes.drop_down_menu}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  className={classes.menu_list}
                >
                  {jobRequestLinks.map((item, indx) => (
                    <Link href={`${item.link}`} key={indx}>
                      <a
                        onClick={handleClose}
                        key={indx}
                        className={classes.menu_item}
                      >
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Col>
  );
};

export default JobRequestDropdown;
