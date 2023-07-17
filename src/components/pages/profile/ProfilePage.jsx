import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/images/profile_arrow_icon.svg";
import changeIcon from "../../../assets/images/icon_change.svg";
import subsIcon from "../../../assets/images/icon_subs.svg";
import { LogoutButton } from "../../UI/LogoutButton";
import TextField from "@mui/material/TextField";

export const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Link to="/contacts">
        <Button className="profile-page__back-button" variant="text">
          <img src={arrowIcon} alt="arrow_icon" />
          <span>Back to search</span>
        </Button>
      </Link>
      <div className="profile-page__container">
        <div className="profile-page__card-block profile-card">
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
        <div className="profile-page__subscription-block subscription-block">
          <h2 className="subscription-block__label">Subscription</h2>
          <div className="subscription-block__card">
            <div className="subscription-block__text-wrapper">
              <h3 className="subscription-block__title">Free Plan</h3>
              <p className="subscription-block__text">
                You are on a free plan and your credits will refresh on May 18,
                2023.
              </p>
            </div>
            <Button
              className="subscription-block__button"
              variant="contained"
              disableElevation
            >
              <img src={subsIcon} alt="subs_icon" />{" "}
              <span>Change&nbsp;plan</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
