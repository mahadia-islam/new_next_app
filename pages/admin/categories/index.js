import { Container, Form, Row } from "react-bootstrap";
import DashBoardLayout from "../../../components/DashBoardLayout/DashBoardLayout";
import classes from "./categories.module.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";

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

const Categories = () => {
  const [banOpen, setbanOpen] = useState(false);
  const [addSubOpen, setaddSubOpen] = useState(false);
  const [editSubOpen, seteditSubOpen] = useState(false);

  return (
    <DashBoardLayout appbar_title="Categories">
      <section className={classes.cat_section}>
        <Container>
          <Row>
            <div>
              <h3 className={classes.category_title}>Add new Category</h3>
            </div>
            <div className={classes.new_cat}>
              <div className={classes.form_grid}>
                <Form.Control type="text" placeholder="Name" />
                <Form.Control
                  type="text"
                  placeholder="Include prices seperated by comma"
                />
              </div>
              <div className={classes.form_grid}>
                <Form.Control
                  type="text"
                  placeholder="Include sub categories seperated by comma"
                />
                <div>
                  <button>Add new Category</button>
                </div>
              </div>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={classes.accor_grid}>
                    <p>Graphics & design</p>
                    <p>No. of Fixes: 5000</p>
                    <p>Date: 5 July 2021</p>
                    <div
                      className={classes.accor_end}
                      onClick={() => setbanOpen(true)}
                    >
                      <CreateOutlinedIcon className={classes.edit_icon} />
                      <span>edit</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ms-4">
                    <div className={classes.sub_cat}>
                      <h5>Subcategories</h5>
                      <button onClick={() => setaddSubOpen(true)}>
                        ADD NEW SUBCATEGORY
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">logo Design</p>
                      <div
                        className={classes.accor_end}
                        onClick={() => seteditSubOpen(true)}
                      >
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Banners/Flyers</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Brochure</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={classes.accor_grid}>
                    <p>Programming & Tech</p>
                    <p>No. of Fixes: 5000</p>
                    <p>Date: 5 July 2021</p>
                    <div
                      className={classes.accor_end}
                      onClick={() => setbanOpen(true)}
                    >
                      <CreateOutlinedIcon className={classes.edit_icon} />
                      <span>edit</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ms-4">
                    <div className={classes.sub_cat}>
                      <h5>Subcategories</h5>
                      <button onClick={() => setaddSubOpen(true)}>
                        ADD NEW SUBCATEGORY
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">logo Design</p>
                      <div
                        className={classes.accor_end}
                        onClick={() => seteditSubOpen(true)}
                      >
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Banners/Flyers</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Brochure</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className={classes.accor_grid}>
                    <p>Writing</p>
                    <p>No. of Fixes: 5000</p>
                    <p>Date: 5 July 2021</p>
                    <div
                      className={classes.accor_end}
                      onClick={() => setbanOpen(true)}
                    >
                      <CreateOutlinedIcon className={classes.edit_icon} />
                      <span>edit</span>
                    </div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="ms-4">
                    <div className={classes.sub_cat}>
                      <h5>Subcategories</h5>
                      <button onClick={() => setaddSubOpen(true)}>
                        ADD NEW SUBCATEGORY
                      </button>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">logo Design</p>
                      <div
                        className={classes.accor_end}
                        onClick={() => seteditSubOpen(true)}
                      >
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Banners/Flyers</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between my-4">
                      <p className="mb-0">Brochure</p>
                      <div className={classes.accor_end}>
                        <CreateOutlinedIcon className={classes.edit_icon} />
                        <span>edit</span>
                      </div>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Row>
        </Container>
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
                <h5>Edit - Graphics & Design</h5>
              </div>

              <Form.Control className="mt-3" placeholder="New Category Name" />

              <div className={classes.button_div}>
                <button
                  className={classes.cancel_btn}
                  onClick={() => setbanOpen(false)}
                >
                  Delete Category
                </button>
                <button
                  className={classes.submit_btn}
                  onClick={() => setbanOpen(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
        <BootstrapDialog
          onClose={() => seteditSubOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={editSubOpen}
        >
          <DialogContent className={classes.dialog_body}>
            <IconButton
              className={classes.close_icon_button}
              aria-label="delete"
              onClick={() => seteditSubOpen(false)}
            >
              <CloseIcon className={classes.close_icon} />
            </IconButton>
            <div className={classes.filter_card_body}>
              <div>
                <h5>Edit - Logo & Design</h5>
              </div>

              <Form.Control
                className="mt-3"
                placeholder="New Subcategory Name"
              />

              <div className={classes.button_div}>
                <button
                  className={classes.cancel_btn}
                  onClick={() => seteditSubOpen(false)}
                >
                  Delete Subcategory
                </button>
                <button
                  className={classes.submit_btn}
                  onClick={() => seteditSubOpen(false)}
                >
                  Save
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
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
              <div>
                <h5>Add New Subcategory - Graphics & Design</h5>
              </div>

              <Form.Control className="mt-3" placeholder="Subcategory Name" />

              <div
                className={`d-flex justify-content-center ${classes.button_div}`}
              >
                <button
                  className={classes.submit_btn}
                  onClick={() => setaddSubOpen(false)}
                >
                  Add
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </section>
    </DashBoardLayout>
  );
};

export default Categories;

Categories.getLayout = (page) => <>{page} </>;
