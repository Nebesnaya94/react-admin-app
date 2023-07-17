import * as React from "react";
import { List, Datagrid } from "react-admin";
import { ContactsPagination } from "../../UI/ContactsPagination";
import { ListNameButton } from "../../UI/ListNameButton";
import { ContactsFilterSidebar } from "./ContactsFilterSidebar";
import { ContactsItemDetails } from "./ContactsItemDetails";
import { ContactsListLabel } from "../../UI/ContactsListLabel";
import { ListField } from "./ListField";
import { EmptyList } from "./EmptyList";
import { listContainer } from "../../../styles/sx";
import { EmptyGrid } from "./EmptyGrid";

export const ContactsList = () => {
  const [rowData, setRowData] = React.useState(null);

  const handleCloseItem = (value) => {
    setRowData(value);
  };

  return (
    <div>
      <List
        actions={false}
        aside={<ContactsFilterSidebar />}
        pagination={<ContactsPagination />}
        empty={<EmptyList />}
        sx={listContainer}
      >
        <ContactsListLabel />
        <Datagrid bulkActionButtons={false} empty={<EmptyGrid />}>
          <ListNameButton
            handleButton={setRowData}
            source="id"
            label="Full name"
          />
          <ListField
            headerClassName="qqq"
            handleClick={setRowData}
            source="job_title"
          />
          <ListField handleClick={setRowData} source="industry" />
          <ListField
            handleClick={setRowData}
            label="Location"
            source="country"
          />
        </Datagrid>
      </List>
      {rowData && (
        <ContactsItemDetails handleClose={handleCloseItem} item={rowData} />
      )}
    </div>
  );
};
