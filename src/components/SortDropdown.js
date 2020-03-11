import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SortDropdown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.sortState ? "Sort by Date" : "Sort By Relevance"}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Sort by: </DropdownItem>
        <DropdownItem onClick={props.dropDownHandler}>Relevance</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={props.dropDownHandler}>Date</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortDropdown;
