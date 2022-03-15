import { useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import classes from "./ViewAllCategoryCardDropdown.module.css";
import MenuList from "@mui/material/MenuList";
import Link from "next/link";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const ViewAllCategoryCardDropdown = ({ category, cat_class }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

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

  return (
    <div
      className={classes.category_card}
      onClick={handleToggle}
      ref={anchorRef}
    >
      <button className={classes.view_all}>{category.title}</button>
      <div className={classes[cat_class]}>{category.icon}</div>
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
                  {category.cat.map((item, indx) => (
                    <Link
                      href={`/category/${category.title}/${item}`}
                      key={indx}
                    >
                      <a
                        onClick={handleClose}
                        key={indx}
                        className={classes.menu_item}
                      >
                        {item}
                        <ArrowForwardIosOutlinedIcon
                          className={classes.arrow_fr}
                        />
                      </a>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default ViewAllCategoryCardDropdown;
