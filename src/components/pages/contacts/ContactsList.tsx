import React, { FC } from "react";
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
import { IContact } from "../../../models/types";

export const ContactsList: FC = () => {
  const [rowData, setRowData] = React.useState<IContact | null>(null);

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
            handleItem={setRowData}
            source="id"
            label="Full name"
          />
          <ListField handleItem={setRowData} source="job_title" />
          <ListField handleItem={setRowData} source="industry" />
          <ListField
            handleItem={setRowData}
            label="Location"
            source="country"
          />
        </Datagrid>
      </List>
      {rowData && (
        <ContactsItemDetails handleClose={setRowData} item={rowData} />
      )}
    </div>
  );
};
