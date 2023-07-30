import React, { FC } from "react";
import Button from "@mui/material/Button";
import { useRecordContext, useStore } from "react-admin";
import { fetchFullName } from "../../API/helpers";
import userListIcon from "../../assets/images/user_list_icon.svg";
import userListVerify from "../../assets/images/verify.svg";
import { IContact, IListFieldProps } from "../../models/types";

export const ListNameButton: FC<IListFieldProps> = ({ handleItem }) => {
  const record = useRecordContext<IContact>();
  const [fullName, setFullName] = useStore<string | null>(record.id, null);

  const handleFetch = () => {
    fetchFullName(record.id).then((data) => {
      if (data) {
        setFullName(data);
      }
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      handleItem(record);
    }
  };

  return (
    <div onClick={handleClick}>
      {fullName ? (
        <span>{fullName}</span>
      ) : (
        <Button
          className="list-button"
          onClick={handleFetch}
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
