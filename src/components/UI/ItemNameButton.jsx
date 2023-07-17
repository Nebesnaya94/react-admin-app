import React from "react";
import Button from "@mui/material/Button";
import { useStore } from "react-admin";
import { fetchFullName } from "../../API/helpers";
import userDetailsIcon from "../../assets/images/user_details_icon.svg";

export const ItemNameButton = ({ itemId }) => {
  const [_, setFullName] = useStore(itemId, null);

  const handleClick = () => {
    fetchFullName(itemId).then((data) => {
      setFullName(data);
    });
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      disableElevation
      className="details-data__button"
    >
      <img src={userDetailsIcon} alt="user_details_icon" />
      <span>Get access to name</span>
    </Button>
  );
};
