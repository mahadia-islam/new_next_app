import { Col, Container, Row } from "react-bootstrap";
import LandingPageHeader from "../../../components/LandingPageHeader/LandingPageHeader";
import classes from "./manage_sales.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Fragment, useState } from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: "75vh",
  },
  tableCell: {
    fontWeight: "700",
    textTransform: "capitalize",
  },
  nameCol: {
    textTransform: "capitalize",
  },
});

const ManageSales = () => {
  const table_classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [activeBtn, setActiveBtn] = useState("ongoing");
  const router = useRouter();

  let data = [
    {
      img: "/images/author.jpg",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "ongoing",
    },
    {
      img: "/images/author1.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "ongoing",
    },
    {
      img: "/images/author2.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "ongoing",
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "delivered",
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "delivered",
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "completed",
      rating: 5,
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "completed",
      rating: 4.9,
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "cancelled",
    },
    {
      img: "/images/author3.png",
      Seller: "Geofrey Fernando",
      Fix: "I can do your logo design work",
      "Due In": "23/5/2020",
      Total: "3,500",
      Status: "cancelled",
    },
  ];

  const columns = ["Seller", "Fix", "Due In", "Total", "Status"];

  const handleClose = () => setShowItem("");
  const editAndDeleteHandler = (item, showItem) => {
    setShowItem(showItem);
    setEditAndDeleteItem(item);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <section className={classes.manage_order}>
      <Container>
        <Row>
          <Col lg="11 mx-auto">
            <div>
              <h1 className={classes.manage_order_title}>Manage Sales</h1>
            </div>
            <div className={classes.buttons_div}>
              <button
                className={activeBtn === "ongoing" ? classes.activeBtn : null}
                onClick={() => setActiveBtn("ongoing")}
              >
                Ongoing
              </button>
              <button
                className={activeBtn === "delivered" ? classes.activeBtn : null}
                onClick={() => setActiveBtn("delivered")}
              >
                Delivered
              </button>
              <button
                className={activeBtn === "completed" ? classes.activeBtn : null}
                onClick={() => setActiveBtn("completed")}
              >
                Completed
              </button>
              <button
                className={activeBtn === "cancelled" ? classes.activeBtn : null}
                onClick={() => setActiveBtn("cancelled")}
              >
                Cancelled
              </button>
            </div>
            <div
              className={`${
                data !== undefined ? (data.length <= 0 ? "loading" : "") : ""
              }`}
            >
              {data === undefined ? (
                <div>no data found</div>
              ) : data.length <= 0 ? (
                <div>loading.....</div>
              ) : (
                <Paper
                  // className={table_classes.root}
                  style={{ marginTop: "3rem" }}
                >
                  <TableContainer
                  // className={table_classes.container}
                  >
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          {columns.map((item, indx) => (
                            <TableCell
                              key={indx}
                              className={classes.table_title}
                            >
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
                            .map(
                              (item, indx) =>
                                item.Status === activeBtn && (
                                  <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    key={indx}
                                    onClick={() => router.push("/order/chat")}
                                  >
                                    {columns.map((cl_itm, cl_indx) => (
                                      <Fragment key={cl_indx}>
                                        <TableCell>
                                          <div className={classes.table_row}>
                                            {cl_itm === "Seller" && (
                                              <div className={classes.user_img}>
                                                <Image
                                                  src={item["img"]}
                                                  width={30}
                                                  height={30}
                                                  alt="user_image"
                                                />
                                              </div>
                                            )}

                                            <span
                                              className={
                                                cl_itm === "Total"
                                                  ? classes.total
                                                  : cl_itm === "Status" &&
                                                    activeBtn === "ongoing"
                                                  ? classes.ongoing
                                                  : cl_itm === "Status" &&
                                                    activeBtn === "delivered"
                                                  ? classes.delivered
                                                  : cl_itm === "Status" &&
                                                    activeBtn === "completed"
                                                  ? classes.completed
                                                  : cl_itm === "Status" &&
                                                    activeBtn === "cancelled"
                                                  ? classes.cancelled
                                                  : null
                                              }
                                            >
                                              {cl_itm === "Status" &&
                                              activeBtn === "completed" ? (
                                                <StarIcon
                                                  className={classes.star_icon}
                                                />
                                              ) : null}
                                              {cl_itm === "Total" && (
                                                <>&#x20A6;</>
                                              )}
                                              {cl_itm === "Status" &&
                                              activeBtn === "completed"
                                                ? item["rating"]
                                                : item[cl_itm]}
                                            </span>
                                          </div>
                                        </TableCell>
                                      </Fragment>
                                    ))}
                                  </TableRow>
                                )
                            )}
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
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ManageSales;

ManageSales.getLayout = (page) => (
  <>
    <LandingPageHeader /> {page}
  </>
);
