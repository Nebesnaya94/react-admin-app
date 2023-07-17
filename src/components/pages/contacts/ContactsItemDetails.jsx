import React from "react";
import { ItemNameButton } from "../../UI/ItemNameButton";
import { useStore } from "react-admin";
import Button from "@mui/material/Button";
import itemClose from "../../../assets/images/item_close.svg";

export const ContactsItemDetails = ({ item, handleClose }) => {
  const [fullName] = useStore(item.id, null);

  const closeItem = () => {
    handleClose(null);
  };

  return (
    <div className="item-details">
      <div className="item-details__wrapper">
        <Button onClick={closeItem} className="item-details__close">
          <img src={itemClose} alt="modal_close" />
        </Button>
        <div className="item-details__data details-data">
          <div className="details-data__button-wrapper">
            {fullName ? (
              <span>{fullName}</span>
            ) : (
              <ItemNameButton itemId={item?.id} />
            )}
          </div>
          <div className="details-data__wrapper">
            <div>
              <h5 className="details-data__title">Job title</h5>
              <p className="details-data__text">{item?.job_title}</p>
            </div>
            <div>
              <h5 className="details-data__title">Industry</h5>
              <p className="details-data__text">{item?.industry}</p>
            </div>
            <div>
              <h5 className="details-data__title">Location</h5>
              <p className="details-data__text">{item?.country}</p>
            </div>
            <div>
              <h5 className="details-data__title">Description</h5>
              <p className="details-data__text">{item?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
