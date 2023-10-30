import React, { FC } from "react";
import { List, Datagrid, ReferenceField } from "react-admin";
import { ContactsPagination } from "../../UI/ContactsPagination";
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
          <ListField handleItem={setRowData} label="No" source="id" />
          <ReferenceField source="userId" label="Author" reference="users">
            <ListField handleItem={setRowData} source="username" />
          </ReferenceField>
          <ListField handleItem={setRowData} label="Post" source="title" />
        </Datagrid>
      </List>
      {rowData && (
        <ContactsItemDetails handleClose={setRowData} item={rowData} />
      )}
    </div>
  );
};
