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
import { GoDotFill } from "react-icons/go";
import { PiClockAfternoonBold } from "react-icons/pi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TbAlertSquareFilled } from "react-icons/tb";
import { CustomCard, CustomGroupHeader } from "../../atoms";
import classes from "./StatusGrouping.module.css";

const StatusGrouping = (props) => {
  const { ticketsData, orderValue } = props;

  const backlogCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.status?.toLowerCase() === "backlog";
  })?.length;
  const todoCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.status?.toLowerCase() === "todo";
  })?.length;
  const doneCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.status?.toLowerCase() === "done";
  })?.length;
  const progressCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.status?.toLowerCase() === "in progress";
  })?.length;
  const canceledCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.status?.toLowerCase() === "canceled";
  })?.length;

  const customCardIcon = {
    0: <MdMoreHoriz fontSize="1.125rem" color="#919fb0" />,
    1: <MdSignalCellularAlt1Bar fontSize="1.125rem" color="#919fb0" />,
    2: <MdSignalCellularAlt2Bar fontSize="1.125rem" color="#919fb0" />,
    3: <MdSignalCellularAlt fontSize="1.125rem" color="#919fb0" />,
    4: <TbAlertSquareFilled fontSize="1.125rem" color="#fa824f" />,
  };

  const renderGroup = (data, type) => {
    switch (type) {
      case "backlog":
        let backlogGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.status?.toLowerCase() === "backlog";
          }
        );
        if (orderValue === "priority") {
          backlogGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          backlogGroupFilterdRes?.sort((a, b) => {
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
            {backlogGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "todo":
        let todoGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.status?.toLowerCase() === "todo";
          }
        );
        if (orderValue === "priority") {
          todoGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          todoGroupFilterdRes?.sort((a, b) => {
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
            {todoGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "in progress":
        let inProgressGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.status?.toLowerCase() === "in progress";
          }
        );
        if (orderValue === "priority") {
          inProgressGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          inProgressGroupFilterdRes?.sort((a, b) => {
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
            {inProgressGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "done":
        let doneGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.status?.toLowerCase() === "done";
          }
        );
        if (orderValue === "priority") {
          doneGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          doneGroupFilterdRes?.sort((a, b) => {
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
            {doneGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "canceled":
        let canceledGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.status?.toLowerCase() === "canceled";
          }
        );
        if (orderValue === "priority") {
          canceledGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          canceledGroupFilterdRes?.sort((a, b) => {
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
            {canceledGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                icon={customCardIcon[ticket?.priority]}
                tag={ticket?.tag?.[0]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      default:
        break;
    }
  };
  return (
    <div className={classes.StatusGroupingContainer}>
      <div className={classes.StatusGroup}>
        <CustomGroupHeader
          icon={<MdPendingActions fontSize="1.25rem" color="purple" />}
          title="Backlog"
          count={backlogCount}
        />
        {renderGroup(ticketsData, "backlog")}
      </div>
      <div className={classes.StatusGroup}>
        <CustomGroupHeader
          icon={<GoDotFill fontSize="1.25rem" color="#d3d3d3" />}
          title="Todo"
          count={todoCount}
        />
        {renderGroup(ticketsData, "todo")}
      </div>
      <div className={classes.StatusGroup}>
        <CustomGroupHeader
          icon={<PiClockAfternoonBold fontSize="1.25rem" color="#f0ca4f" />}
          title="In Progress"
          count={progressCount}
        />
        {renderGroup(ticketsData, "in progress")}
      </div>
      <div className={classes.StatusGroup}>
        <CustomGroupHeader
          icon={<BsFillCheckCircleFill fontSize="1.25rem" color="#5966d0" />}
          title="Done"
          count={doneCount}
        />
        {renderGroup(ticketsData, "done")}
      </div>
      <div className={classes.StatusGroup}>
        <CustomGroupHeader
          icon={<MdCancel fontSize="1.25rem" color="#919fb0" />}
          title="Canceled"
          count={canceledCount}
        />
        {renderGroup(ticketsData, "canceled")}
      </div>
    </div>
  );
};

StatusGrouping.propTypes = {
  ticketsData: PropTypes.object,
  orderValue: PropTypes.string,
};

export default StatusGrouping;
