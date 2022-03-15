import { Col } from "react-bootstrap";
import { Fragment, useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import classes from "./ViewAllCategory.module.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { category_data } from "../../dummy_data/category_data";
import { useRouter } from "next/router";

const ViewAllCategory = ({ land_cat, col }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [listOpen, setListOpen] = useState(null);
  const router = useRouter();

  const handleClick = (title) => {
    // setOpen(!open);
    title === listOpen ? setListOpen(null) : setListOpen(title);
  };

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

  // console.log(land_cat);

  return (
    <Col lg={col !== undefined ? col : "3"}>
      <button
        className={`${classes.view_all}  ${classes[land_cat]}`}
        onClick={handleToggle}
        ref={anchorRef}
      >
        {land_cat !== undefined ? "View All" : "View All Categories"}
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
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  {category_data.map((item, indx) => (
                    <Fragment key={indx}>
                      <ListItemButton
                        onClick={() => handleClick(item.title)}
                        className={classes.category_btn}
                      >
                        <ListItemText
                          primary={item.title}
                          className={classes.category_name}
                        />
                        {
                          <ArrowForwardIosOutlinedIcon
                            className={`${
                              listOpen !== item.title
                                ? classes.arrow_fr
                                : classes.arrow_down
                            }`}
                          />
                        }
                      </ListItemButton>
                      <Collapse
                        in={listOpen === item.title}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          {item.cat.map((sub_cat, indx) => (
                            <ListItemButton
                              sx={{ pl: 4 }}
                              key={indx}
                              onClick={() => {
                                router.push(
                                  `/category/${item.title}/${sub_cat}`
                                );
                                handleToggle();
                                setListOpen(null);
                              }}
                              className={classes.sub_category_btn}
                            >
                              <ListItemIcon
                                className={classes.sub_cat_icon_btn}
                              >
                                <DoubleArrowIcon />
                              </ListItemIcon>
                              <ListItemText
                                primary={sub_cat}
                                className={classes.category_name}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </Fragment>
                  ))}
                </List>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Col>
  );
};

export default ViewAllCategory;
