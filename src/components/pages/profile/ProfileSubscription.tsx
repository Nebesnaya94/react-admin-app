import React, { FC } from "react";
import Button from "@mui/material/Button";
import subsIcon from "../../../assets/images/icon_subs.svg";

export const ProfileSubscription: FC = () => {
  return (
    <div className="profile-subscription">
      <h2 className="profile-subscription__label">Subscription</h2>
      <div className="profile-subscription__card">
        <div className="profile-subscription__text-wrapper">
          <h3 className="profile-subscription__title">Free Plan</h3>
          <p className="profile-subscription__text">
            You are on a free plan and your credits will refresh on May 18,
            2023.
          </p>
        </div>
        <Button
          className="profile-subscription__button"
          variant="contained"
          disableElevation
        >
          <img src={subsIcon} alt="subs_icon" /> <span>Change&nbsp;plan</span>
        </Button>
      </div>
    </div>
  );
};
