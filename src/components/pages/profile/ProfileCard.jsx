import React from "react";
import Button from "@mui/material/Button";
import { LogoutButton } from "../../UI/LogoutButton";
import TextField from "@mui/material/TextField";
import changeIcon from "../../../assets/images/icon_change.svg";

export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card__header">
        <span className="profile-card__label">Account info</span>
        <LogoutButton />
      </div>
      <div className="profile-card__content">
        <div className="profile-card__fields">
          <div className="profile-card__input-wrapper">
            <h5 className="profile-card__input-label">First Name</h5>
            <TextField
              variant="outlined"
              className="profile-card__input"
              name="first name"
              value="John"
            />
          </div>
          <div className="profile-card__input-wrapper">
            <h5 className="profile-card__input-label">Last Name</h5>
            <TextField
              variant="outlined"
              className="profile-card__input"
              name="last name"
              value="Doe"
            />
          </div>
        </div>
        <div className="profile-card__edit-row">
          <div className="profile-card__edit-field">john.doe@gmail.com</div>
          <Button
            variant="text"
            disableElevation
            className="profile-card__edit-button"
          >
            <img src={changeIcon} alt="change_icon" />
            <span>Change email</span>
          </Button>
        </div>
        <div className="profile-card__edit-row">
          <div className="profile-card__edit-field">***********</div>
          <Button
            variant="text"
            disableElevation
            className="profile-card__edit-button"
          >
            <img src={changeIcon} alt="change_icon" />
            <span>Change password</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
