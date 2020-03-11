import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SortDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        onClick={props.dropDownHandler}
      >
        <MenuItem value={10}>Relevance</MenuItem>
        <MenuItem value={20}>Date</MenuItem>
      </Select>
    </div>
  );
};

export default SortDropdown;
