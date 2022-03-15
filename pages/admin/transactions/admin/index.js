import { Col, Container, Row } from "react-bootstrap";
import DashBoardLayout from "../../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./admin.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import LoadMoreButton from "../../../../components/LoadMoreButton/LoadMoreButton";

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

const UserTransaction = () => {
  const [addSubOpen, setaddSubOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <DashBoardLayout appbar_title="Admin Transaction History">
      <section>
        <Container>
          <Row>
            <Col lg="11 mx-auto">
              <div className="d-flex justify-content-end my-5">
                <button
                  className={classes.export}
                  onClick={() => setaddSubOpen(true)}
                >
                  Export To PDF
                </button>
              </div>
              <div className={classes.trans_details}>
                <p>Fee commission for order with ID #1 (View Order)</p>
                <p>29 Jun 2021</p>
                <p>+₦150.00</p>
              </div>
              <div className={`${classes.trans_details} ${classes.debit}`}>
                <p>Fee commission for order with ID #2 (View Order)</p>
                <p>29 Jun 2021</p>
                <p>+₦150.00</p>
              </div>
              <div className={classes.trans_details}>
                <p>Fee commission for order with ID #3 (View Order)</p>
                <p>29 Jun 2021</p>
                <p>+₦150.00</p>
              </div>
            </Col>{" "}
            <div className="d-flex justify-content-center my-5">
              <LoadMoreButton />
            </div>
          </Row>
        </Container>
        <BootstrapDialog
          onClose={() => setaddSubOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={addSubOpen}
        >
          <DialogContent className={classes.dialog_body}>
            <IconButton
              className={classes.close_icon_button}
              aria-label="delete"
              onClick={() => setaddSubOpen(false)}
            >
              <CloseIcon className={classes.close_icon} />
            </IconButton>
            <div className={classes.filter_card_body}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Start date"
                    value={startDate}
                    minDate={new Date("2017-01-01")}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DesktopDatePicker
                    label="End date"
                    value={endDate}
                    minDate={new Date("2017-01-01")}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
              <div
                className={`d-flex justify-content-center ${classes.button_div}`}
              >
                <button
                  className={classes.submit_btn}
                  onClick={() => setaddSubOpen(false)}
                >
                  Generate Report
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </section>
    </DashBoardLayout>
  );
};

export default UserTransaction;

UserTransaction.getLayout = (page) => <>{page} </>;
