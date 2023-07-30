import React, { FC } from "react";
import { useRecordContext } from "react-admin";
import { IContact, IListFieldProps } from "../../../models/types";

export const ListField: FC<IListFieldProps> = ({ source, handleItem }) => {
  const record = useRecordContext<IContact>();

  return (
    <div
      onClick={() => {
        handleItem(record);
      }}
    >
      <span>{record[source]}</span>
    </div>
  );
};
