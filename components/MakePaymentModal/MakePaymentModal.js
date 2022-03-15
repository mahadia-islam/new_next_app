import { Modal } from "react-bootstrap";
import classes from "./MakePaymentModal.module.css";
import { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { styled, makeStyles } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const StyledStepLabel = styled(StepLabel)({
  "& .MuiStepLabel-label.Mui-active": {
    color: "#f27415",
    marginTop: "0.5rem",
  },
  "& .MuiStepLabel-label.Mui-completed": {
    color: "#1cc88a",
    marginTop: "0.5rem",
  },
  "& .MuiStepLabel-label.Mui-disabled": {
    marginTop: "0.5rem",
  },
});

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#eaeaf0",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#eaeaf0",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <CheckCircleOutlineIcon className={classes.completed_check} />
      ) : (
        <div
          className={active ? classes.active_icon_circle : classes.icon_circle}
        />
      )}
    </QontoStepIconRoot>
  );
}

const steps = ["Make Payment", "Place Order", "Success"];

function MyVerticallyCenteredModal(props) {
  const [activeState, setActiveState] = useState(0);
  const [orderObject, setOrderObject] = useState({});
  const router = useRouter();

  const handleChange = (value) => {
    // console.log(value);
  };
  const handleInputChange = (e) => {
    if (e.target.name === "file") {
      setOrderObject({
        ...orderObject,
        file: e.target.files[0],
      });
    } else {
      let newObj = { ...orderObject };
      newObj[e.target.name] = e.target.value;
      setOrderObject(newObj);
    }
  };

  console.log(orderObject);

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className={classes.modal_body}>
        <div>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            className={classes.close_btn}
            onClick={props.onHide}
          >
            <CloseIcon className={classes.close_icon} />
          </IconButton>
          <div>
            <h3 className={classes.modal_title}>
              {activeState === 0
                ? "Make Payment"
                : activeState === 1
                ? "Place Order"
                : null}
            </h3>
          </div>
          <div>
            {activeState < 2 && (
              <Stepper
                alternativeLabel
                activeStep={activeState}
                connector={<QontoConnector />}
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StyledStepLabel StepIconComponent={QontoStepIcon}>
                      {label}
                    </StyledStepLabel>
                  </Step>
                ))}
              </Stepper>
            )}
          </div>
          <div className={classes.advice}>
            <p>
              {activeState === 0
                ? "Please make a bank transfer to the account below"
                : activeState === 1
                ? "Please fill the form below so we can process your order"
                : null}
            </p>
          </div>
          {activeState === 0 && (
            <div>
              <div className={classes.summary_key_value_pair}>
                <p>Amount</p>
                <p>&#x20A6;5,650</p>
              </div>
              <div className={classes.summary_key_value_pair}>
                <p>Account Name</p>
                <p>Fixlancer Marketplace</p>
              </div>
              <div className={classes.summary_key_value_pair}>
                <p>Account Number</p>
                <p>5647385648</p>
              </div>
              <div className={classes.summary_key_value_pair}>
                <p>Bank Name</p>
                <p>United Bank of Africa</p>
              </div>
            </div>
          )}

          <div>
            {activeState === 1 && (
              <div className={classes.input_div}>
                <input
                  type="number"
                  placeholder="Amount Sent"
                  name="amount"
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Account Name"
                  name="account_name"
                  onChange={handleInputChange}
                />
                {orderObject.file ? (
                  <div>{orderObject.file && orderObject.file.name}</div>
                ) : (
                  <label htmlFor="file_input">
                    <div className={classes.file_input_btn}>+ Attach File</div>
                    <span>No files selected</span>
                    <input
                      type="file"
                      id="file_input"
                      placeholder="  File"
                      name="file"
                      onChange={handleInputChange}
                    />
                  </label>
                )}
              </div>
            )}
          </div>

          {activeState === 2 && (
            <div>
              <div className={classes.thankyou}>
                <CheckIcon className={classes.thankyou_icon} />
                <h5>Thank you for placing an Order</h5>
                <p>
                  Your order is currently pending until your payment is
                  confirmed. You will be notified as soon as we are done
                  reviewing your payment
                </p>
              </div>
            </div>
          )}

          <div className={classes.continue_btn_div}>
            {activeState === 2 ? (
              <button
                className={classes.view_btn}
                onClick={() => router.push("/order/manage-order")}
              >
                View Order
              </button>
            ) : (
              <button
                onClick={() => {
                  activeState <= 1 && setActiveState(activeState + 1);
                }}
                className={classes.continue_btn}
              >
                {activeState === 0
                  ? "Continue"
                  : activeState === 1
                  ? "Place Order"
                  : null}
              </button>
            )}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const MakePaymentModal = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <button onClick={() => setModalShow(true)} className={classes.pay_now}>
        Pay Now (Bank Transfer)
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default MakePaymentModal;
