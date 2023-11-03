import React, { FC } from "react";
import { List, Datagrid, ReferenceField, TextField } from "react-admin";
import { PostsPagination } from "../../UI/PostsPagination";
import { FilterSidebar } from "./FilterSidebar";
import { PostDetails } from "./PostDetails";
import { PostsListLabel } from "../../UI/PostsListLabel";
import { listContainer } from "../../../styles/sx";
import { EmptyGrid } from "./EmptyGrid";
import { IPost } from "../../../models/types";
import { fetchUser } from "../../../API/helpers";

export const PostsList: FC = () => {
  const [postData, setPostData] = React.useState<IPost | null>(null);

  async function getFullPost(
    id: any,
    resource: any,
    record: any
  ): Promise<false> {
    const { name, username } = await fetchUser(record.userId);
    const post = {
      id: record.id,
      author: { name, username },
      title: record.title,
      description: record.body,
    };
    setPostData(post);
    return false;
  }

  return (
    <div>
      <List
        actions={false}
        aside={<FilterSidebar />}
        pagination={<PostsPagination />}
        sx={listContainer}
      >
        <PostsListLabel />
        <Datagrid
          bulkActionButtons={false}
          empty={<EmptyGrid />}
          rowClick={getFullPost}
        >
          <TextField label="No" source="id" />
          <ReferenceField source="userId" label="Author" reference="users">
            <TextField source="username" />
          </ReferenceField>
          <TextField label="Post" source="title" />
        </Datagrid>
      </List>
      {postData && <PostDetails handleClose={setPostData} post={postData} />}
    </div>
  );
};
