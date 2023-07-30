import {
  Pagination,
  PaginationProps,
  useListPaginationContext,
} from "react-admin";
import { FC, useEffect, useState } from "react";
import { UpgradeModal } from "./UpgradeModal";

export const ContactsPagination: FC<PaginationProps> = (props) => {
  const { page, setPage } = useListPaginationContext(props);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (page > 6) {
      setPage(6);
      setShowModal(true);
    }
  }, [page, setPage]);

  return (
    <div>
      <UpgradeModal show={showModal} handleShow={handleShowModal} />
      <Pagination rowsPerPageOptions={[]} />
    </div>
  );
};
