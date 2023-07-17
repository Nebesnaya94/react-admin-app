import React from "react";
import emptyImg1 from "../../../assets/images/empty_state_1.png";
import emptyImg2 from "../../../assets/images/Empty_Searches.png";
import hintArrowIcon from "../../../assets/images/hint_arrow_icon.svg";
import iconHistory from "../../../assets/images/icon_history.svg";

export const EmptyList = () => {
  return (
    <div className="empty-list">
      <div className="empty-list__container">
        <div className="empty-list__info-block">
          <img src={emptyImg1} alt="empty_img_1" />
          <h3>
            Start your people search by applying any filter in the left panel
          </h3>
        </div>
        <div className="empty-list__card-block card-block">
          <div className="card-block__header">
            <img src={iconHistory} alt="icon_history" />
            <span className="card-block__label">Recent searches</span>
          </div>
          <div className="card-block__content">
            <img src={emptyImg2} alt="empty_img_2" />
            <p>Your last four searches will be here for quick access</p>
          </div>
        </div>
      </div>
      <div className="empty-list__hint">
        <img
          className="empty-list__hint-icon"
          src={hintArrowIcon}
          alt="hint_arrow_icon"
        />
        <div className="empty-list__hint-text">
          Add filters to begin your search
        </div>
      </div>
    </div>
  );
};
