import React from "react";
import PropTypes from "prop-types";
import { MdAdd, MdMoreHoriz } from "react-icons/md";
import classes from "./CustomGroupHeader.module.css";

const CustomGroupHeader = (props) => {
  const { icon, title, count, showAdd = true, showMore = true } = props;
  return (
    <div className={classes.CustomGroupHeader}>
      <div className={classes.HeaderLeft}>
        {icon && icon}
        {title && <span className={classes.Title}>{title}</span>}
        {count && <span className={classes.Count}>{count}</span>}
      </div>
      <div className={classes.HeaderRight}>
        {showAdd && <MdAdd className={classes.Icon} fontSize="1.25rem"  />}
        {showMore && <MdMoreHoriz className={classes.Icon} fontSize="1.25rem" />}
      </div>
    </div>
  );
};

CustomGroupHeader.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  count: PropTypes.number,
  showAdd: PropTypes.bool,
  showMore: PropTypes.bool,
};

export default CustomGroupHeader;
