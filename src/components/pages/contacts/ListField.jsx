import React from "react";
import { useRecordContext } from "react-admin";

export const ListField = ({ source, handleClick }) => {
  const record = useRecordContext();

  return (
    <div
      onClick={() => {
        handleClick(record);
      }}
    >
      <span>{record[source]}</span>
    </div>
  );
};
