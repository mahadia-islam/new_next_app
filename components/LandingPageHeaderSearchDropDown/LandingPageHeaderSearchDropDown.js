import { useContext, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import classes from "./LandingPageHeaderSearchDropDown.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FixLancerContext from "../FixLancerContext/FixLancerContext";

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const [display, setDisplay] = useState("none");
  const { SetSearchInputValue } = useContext(FixLancerContext);

  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      setDisplay("flex");

      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      setDisplay("none");
    });
  }, [onInputChange]);

  const handleSubmit = (e) => {
    e && e.preventDefault();
    SetSearchInputValue(inputRef.current.value);
  };
  return (
    <>
      <div className={`${classes.search_input}`}>
        <SearchIcon className={classes.searchIcon} onClick={handleSubmit} />
        <Form onSubmit={handleSubmit}>
          <input
            type="search"
            ref={inputRef}
            onChange={onInputChange}
            placeholder="Try ‘logo’"
          />
        </Form>
      </div>
      <ul className={`${classes.results} ${classes.list_group} d-${display}`}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option;
                handleSubmit();
              }}
              className="list-group-item list-group-item-action"
            >
              {option}
            </button>
          );
        })}
      </ul>
    </>
  );
};

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
  defaultOptions.push(`option ${i}`);
  defaultOptions.push(`suggesstion ${i}`);
  defaultOptions.push(`advice ${i}`);
}

const LandingPageHeaderSearchDropDown = ({ SetSearchInputValue }) => {
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.includes(event.target.value))
    );
  };
  return (
    <div>
      <SearchbarDropdown
        options={options}
        onInputChange={onInputChange}
        SetSearchInputValue={SetSearchInputValue}
      />
    </div>
  );
};

export default LandingPageHeaderSearchDropDown;
