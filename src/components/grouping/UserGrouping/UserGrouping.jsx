import React from "react";
import PropTypes from "prop-types";
import {
  MdCancel,
  MdMoreHoriz,
  MdPendingActions,
  MdSignalCellularAlt,
  MdSignalCellularAlt1Bar,
  MdSignalCellularAlt2Bar,
} from "react-icons/md";
import { TbAlertSquareFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { PiClockAfternoonBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { CustomCard, CustomGroupHeader } from "../../atoms";
import classes from "./UserGrouping.module.css";

const UserGrouping = (props) => {
  const { ticketsData, orderValue } = props;

  const userOneCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.userId === "usr-1";
  })?.length;
  const userTwoCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.userId === "usr-2";
  })?.length;
  const userThreeCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.userId === "usr-3";
  })?.length;
  const userFourCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.userId === "usr-4";
  })?.length;
  const userFiveCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.userId === "usr-5";
  })?.length;

  const customCardIcon = {
    0: <MdMoreHoriz fontSize="1.125rem" color="#919fb0" />,
    1: <MdSignalCellularAlt1Bar fontSize="1.125rem" color="#919fb0" />,
    2: <MdSignalCellularAlt2Bar fontSize="1.125rem" color="#919fb0" />,
    3: <MdSignalCellularAlt fontSize="1.125rem" color="#919fb0" />,
    4: <TbAlertSquareFilled fontSize="1.125rem" color="#fa824f" />,
  };

  const StatusIcon = {
    backlog: <MdPendingActions fontSize="1rem" color="purple" />,
    todo: <GoDotFill fontSize="1rem" color="#d3d3d3" />,
    done: <PiClockAfternoonBold fontSize="1rem" color="#f0ca4f" />,
    "in progress": <BsFillCheckCircleFill fontSize="1rem" color="#5966d0" />,
    canceled: <MdCancel fontSize="1rem" color="#919fb0" />,
  };

  const renderGroup = (data, type) => {
    switch (type) {
      case "usr-1":
        let userOneGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.userId === "usr-1";
          }
        );
        if (orderValue === "priority") {
          userOneGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          userOneGroupFilterdRes?.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        return (
          <>
            {userOneGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                showProfileIcon={false}
              />
            ))}
          </>
        );
      case "usr-2":
        let userTwoGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.userId === "usr-2";
          }
        );
        if (orderValue === "priority") {
          userTwoGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          userTwoGroupFilterdRes?.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        return (
          <>
            {userTwoGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                showProfileIcon={false}
              />
            ))}
          </>
        );
      case "usr-3":
        let userThreeGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.userId === "usr-3";
          }
        );
        if (orderValue === "priority") {
          userThreeGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          userThreeGroupFilterdRes?.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        return (
          <>
            {userThreeGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                showProfileIcon={false}
              />
            ))}
          </>
        );
      case "usr-4":
        let userFourGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.userId === "usr-4";
          }
        );
        if (orderValue === "priority") {
          userFourGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          userFourGroupFilterdRes?.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        return (
          <>
            {userFourGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                showProfileIcon={false}
              />
            ))}
          </>
        );
      case "usr-5":
        let userFiveGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.userId === "usr-5";
          }
        );
        if (orderValue === "priority") {
          userFiveGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          userFiveGroupFilterdRes?.sort((a, b) => {
            let fa = a.title.toLowerCase(),
              fb = b.title.toLowerCase();

            if (fa < fb) {
              return -1;
            }
            if (fa > fb) {
              return 1;
            }
            return 0;
          });
        }
        return (
          <>
            {userFiveGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                showProfileIcon={false}
              />
            ))}
          </>
        );
      default:
        break;
    }
  };
  return (
    <div className={classes.UserGroupingContainer}>
      <div className={classes.UserGroup}>
        <CustomGroupHeader
          icon={
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src="https://randomuser.me/api/portraits/med/men/13.jpg"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title={ticketsData?.users?.[0]?.name}
          count={userOneCount}
        />
        {renderGroup(ticketsData, ticketsData?.users?.[0]?.id)}
      </div>
      <div className={classes.UserGroup}>
        <CustomGroupHeader
          icon={
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src="https://randomuser.me/api/portraits/med/men/55.jpg"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title={ticketsData?.users?.[1]?.name}
          count={userTwoCount}
        />
        {renderGroup(ticketsData, ticketsData?.users?.[1]?.id)}
      </div>
      <div className={classes.UserGroup}>
        <CustomGroupHeader
          icon={
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src="https://randomuser.me/api/portraits/med/men/85.jpg"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title={ticketsData?.users?.[2]?.name}
          count={userThreeCount}
        />
        {renderGroup(ticketsData, ticketsData?.users?.[2]?.id)}
      </div>
      <div className={classes.UserGroup}>
        <CustomGroupHeader
          icon={
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src="https://randomuser.me/api/portraits/med/men/90.jpg"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title={ticketsData?.users?.[3]?.name}
          count={userFourCount}
        />
        {renderGroup(ticketsData, ticketsData?.users?.[3]?.id)}
      </div>
      <div className={classes.UserGroup}>
        <CustomGroupHeader
          icon={
            <img
              alt="User Profile pic"
              className={classes.PersonProfileImage}
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              width="1.5rem"
              height="1.5rem"
            />
          }
          title={ticketsData?.users?.[4]?.name}
          count={userFiveCount}
        />
        {renderGroup(ticketsData, ticketsData?.users?.[4]?.id)}
      </div>
    </div>
  );
};

UserGrouping.propTypes = {
  ticketsData: PropTypes.object,
  orderValue: PropTypes.string,
};

export default UserGrouping;
