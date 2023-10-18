import React, { useState } from "react";
import PropTypes from "prop-types";
import { MdKeyboardArrowDown, MdOutlineTune } from "react-icons/md";
import classes from "./TopNavbar.module.css";

const TopNavbar = (props) => {
  const { groupValue, orderValue, handleSetGroupValue, handleSetOrderValue } =
    props;
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  const handleSelectChange = (event) => {
    if (event.target.id === "grouping_dropdown") {
      handleSetGroupValue(event.target.value);
    } else if (event.target.id === "ordering_dropdown") {
      handleSetOrderValue(event.target.value);
    }
  };

  return (
    <div className={classes.TopNavbarContainer}>
      <div className={classes.DropDownWrap}>
        <button className={`${classes.DisplayDropdown} ${showDropDown && classes.Active}`} onClick={toggleDropDown}>
          <MdOutlineTune fontSize="1.125rem" />
          Display
          <MdKeyboardArrowDown
            className={`${classes.Icon} ${showDropDown && classes.Active}`}
            fontSize="1.125rem"
          />
        </button>
        <div
          className={`${classes.DropDownMenu} ${
            showDropDown && classes.Active
          }`}
        >
          <div className={classes.MenuItem}>
            <span className={classes.MenuItemLabel}>Grouping</span>
            <span className={classes.GroupingDropdown}>
              <select
                name="grouping_dropdown"
                id="grouping_dropdown"
                onChange={handleSelectChange}
                value={groupValue}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </span>
          </div>
          <div className={classes.MenuItem}>
            <span className={classes.MenuItemLabel}>Ordering</span>
            <span className={classes.GroupingDropdown}>
              <select
                name="ordering_dropdown"
                id="ordering_dropdown"
                onChange={handleSelectChange}
                value={orderValue}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

TopNavbar.propTypes = {
  groupValue: PropTypes.string,
  orderValue: PropTypes.string,
  handleSetGroupValue: PropTypes.func,
  handleSetOrderValue: PropTypes.func,
};

export default TopNavbar;
