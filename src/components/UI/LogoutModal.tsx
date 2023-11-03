import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import modalClose from "../../assets/images/modal_close.svg";
import iconLogout from "../../assets/images/icon_logout.svg";
import Button from "@mui/material/Button";
import { FC } from "react";
import { LogoutButton } from "./LogoutButton";

interface IModalProps {
  show: boolean;
  handleShow: () => void;
}

export const LogoutModal: FC<IModalProps> = ({ show, handleShow }) => {
  return (
    <div>
      <Modal open={show}>
        <Box sx={{ boxShadow: 24 }}>
          <div className="modal">
            <Button onClick={handleShow} className="modal__close-button">
              <img src={modalClose} alt="modal_close" />
            </Button>
            <h3 className="modal__title">
              <img
                className="modal__logout-icon"
                src={iconLogout}
                alt="modal_icon"
              />
              <span>Logout</span>
            </h3>
            <p className="modal__text">
              Are you sure you want to exit the&nbsp;system?
            </p>
            <div className="modal__buttons">
              <Button
                onClick={handleShow}
                className="modal__cancel-button"
                variant="contained"
                disableElevation
              >
                Cancel
              </Button>
              <LogoutButton />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
