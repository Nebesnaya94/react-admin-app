import { Card, CardContent } from "@mui/material";
import { FilterSelect } from "../../UI/FilterSelect";
import { FilterInput } from "../../UI/FilterInput";
import iconUser from "../../../assets/images/user_icon.svg";
import iconPost from "../../../assets/images/post_icon.svg";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useListFilterContext, useStore } from "react-admin";
import { FC } from "react";

export const FilterSidebar: FC = () => {
  const { filterValues, setFilters } = useListFilterContext();
  const [isVisible] = useStore("filters-visible", false);

  const clearFilters = () => {
    setFilters({}, {});
  };

  return (
    <Card className={`filters${isVisible ? " " + "active" : ""}`}>
      <CardContent className="filters__wrapper">
        <div className="filters__header">
          <div className="filters__label">
            <span>Filters</span>
            {!!Object.keys(filterValues).length && (
              <Chip
                className="filters__count"
                label={Object.keys(filterValues).length}
              />
            )}
          </div>
          {!!Object.keys(filterValues).length && (
            <Button
              onClick={clearFilters}
              className="filters__clear-button"
              variant="text"
            >
              Clear filter
            </Button>
          )}
        </div>
        <div className="filters__container">
          <FilterInput icon={iconPost} label="post" />
          <FilterSelect
            icon={iconUser}
            label="author"
            source="userId"
            link="users"
          />
        </div>
      </CardContent>
    </Card>
  );
};
