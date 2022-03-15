import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import classes from "./ProfileMenu.module.css";
import GridViewIcon from "@mui/icons-material/GridView";

import Image from "next/image";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

export default function ProfileMenu({ dispatch }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    // setLoggedInUser({});
    // Cookies.remove("token");
  };

  return (
    <Fragment>
      <Box>
        <Tooltip title="Account settings">
          <button onClick={handleClick} className={classes.profile_account_btn}>
            <div className={classes.user_img}>
              <Image
                src="/images/author.jpg"
                alt="logoImg"
                className={classes.selise_logo}
                width={32}
                height={32}
              />
            </div>
          </button>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            p: 2,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div className="d-flex flex-column align-items-center justify-content-evenly">
          <button
            className={classes.logout}
            onClick={() => router.push("/username")}
          >
            <Avatar />
            Profile
          </button>
          <button
            className={classes.logout}
            onClick={() => router.push("/admin")}
          >
            <GridViewIcon />
            Admin
          </button>
          <button
            className={classes.logout}
            onClick={() => router.push("/username/edit-profile")}
          >
            <SettingsIcon />
            Settings
          </button>
          <button className={classes.logout} onClick={() => router.push("/")}>
            <Logout />
            logout
          </button>
        </div>
      </Menu>
    </Fragment>
  );
}
