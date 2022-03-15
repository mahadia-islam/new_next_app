import { Fragment, useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashBoardLayout from "../../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./userratings.module.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LoadMoreButton from "../../../../components/LoadMoreButton/LoadMoreButton";

const columns = ["username", "rating", "feedback", "date", ""];

const UserRatings = () => {
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
      username: "orbit",
      email: "demo@gmail.com",
      rating: 5,
      feedback: "Wow,Grate job. I’ll hire you again",
      date: "17/09/2021",

      action: "",
    },
    {
      username: "bunny2468",
      email: "demo@gmail.com",
      rating: 5,
      feedback: "Wow,Grate job. I’ll hire you again",
      date: "17/09/2021",

      action: "",
    },
    {
      username: "nollyeterprice",
      email: "demo@gmail.com",
      rating: 5,
      feedback: "Wow,Grate job. I’ll hire you again",
      date: "17/09/2021",

      action: "",
    },
    {
      username: "bent",
      email: "demo@gmail.com",
      rating: 5,
      feedback: "Wow,Grate job. I’ll hire you again",
      date: "17/09/2021",

      action: "",
    },
    {
      username: "john",
      email: "demo@gmail.com",
      rating: 5,
      feedback: "Wow,Grate job. I’ll hire you again",
      date: "17/09/2021",

      action: "",
    },
  ];

  return (
    <DashBoardLayout appbar_title="Ratings (username)">
      <section>
        <Container>
          <Row>
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
                            {item === "no_of_ratings" ? "No. of Ratings" : item}
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
                                        <div className="d-flex align-items-center">
                                          <span
                                            className={
                                              cl_itm === "rating"
                                                ? classes.golden
                                                : null
                                            }
                                          >
                                            {item[cl_itm]}
                                          </span>
                                          {cl_itm === "rating" ? (
                                            <StarIcon
                                              className={classes.star_icon}
                                            />
                                          ) : null}
                                        </div>
                                      ) : (
                                        <div>
                                          <button className={classes.delete}>
                                            Delete
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

export default UserRatings;

UserRatings.getLayout = (page) => <>{page} </>;
