import React from "react";
import Chip from "@mui/material/Chip";
import { useListContext } from "react-admin";

export const ContactsListLabel = () => {
  const { total } = useListContext();

  return (
    <div className="list-label">
      <h2 className="list-label__title">Total</h2>
      <Chip className="list-label__count" label={total} />
    </div>
  );
};
