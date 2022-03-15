import { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "@mui/material/Pagination";
import CommonCard from "../Card/Card";
import classes from "./FilterdFix.module.css";
import Button from "@mui/material/Button";
import TuneIcon from "@mui/icons-material/Tune";
import FixLancerContext from "../FixLancerContext/FixLancerContext";
import { categories } from "../../dummy_data/dummy_fixes";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

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

const FilterdFix = () => {
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const { searchInputValue } = useContext(FixLancerContext);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <section>
      <Container>
        {searchInputValue && (
          <Row>
            <div className={classes.searchResult}>
              <div>
                <h3>Showing 14,000 results for “{searchInputValue}”</h3>
              </div>
              <div>
                <Button
                  variant="outlined"
                  endIcon={<TuneIcon />}
                  onClick={() => setFilterOpen(true)}
                  className={classes.filter}
                >
                  Filter
                </Button>
              </div>
            </div>
          </Row>
        )}
        <Row>
          {categories.map((item, indx) => (
            <CommonCard key={indx} fx={item} col={3} />
          ))}
          <div className={classes.pagination_div}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              page={page}
              onChange={handleChange}
            />
          </div>
        </Row>{" "}
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
              <h3>Filter Results</h3>
              <h5>Price</h5>
              <div className="d-flex justify-content-between">
                <Slider
                  size="small"
                  defaultValue={30000}
                  aria-label="Small"
                  valueLabelDisplay="on"
                  min={1000}
                  max={100000}
                />
                <p className={classes.maximum}>Maximum</p>
              </div>
              <h5>Category</h5>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Graphic & Design"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: 12 },
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Logo Design"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: 12 },
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Mobile Applications"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: 12 },
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="iOS Applications"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: 12 },
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Android Application"
                  sx={{
                    "& .MuiFormControlLabel-label": { fontSize: 12 },
                    "& .MuiSvgIcon-root": { fontSize: 20 },
                  }}
                />
              </FormGroup>

              <div className="d-flex justify-content-center">
                <button
                  className={classes.filter_btn}
                  onClick={() => setFilterOpen(false)}
                >
                  filter
                </button>
              </div>
            </div>
          </DialogContent>
        </BootstrapDialog>
      </Container>
    </section>
  );
};

export default FilterdFix;
