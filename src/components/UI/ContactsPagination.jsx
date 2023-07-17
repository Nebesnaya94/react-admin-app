import {
  Pagination,
  useListPaginationContext,
  useTranslate,
} from "react-admin";
import { useCallback, useState } from "react";
import { UpgradeModal } from "./UpgradeModal";

export const ContactsPagination = (props) => {
  const translate = useTranslate();

  const paginationProps = useListPaginationContext(props);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (value) => {
    setShowModal(value);
  };

  const handlePageChange = useCallback(
    (event, page) => {
      event && event.stopPropagation();
      if (page < 0 || page > paginationProps.totalPages - 1) {
        throw new Error(
          translate("ra.navigation.page_out_of_boundaries", {
            page: page + 1,
          })
        );
      }
      if (page >= 6) {
        setShowModal(true);
        return;
      }
      paginationProps.setPage(page + 1);
    },
    [paginationProps.totalPages, paginationProps.setPage, translate]
  );

  return (
    <div>
      <UpgradeModal show={showModal} handleShow={handleShowModal} />
      <Pagination onPageChange={handlePageChange} rowsPerPageOptions={[]} />
    </div>
  );
};
