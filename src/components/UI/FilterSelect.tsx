import { memo, useMemo, useState, useEffect, FC } from "react";
import { useListFilterContext } from "react-admin";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { fetchFilteredData } from "../../API/helpers";
import { capitalize } from "../../API/helpers";
import { SelectChangeEvent } from "@mui/material";
import { IFilterSelectProps } from "../../models/types";

interface ISelectValue {
  username: string;
  id: string;
}

export const FilterSelect: FC<IFilterSelectProps> = memo((props) => {
  const { filterValues, setFilters } = useListFilterContext();
  const { source, label, link, icon } = props;
  const [values, getValues] = useState<ISelectValue[]>([]);

  useEffect(() => {
    fetchFilteredData(link).then((data) => {
      getValues(data);
    });
  }, []);

  const handleChanges = (e: SelectChangeEvent) => {
    setFilters({ ...filterValues, [source]: e.target.value }, null);
  };

  const initialValue = useMemo(
    () => filterValues[source],
    [filterValues, source]
  );

  return (
    <div className="filter-block">
      <div className="filter-block__label">
        <img src={icon} alt="label_icon" />
        <span>{capitalize(label)}</span>
      </div>
      <div className="filter-block__select">
        <FormControl>
          <Select
            value={values.length ? initialValue ?? "" : ""}
            onChange={handleChanges}
            displayEmpty
            MenuProps={{
              PaperProps: {
                sx: {
                  maxHeight: 168,
                  width: 204,
                },
              },
            }}
          >
            <MenuItem value="">
              <em>Choose {label}</em>
            </MenuItem>
            {values.map((value, index) => (
              <MenuItem key={value.id} value={index + 1}>
                {value.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
});
