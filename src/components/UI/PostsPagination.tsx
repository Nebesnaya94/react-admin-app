import { Pagination, PaginationProps } from "react-admin";
import { FC } from "react";

export const PostsPagination: FC<PaginationProps> = () => {
  return (
    <div>
      <Pagination rowsPerPageOptions={[]} />
    </div>
  );
};
