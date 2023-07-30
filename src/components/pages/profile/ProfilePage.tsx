import React, { FC } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/images/profile_arrow_icon.svg";
import { ProfileCard } from "./ProfileCard";
import { ProfileSubscription } from "./ProfileSubscription";

export const ProfilePage: FC = () => {
  return (
    <div className="profile-page">
      <Link to="/contacts">
        <Button className="profile-page__back-button" variant="text">
          <img src={arrowIcon} alt="arrow_icon" />
          <span>Back to search</span>
        </Button>
      </Link>
      <div className="profile-page__container">
        <ProfileCard />
        <ProfileSubscription />
      </div>
    </div>
  );
};
