import { Card, CardContent } from "@mui/material";
import { FilterSelect } from "../../UI/FilterSelect";
import { FilterInput } from "../../UI/FilterInput";
import iconIndustry from "../../../assets/images/icon_industry.svg";
import iconLocation from "../../../assets/images/icon_location.svg";
import iconJobTitle from "../../../assets/images/icon_jobtitle.svg";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useListFilterContext } from "react-admin";

export const ContactsFilterSidebar = () => {
  const { filterValues, setFilters } = useListFilterContext();

  const clearFilters = () => {
    setFilters({});
  };

  return (
    <Card className="filters">
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
          <FilterInput
            icon={iconJobTitle}
            label="Search by job title"
            source="job_title"
          />
          <FilterSelect
            icon={iconLocation}
            label="location"
            source="country"
            link="countries"
          />
          <FilterSelect
            icon={iconIndustry}
            label="industry"
            source="industry"
            link="industries"
          />
        </div>
      </CardContent>
    </Card>
  );
};
