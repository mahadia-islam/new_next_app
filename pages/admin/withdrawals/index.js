import { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./withdrawals.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

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

const Withdrawals = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
      state: "completed",
    },
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "cancelled",
    },
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "pending",
    },
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "declined",
    },
    {
      username: "beni",
      amount: 500,
      bank: "Access Bank",
      "acc. Name": "Tj Edikon",
      "acc. No.": "004589",
      "requested on": "8 Aug 2021",
      "acted on": "8 Aug 2021",
      state: "completed",
    },
  ];

  return (
    <DashBoardLayout appbar_title="Withdrawals">
      <section>
        <Container>
          <Row>
            <div className={classes.button_div_container}>
              <div className={classes.button_div}>
                <button
                  className={activeBtn === "all" ? classes.active : null}
                  onClick={() => setActiveBtn("all")}
                >
                  All
                </button>
                <button
                  className={activeBtn === "completed" ? classes.active : null}
                  onClick={() => setActiveBtn("completed")}
                >
                  completed
                </button>
                <button
                  className={activeBtn === "declined" ? classes.active : null}
                  onClick={() => setActiveBtn("declined")}
                >
                  declined
                </button>
                <button
                  className={activeBtn === "pending" ? classes.active : null}
                  onClick={() => setActiveBtn("pending")}
                >
                  pending
                </button>
                <button
                  className={activeBtn === "cancelled" ? classes.active : null}
                  onClick={() => setActiveBtn("cancelled")}
                >
                  cancelled
                </button>
              </div>
            </div>
            <div className={classes.withdraw_table_div}>
              <h4>Showing 20 most recent</h4>
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
                                  {activeBtn === "all" ? (
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
                                                item["state"] !== "pending"
                                              }
                                              className={
                                                item["state"] === "pending"
                                                  ? classes.approve_btn
                                                  : classes.disable_approve
                                              }
                                            >
                                              Approve
                                            </button>
                                            <button
                                              className={
                                                item["state"] === "pending"
                                                  ? classes.decline_btn
                                                  : classes.disable_decline
                                              }
                                              disabled={
                                                item["state"] !== "pending"
                                              }
                                            >
                                              Decline
                                            </button>
                                          </div>
                                        )}
                                      </div>
                                    </TableCell>
                                  ) : (
                                    activeBtn === item.state && (
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
                                                  item["state"] !== "pending"
                                                }
                                                className={
                                                  item["state"] === "pending"
                                                    ? classes.approve_btn
                                                    : classes.disable_approve
                                                }
                                              >
                                                Approve
                                              </button>
                                              <button
                                                className={
                                                  item["state"] === "pending"
                                                    ? classes.decline_btn
                                                    : classes.disable_decline
                                                }
                                                disabled={
                                                  item["state"] !== "pending"
                                                }
                                              >
                                                Decline
                                              </button>
                                            </div>
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
                  count={data.length}
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
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Withdrawals;

Withdrawals.getLayout = (page) => <>{page} </>;
