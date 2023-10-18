import React, { useEffect, useState } from "react";
import TopNavbar from "../TopNavbar/TopNavbar";
import { PriorityGrouping, StatusGrouping, UserGrouping } from "../grouping";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const [groupValue, setGroupValue] = useState("status");
  const [orderValue, setOrderValue] = useState("priority");
  const [ticketsData, setTicketsData] = useState(null);
  const [isTicketsDataLoading, setIsTicketsDataLoading] = useState(false);
  const [TicketsDataError, setTicketsDataError] = useState(null);

  const handleSetGroupValue = (value) => {
    setGroupValue(value);
    localStorage.setItem("group_value", value);
  };

  const handleSetOrderValue = (value) => {
    setOrderValue(value);
    localStorage.setItem("order_value", value);
  };

  const renderDashboardGroupingContent = () => {
    switch (groupValue) {
      case "status":
        return (
          <StatusGrouping ticketsData={ticketsData} orderValue={orderValue} />
        );
      case "user":
        return (
          <UserGrouping ticketsData={ticketsData} orderValue={orderValue} />
        );
      case "priority":
        return (
          <PriorityGrouping ticketsData={ticketsData} orderValue={orderValue} />
        );
      default:
        break;
    }
  };

  const renderDashboardContent = () => {
    if (isTicketsDataLoading) {
      return <>Loading...</>;
    } else if (!isTicketsDataLoading && TicketsDataError) {
      return <>Error in fetching Data.</>;
    } else {
      return <>{renderDashboardGroupingContent()}</>;
    }
  };

  const fetchTicketsListingData = async () => {
    try {
      setIsTicketsDataLoading(true);
      const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";
      const fetchTicketsListingDataRes = await fetch(apiUrl);
      if (
        fetchTicketsListingDataRes?.status >= 200 &&
        fetchTicketsListingDataRes?.status < 400
      ) {
        const ticketsListingRes = await fetchTicketsListingDataRes?.json();
        setTicketsData(ticketsListingRes);
      }
    } catch (error) {
      setTicketsDataError(error);
      console.error("Error in fetchTicketsListingData", error);
    } finally {
      setIsTicketsDataLoading(false);
    }
  };

  const fetchIntialPageSyncData = async () => {
    try {
      const groupingValue = localStorage.getItem("group_value");
      const orderingValue = localStorage.getItem("order_value");
      if (groupingValue && orderingValue) {
        setGroupValue(groupingValue);
        setOrderValue(orderingValue);
        fetchTicketsListingData();
      }
    } catch (error) {
      console.error("Error in fetchIntialPageSyncData:", error);
    }
  };

  useEffect(() => {
    fetchIntialPageSyncData();
  }, []);
  return (
    <div className={classes.DashboardContainer}>
      <TopNavbar
        groupValue={groupValue}
        orderValue={orderValue}
        handleSetGroupValue={handleSetGroupValue}
        handleSetOrderValue={handleSetOrderValue}
      />
      <div className={classes.DashboardWrapper}>{renderDashboardContent()}</div>
    </div>
  );
};

export default Dashboard;
