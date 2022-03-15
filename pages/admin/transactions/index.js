import { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./transactions.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
import LoadMoreButton from "../../../components/LoadMoreButton/LoadMoreButton";

const columns = ["username", "email", "transactions", ""];

const Transactions = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const router = useRouter();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let data = [
    {
      username: "orbit",
      email: "demo@gmail.com",
      transactions: 2,
      action: "",
    },
    {
      username: "bunny2468",
      email: "demo@gmail.com",
      transactions: 15,
      action: "",
    },
    {
      username: "nollyeterprice",
      email: "demo@gmail.com",
      transactions: 3,
      action: "",
    },
    {
      username: "bent",
      email: "demo@gmail.com",
      transactions: 5,
      action: "",
    },
    {
      username: "john",
      email: "demo@gmail.com",
      transactions: 0,
      action: "",
    },
  ];

  return (
    <DashBoardLayout appbar_title="Transactions (Users)">
      <section>
        <Container>
          <Row>
            <div className={classes.withdraw_table_div}>
              <div className="d-flex justify-content-end">
                <button
                  className={classes.view_admin}
                  onClick={() => router.push("/admin/transactions/admin")}
                >
                  View Admin Transaction History
                </button>
              </div>
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
                            {item}
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
                                      {cl_itm !== "" ? (
                                        <>
                                          <span>{item[cl_itm]}</span>
                                          <span>{item["ratings_no"]}</span>
                                        </>
                                      ) : (
                                        <div>
                                          <button
                                            className={classes.view}
                                            onClick={() =>
                                              router.push(
                                                "/admin/transactions/username"
                                              )
                                            }
                                          >
                                            view
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
            <div className="d-flex justify-content-center my-5">
              <LoadMoreButton />
            </div>
          </Row>
        </Container>
      </section>
    </DashBoardLayout>
  );
};

export default Transactions;

Transactions.getLayout = (page) => <>{page} </>;
