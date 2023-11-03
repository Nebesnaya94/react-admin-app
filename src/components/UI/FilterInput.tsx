import { FC } from "react";
import { FilterLiveSearch } from "react-admin";
import { IFilterInputProps } from "../../models/types";
import { capitalize } from "../../API/helpers";

export const FilterInput: FC<IFilterInputProps> = ({ icon, label }) => {
  return (
    <div className="filter-block">
      <div className="filter-block__label">
        <img src={icon} alt="label_icon" /> <span>{capitalize(label)}</span>
      </div>
      <div className="filter-block__input">
        <FilterLiveSearch label={`Search ${label}`} />
      </div>
    </div>
  );
};
