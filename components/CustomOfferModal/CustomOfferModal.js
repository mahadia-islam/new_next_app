import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import classes from "./CustomOfferModal.module.css";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";

const CustomOfferModal = ({ setCreateOffer }) => {
  const [modalShow, setModalShow] = useState(false);
  const fixes = [
    { value: "I will do logo design", label: "I will do logo design" },
    { value: "I will do ui/ux", label: "I will do ui/ux" },
    { value: "I will create a website", label: "I will create a website" },
  ];

  const deliveryDays = [
    {
      value: "24 hours",
      label: "24 hours",
    },
    {
      value: "2 days",
      label: "2 days",
    },
    {
      value: "3 days",
      label: "3 days",
    },
    {
      value: "4 days",
      label: "4 days",
    },
    {
      value: "5 days",
      label: "5 days",
    },
    {
      value: "7 days",
      label: "7 days",
    },
    {
      value: "10 days",
      label: "10 days",
    },
    {
      value: "15 days",
      label: "15 days",
    },
    {
      value: "30 days",
      label: "30 days",
    },
    {
      value: "45 days",
      label: "45 days",
    },
    {
      value: "60 days",
      label: "60 days",
    },
    {
      value: "90 days",
      label: "90 days",
    },
  ];

  const prices = [
    {
      value: "5",
      label: "5",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "15",
      label: "15",
    },
    {
      value: "20",
      label: "20",
    },
    {
      value: "25",
      label: "25",
    },
    {
      value: "30",
      label: "30",
    },
    {
      value: "35",
      label: "35",
    },
    {
      value: "40",
      label: "40",
    },
    {
      value: "45",
      label: "45",
    },
    {
      value: "50",
      label: "50",
    },
    {
      value: "55",
      label: "55",
    },
    {
      value: "60",
      label: "60",
    },
    {
      value: "65",
      label: "65",
    },
    {
      value: "70",
      label: "70",
    },
    {
      value: "75",
      label: "75",
    },
    {
      value: "80",
      label: "80",
    },
  ];

  const handleChange = (value) => {
    // console.log(value);
  };
  const handleInputChange = (new_value) => {
    // console.log(new_value);
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className={classes.modal_body}>
            <h4 className={classes.modal_title}>Custom Offer</h4>
            <div>
              <Select
                options={fixes}
                isSearchable={true}
                placeholder="Select your Fix"
                className={classes.select_dropdown}
              />
            </div>
            <div className={classes.delivery_price}>
              <div>
                <Select
                  options={deliveryDays}
                  className={classes.select_dropdown}
                  placeholder="Delivery Days"
                />
              </div>
              <div>
                <CreatableSelect
                  isClearable
                  onChange={handleChange}
                  options={prices}
                  onInputChange={handleInputChange}
                  placeholder="Price"
                  className={classes.select_dropdown}
                />
              </div>
            </div>
            <div className={classes.btn_grid}>
              <button
                className={classes.cancel}
                onClick={() => setModalShow(false)}
              >
                cancel
              </button>
              <button
                className={classes.submit}
                onClick={() => {
                  setModalShow(false);
                  setCreateOffer(true);
                }}
              >
                Submit Offer
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <button
        onClick={() => setModalShow(true)}
        className={classes.create_offer}
      >
        + create offer
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default CustomOfferModal;
