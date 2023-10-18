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
import classes from "./PriorityGrouping.module.css";

const PriorityGrouping = (props) => {
  const { ticketsData, orderValue } = props;

  const noPriorityCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.priority === 0;
  })?.length;
  const urgentCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.priority === 4;
  })?.length;
  const highCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.priority === 3;
  })?.length;
  const mediumCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.priority === 2;
  })?.length;
  const lowCount = ticketsData?.tickets?.filter((ticket, index) => {
    return ticket?.priority === 1;
  })?.length;

  const StatusIcon = {
    backlog: <MdPendingActions fontSize="1rem" color="purple" />,
    todo: <GoDotFill fontSize="1rem" color="#d3d3d3" />,
    done: <PiClockAfternoonBold fontSize="1rem" color="#f0ca4f" />,
    "in progress": <BsFillCheckCircleFill fontSize="1rem" color="#5966d0" />,
    canceled: <MdCancel fontSize="1rem" color="#919fb0" />,
  };

  const renderGroup = (data, type) => {
    switch (type) {
      case "no_priority":
        let noPriorityGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.priority === 0;
          }
        );
        if (orderValue === "priority") {
          noPriorityGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          noPriorityGroupFilterdRes?.sort((a, b) => {
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
            {noPriorityGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "urgent":
        let urgentGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.priority === 4;
          }
        );
        if (orderValue === "priority") {
          urgentGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          urgentGroupFilterdRes?.sort((a, b) => {
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
            {urgentGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "high":
        let highGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.priority === 3;
          }
        );
        if (orderValue === "priority") {
          highGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          highGroupFilterdRes?.sort((a, b) => {
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
            {highGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "medium":
        let mediumGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.priority === 2;
          }
        );
        if (orderValue === "priority") {
          mediumGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          mediumGroupFilterdRes?.sort((a, b) => {
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
            {mediumGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
                userId={ticket?.userId}
              />
            ))}
          </>
        );
      case "low":
        let lowGroupFilterdRes = ticketsData?.tickets?.filter(
          (ticket, index) => {
            return ticket?.priority === 1;
          }
        );
        if (orderValue === "priority") {
          lowGroupFilterdRes?.sort((a, b) => a.priority - b.priority);
        } else {
          lowGroupFilterdRes?.sort((a, b) => {
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
            {lowGroupFilterdRes?.map((ticket, index) => (
              <CustomCard
                header={ticket?.id}
                title={ticket?.title}
                tag={ticket?.tag?.[0]}
                titleIcon={StatusIcon[ticket?.status.toLowerCase()]}
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
    <div className={classes.PriorityGroupingContainer}>
      <div className={classes.PriorityGroup}>
        <CustomGroupHeader
          icon={<MdMoreHoriz fontSize="1.125rem" color="#919fb0" />}
          title="No Priority"
          count={noPriorityCount}
        />
        {renderGroup(ticketsData, "no_priority")}
      </div>
      <div className={classes.PriorityGroup}>
        <CustomGroupHeader
          icon={<TbAlertSquareFilled fontSize="1.125rem" color="#fa824f" />}
          title="Urgent"
          count={urgentCount}
        />
        {renderGroup(ticketsData, "urgent")}
      </div>
      <div className={classes.PriorityGroup}>
        <CustomGroupHeader
          icon={<MdSignalCellularAlt fontSize="1.125rem" color="#919fb0" />}
          title="High"
          count={highCount}
        />
        {renderGroup(ticketsData, "high")}
      </div>
      <div className={classes.PriorityGroup}>
        <CustomGroupHeader
          icon={<MdSignalCellularAlt2Bar fontSize="1.125rem" color="#919fb0" />}
          title="Medium"
          count={mediumCount}
        />
        {renderGroup(ticketsData, "medium")}
      </div>
      <div className={classes.PriorityGroup}>
        <CustomGroupHeader
          icon={<MdSignalCellularAlt1Bar fontSize="1.125rem" color="#919fb0" />}
          title="Low"
          count={lowCount}
        />
        {renderGroup(ticketsData, "low")}
      </div>
    </div>
  );
};

PriorityGrouping.propTypes = {
  ticketsData: PropTypes.object,
  orderValue: PropTypes.string,
};

export default PriorityGrouping;
