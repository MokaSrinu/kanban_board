import React from "react";
import PropTypes from "prop-types";
import { GoDotFill } from "react-icons/go";
import classes from "./CustomCard.module.css";

const PROFILE_IMAGES = {
  "usr-1": "https://randomuser.me/api/portraits/med/men/13.jpg",
  "usr-2": "https://randomuser.me/api/portraits/med/men/55.jpg",
  "usr-3": "https://randomuser.me/api/portraits/med/men/85.jpg",
  "usr-4": "https://randomuser.me/api/portraits/med/men/90.jpg",
  "usr-5": "https://randomuser.me/api/portraits/med/men/75.jpg",
};

const CustomCard = (props) => {
  const {
    header,
    title,
    icon,
    tag,
    titleIcon,
    showProfileIcon = true,
    userId,
  } = props;

  return (
    <div className={classes.CustomCard}>
      <div className={classes.HeaderWrap}>
        {header && <span className={classes.Header}>{header}</span>}
        <span className={classes.ProfileIcon}>
          {showProfileIcon && (
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src={PROFILE_IMAGES[userId]}
              width="1.5rem"
              height="1.5rem"
            />
          )}
        </span>
      </div>
      <div className={classes.Title}>
        {titleIcon && <span className={classes.TitleIcon}>{titleIcon}</span>}
        {title}
      </div>
      <div className={classes.TagSection}>
        {icon && icon}
        {tag && (
          <div className={classes.Tag}>
            <GoDotFill />
            {tag}
          </div>
        )}
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  header: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.element,
  tag: PropTypes.string,
  titleIcon: PropTypes.element,
};

export default CustomCard;
