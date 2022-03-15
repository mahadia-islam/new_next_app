import { Container, Form } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./users.module.scss";
import { Fragment, useState } from "react";
import Menu from "@mui/material/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { IconButton, Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useRouter } from "next/router";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded": {
    background: "white",
    borderRadius: "12px",
    border: "2px solid white",
  },
}));

const Fixes = () => {
  const [page, setPage] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const router = useRouter();

  const columns = ["username", "date", "phone", "email", "last_seen", "action"];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [dotAnchorEl, setDotAnchorEl] = useState(null);
  const dotOpen = Boolean(dotAnchorEl);

  const [roleOpen, setRoleOpen] = useState(false);
  const [banOpen, setbanOpen] = useState(false);

  const dothandleClick = (event) => {
    setDotAnchorEl(event.currentTarget);
  };
  const dothandleClose = () => {
    setDotAnchorEl(null);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [activeBtn, setActiveBtn] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cardDatas = [
    {
      username: "Sajawal",
      date: "30 jul 2021",
      phone: "01843194554",
      email: "aslam@gamailc.om",
      last_seen: "3h",
      status: "banned",
    },

    {
      username: "Sajawal",
      date: "30 jul 2021",
      phone: "01843194554",
      email: "aslam@gamailc.om",
      last_seen: "3h",
      status: "active",
    },
    {
      username: "Sajawal",
      date: "30 jul 2021",
      phone: "01843194554",
      email: "aslam@gamailc.om",
      last_seen: "3h",
      status: "active",
    },
    {
      username: "Sajawal",
      date: "30 jul 2021",
      phone: "01843194554",
      email: "aslam@gamailc.om",
      last_seen: "3h",
      status: "online",
    },
  ];

  return (
    <DashBoardLayout appbar_title="All Users">
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
                className={activeBtn === "online" ? classes.active : null}
                onClick={() => setActiveBtn("online")}
              >
                Online (2)
              </button>
              <button
                className={activeBtn === "banned" ? classes.active : null}
                onClick={() => setActiveBtn("banned")}
              >
                Banned (1)
              </button>
              <button
                className={activeBtn === "active" ? classes.active : null}
                onClick={() => setActiveBtn("active")}
              >
                Active (7)
              </button>
            </div>
          </div>
          <div className={classes.withdraw_table_div}>
            <div
              className={`d-flex justify-content-between ${classes.user_top}`}
            >
              <h4>Showing 20 most recent</h4>
              <button onClick={() => setFilterOpen(true)}>Add user</button>
            </div>
            <Paper
              // className={table_classes.root}
              style={{ marginBottom: "3rem" }}
            >
              <TableContainer
              // className={table_classes.container}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableBody>
                    {cardDatas &&
                      cardDatas
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((item, indx) => (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={indx}
                          >
                            {columns.map((cl_itm, cl_indx) => (
                              <Fragment key={cl_indx}>
                                {activeBtn === "all" ? (
                                  <TableCell>
                                    <div className={classes.table_row}>
                                      <span
                                        className={
                                          cl_itm === "username"
                                            ? classes.username
                                            : null
                                        }
                                        onClick={() => {
                                          cl_itm === "username" &&
                                            router.push("/username");
                                        }}
                                      >
                                        {item[cl_itm]}
                                      </span>
                                      {cl_itm === "action" && (
                                        <IconButton onClick={dothandleClick}>
                                          <MoreVertIcon />
                                        </IconButton>
                                      )}

                                      {cl_itm === "username" &&
                                        item.status === "banned" && (
                                          <p className={classes.banned_text}>
                                            Banned until 6 days due to sharing
                                            contact details
                                          </p>
                                        )}
                                    </div>
                                  </TableCell>
                                ) : (
                                  activeBtn === item.status && (
                                    <TableCell>
                                      <div className={classes.table_row}>
                                        <span
                                          className={
                                            cl_itm === "username"
                                              ? classes.username
                                              : null
                                          }
                                          onClick={() => {
                                            cl_itm === "username" &&
                                              router.push("/username");
                                          }}
                                        >
                                          {item[cl_itm]}
                                        </span>
                                        {cl_itm === "action" && (
                                          <IconButton>
                                            <MoreVertIcon />
                                          </IconButton>
                                        )}

                                        {cl_itm === "username" &&
                                          item.status === "banned" && (
                                            <p className={classes.banned_text}>
                                              Banned until 6 days due to sharing
                                              contact details
                                            </p>
                                          )}
                                      </div>
                                    </TableCell>
                                  )
                                )}
                              </Fragment>
                            ))}
                          </TableRow>
                        ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 40]}
                component="div"
                count={cardDatas.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
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
          ></Menu>
          <BootstrapDialog
            onClose={() => setFilterOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={filterOpen}
          >
            <DialogContent className={classes.dialog_body}>
              <IconButton
                className={classes.close_icon_button}
                aria-label="delete"
                onClick={() => setFilterOpen(false)}
              >
                <CloseIcon className={classes.close_icon} />
              </IconButton>
              <div className={classes.filter_card_body}>
                <h5>Add User</h5>

                <div>
                  <Form>
                    <div className={classes.input_grid}>
                      <Form.Control type="text" placeholder="Usersname" />
                      <Form.Control type="email" placeholder="Email Address" />
                    </div>
                    <div className={classes.input_grid}>
                      <Form.Control type="text" placeholder="Phone Number" />
                      <Form.Control type="text" placeholder="City" />
                    </div>
                    <h6>More Details</h6>
                    <div className={classes.input_grid}>
                      <Form.Control type="password" placeholder="Password" />
                      <Form.Control
                        type="password"
                        placeholder="Repeat Password"
                      />
                    </div>
                    <div className={classes.input_grid}>
                      <Form.Select>
                        <option>Select Role</option>
                        <option value="1">User</option>
                        <option value="2">Modarator</option>
                        <option value="3">Admin</option>
                      </Form.Select>
                    </div>
                  </Form>
                </div>

                <div className="d-flex justify-content-center">
                  <button
                    className={classes.filter_btn}
                    onClick={() => setFilterOpen(false)}
                  >
                    save
                  </button>
                </div>
              </div>
            </DialogContent>
          </BootstrapDialog>
          <Menu
            id="basic-menu"
            anchorEl={dotAnchorEl}
            open={dotOpen}
            onClose={dothandleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                mt: 1.5,
                px: 4,
                py: 2,
                borderRadius: "11px",
              },
            }}
          >
            <MenuItem
              className={classes.dot_item}
              onClick={() => {
                dothandleClose();
                setRoleOpen(true);
              }}
            >
              Edit Role
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.dot_item}>
              Edit
            </MenuItem>
            <MenuItem
              className={classes.dot_item}
              onClick={() => {
                dothandleClose();
                setbanOpen(true);
              }}
            >
              Ban
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.dot_item}>
              Delete
            </MenuItem>
          </Menu>
          <BootstrapDialog
            onClose={() => setRoleOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={roleOpen}
          >
            <DialogContent className={classes.dialog_body}>
              <IconButton
                className={classes.close_icon_button}
                aria-label="delete"
                onClick={() => setRoleOpen(false)}
              >
                <CloseIcon className={classes.close_icon} />
              </IconButton>
              <div className={classes.filter_card_body}>
                <div>
                  <h5>Edit Role - username</h5>
                </div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>User</MenuItem>
                    <MenuItem value={20}>Moderator</MenuItem>
                    <MenuItem value={30}>Admin</MenuItem>
                  </Select>
                </FormControl>
                <div className={classes.button_div}>
                  <button
                    className={classes.cancel_btn}
                    onClick={() => setRoleOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={classes.submit_btn}
                    onClick={() => setRoleOpen(false)}
                  >
                    Submit Offer
                  </button>
                </div>
              </div>
            </DialogContent>
          </BootstrapDialog>{" "}
          <BootstrapDialog
            onClose={() => setbanOpen(false)}
            aria-labelledby="customized-dialog-title"
            open={banOpen}
          >
            <DialogContent className={classes.dialog_body}>
              <IconButton
                className={classes.close_icon_button}
                aria-label="delete"
                onClick={() => setbanOpen(false)}
              >
                <CloseIcon className={classes.close_icon} />
              </IconButton>
              <div className={classes.filter_card_body}>
                <div>
                  <h5>Ban - Username</h5>
                </div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Duration
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Indefinite</MenuItem>
                    <MenuItem value={20}>1 week</MenuItem>
                    <MenuItem value={30}>2 weeks</MenuItem>
                    <MenuItem value={40}>1 month</MenuItem>
                    <MenuItem value={50}>3 months</MenuItem>
                    <MenuItem value={60}>6 months</MenuItem>
                    <MenuItem value={70}>Datepicker</MenuItem>
                  </Select>
                </FormControl>
                <Form.Control
                  className="mt-3"
                  as="textarea"
                  rows={3}
                  placeholder="Reason..."
                />

                <div className={classes.button_div}>
                  <button
                    className={classes.cancel_btn}
                    onClick={() => setbanOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className={classes.submit_btn}
                    onClick={() => setbanOpen(false)}
                  >
                    Submit Offer
                  </button>
                </div>
              </div>
            </DialogContent>
          </BootstrapDialog>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Fixes;

Fixes.getLayout = (page) => <>{page} </>;
