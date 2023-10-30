import { Pagination, PaginationProps } from "react-admin";
import { FC } from "react";

export const ContactsPagination: FC<PaginationProps> = () => {
  return (
    <div>
      <Pagination rowsPerPageOptions={[]} />
    </div>
  );
};
