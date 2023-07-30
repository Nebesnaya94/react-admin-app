import React, { FC } from "react";
import { FilterLiveSearch } from "react-admin";
import { IFilterProps } from "../../models/types";

export const FilterInput: FC<IFilterProps> = (props) => {
  const { label, source, icon } = props;

  return (
    <div className="filter-block">
      <div className="filter-block__label">
        <img src={icon} alt="label_icon" /> <span>Job title</span>
      </div>
      <div className="filter-block__input">
        <FilterLiveSearch label={label} source={source} />
      </div>
    </div>
  );
};