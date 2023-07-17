import * as React from "react";
import Button from "@mui/material/Button";
import { useRecordContext, useStore } from "react-admin";
import { fetchFullName } from "../../API/helpers";
import userListIcon from "../../assets/images/user_list_icon.svg";
import userListVerify from "../../assets/images/verify.svg";

export const ListNameButton = ({ handleButton }) => {
  const record = useRecordContext();
  const [fullName, setFullName] = useStore(record.id, null);

  const handleClick = () => {
    fetchFullName(record.id).then((data) => {
      setFullName(data);
    });
  };

  return (
    <div
      onClick={(e) => {
        if (!e.target.closest("button")) {
          handleButton(record);
        }
      }}
    >
      {fullName ? (
        <span>{fullName}</span>
      ) : (
        <Button
          className="list-button"
          onClick={handleClick}
          variant="outlined"
        >
          <span className="list-button__icon button-icon">
            <img
              className="button-icon__user"
              src={userListIcon}
              alt="user_list_icon"
            />
            <img
              className="button-icon__verify"
              src={userListVerify}
              alt="user_list_verify"
            />
          </span>
          <span>Get the name</span>
        </Button>
      )}
    </div>
  );
};
