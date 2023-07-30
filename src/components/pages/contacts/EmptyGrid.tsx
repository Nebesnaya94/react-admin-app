import React, { FC } from "react";
import noResults from "../../../assets/images/no_results.png";
import Button from "@mui/material/Button";
import { useListFilterContext } from "react-admin";

export const EmptyGrid: FC = () => {
  const { setFilters } = useListFilterContext();

  const clearFilters = () => {
    setFilters({}, {});
  };

  return (
    <div className="empty-grid">
      <div className="empty-grid__container">
        <img src={noResults} alt="no_results" />
        <h3>No results found</h3>
        <p>
          We couldn’t find what you searched for. <br /> Please try again.
        </p>
        <Button
          onClick={clearFilters}
          className="empty-grid__clear-button"
          variant="contained"
          disableElevation
        >
          Clear filters
        </Button>
      </div>
    </div>
  );
};
