import { Container } from "react-bootstrap";
import DashBoardLayout from "../../components/DashBoardLayout/DashBoardLayout";
import classes from "./admin.module.scss";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { Fragment, useState } from "react";

const Admin = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const columns = [
    "username",
    "amount",
    "bank",
    "acc. Name",
    "acc. No.",
    "requested on",
    "acted on",
    "state",
    "action",
  ];
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  let data = [
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "approved",
    },
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "cacelled",
    },
  ];

  return (
    <DashBoardLayout appbar_title="Dashboard">
      <section>
        <Container>
          <div className={classes.summery_grid}>
            <div className={classes.grid_card}>
              <h5>Total Fixes</h5>
              <h3>4723</h3>
            </div>
            <div className={classes.grid_card}>
              <h5>Published</h5>
              <h3>4523</h3>
            </div>
            <div className={classes.grid_card}>
              <h5>Draft</h5>
              <h3>200</h3>
            </div>
            <div className={classes.grid_card}>
              <h5>Pending</h5>
              <h3>20</h3>
            </div>
          </div>
          <div>
            <div className={classes.card_top_header}>
              <h4>Job Request</h4>
              <button>see all</button>
            </div>
          </div>
          <div className={classes.job_card_grid}>
            <div className={classes.job_card}>
              <div className={classes.job_card_top}>
                <div className={classes.top_info}>
                  <span>Sajawal</span>
                  <p>I need a logo designer...</p>
                  <span>₦14,000</span>
                </div>
                <div
                  style={{ backgroundImage: `url(/images/placeholder.png)` }}
                  className={classes.job_card_img}
                ></div>
              </div>
              <div className={classes.card_details}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...
                </p>
              </div>
              <div className={classes.card_bottom_grid}>
                <div className={classes.card_button_grid}>
                  <div className={classes.button_div}>
                    <button className={classes.approve}>Approve</button>
                    <button>Edit</button>
                  </div>
                  <div className={classes.button_div}>
                    <button className={classes.delete}>Decline</button>
                    <button className={classes.delete}>Delete</button>
                  </div>
                </div>
                <div className={classes.offer_info}>
                  <p>
                    <WatchLaterIcon className={classes.offer_info_icon} /> 1 Day
                    delivery
                  </p>
                  <p>
                    <BackupTableIcon className={classes.offer_info_icon} /> 2
                    Offers
                  </p>
                  <span>Pending</span>
                </div>
              </div>
            </div>
            <div className={classes.job_card}>
              <div className={classes.job_card_top}>
                <div className={classes.top_info}>
                  <span>Sajawal</span>
                  <p>I need a logo designer...</p>
                  <span>₦14,000</span>
                </div>
                <div
                  style={{ backgroundImage: `url(/images/placeholder.png)` }}
                  className={classes.job_card_img}
                ></div>
              </div>
              <div className={classes.card_details}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...
                </p>
              </div>
              <div className={classes.card_bottom_grid}>
                <div className={classes.card_button_grid}>
                  <div className={classes.button_div}>
                    <button className={classes.approve}>Approve</button>
                    <button>Edit</button>
                  </div>
                  <div className={classes.button_div}>
                    <button className={classes.delete}>Decline</button>
                    <button className={classes.delete}>Delete</button>
                  </div>
                </div>
                <div className={classes.offer_info}>
                  <p>
                    <WatchLaterIcon className={classes.offer_info_icon} /> 1 Day
                    delivery
                  </p>
                  <p>
                    <BackupTableIcon className={classes.offer_info_icon} /> 2
                    Offers
                  </p>
                  <span>Pending</span>
                </div>
              </div>
            </div>
            <div className={classes.job_card}>
              <div className={classes.job_card_top}>
                <div className={classes.top_info}>
                  <span>Sajawal</span>
                  <p>I need a logo designer...</p>
                  <span>₦14,000</span>
                </div>
                <div
                  style={{ backgroundImage: `url(/images/placeholder.png)` }}
                  className={classes.job_card_img}
                ></div>
              </div>
              <div className={classes.card_details}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam...
                </p>
              </div>
              <div className={classes.card_bottom_grid}>
                <div className={classes.card_button_grid}>
                  <div className={classes.button_div}>
                    <button className={classes.approve}>Approve</button>
                    <button>Edit</button>
                  </div>
                  <div className={classes.button_div}>
                    <button className={classes.delete}>Decline</button>
                    <button className={classes.delete}>Delete</button>
                  </div>
                </div>
                <div className={classes.offer_info}>
                  <p>
                    <WatchLaterIcon className={classes.offer_info_icon} /> 1 Day
                    delivery
                  </p>
                  <p>
                    <BackupTableIcon className={classes.offer_info_icon} /> 2
                    Offers
                  </p>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.card_top_header}>
              <h4>Withdrawals</h4>
              <button>see all</button>
            </div>
          </div>
          <div className={classes.withdraw_table_div}>
            <Paper
              // className={table_classes.root}
              style={{ marginBottom: "3rem" }}
            >
              <TableContainer
              // className={table_classes.container}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((item, indx) => (
                        <TableCell key={indx} className={classes.table_title}>
                          {item === "Status" && activeBtn === "completed"
                            ? "Ratings"
                            : item}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data &&
                      data
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
                                <TableCell>
                                  <div className={classes.table_row}>
                                    {cl_itm !== "action" ? (
                                      <span>{item[cl_itm]}</span>
                                    ) : (
                                      <div
                                        className={
                                          classes.arrove_decline_btn_div
                                        }
                                      >
                                        <button
                                          disabled={
                                            item["state"] === "approved"
                                          }
                                          className={
                                            item["state"] !== "approved"
                                              ? classes.approve_btn
                                              : classes.disable_approve
                                          }
                                        >
                                          Approve
                                        </button>
                                        <button
                                          className={
                                            item["state"] !== "approved"
                                              ? classes.decline_btn
                                              : classes.disable_decline
                                          }
                                          disabled={
                                            item["state"] === "approved"
                                          }
                                        >
                                          Decline
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </TableCell>
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
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>

          <div className={classes.manage_card_grid}>
            <div className={classes.mn_job_card}>
              <div>
                <h4>Job Request</h4>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Published</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Draft</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Pending</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Open</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Closed</p>
                <p>20</p>
              </div>
            </div>
            <div className={classes.mn_order_card}>
              <div>
                <h4>Orders</h4>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Completed</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Ongoing</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Delivered</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Cancelled</p>
                <p>20</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Dispute</p>
                <p>200</p>
              </div>
            </div>
            <div className={classes.mn_user_card}>
              <div>
                <h4>Users</h4>
              </div>
              <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Admin</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Moderators</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Users</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Sellers</p>
                <p>200</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Online</p>
                <p>200</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Admin;

Admin.getLayout = (page) => <>{page} </>;
