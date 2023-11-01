import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import modalImage from "../../assets/images/modal_image.png";
import modalClose from "../../assets/images/modal_close.svg";
import Button from "@mui/material/Button";
import { FC } from "react";

interface IModalProps {
  show: boolean;
  handleShow: () => void;
}

export const UpgradeModal: FC<IModalProps> = ({ show, handleShow }) => {
  return (
    <div>
      <Modal open={show}>
        <Box sx={{ boxShadow: 24 }}>
          <div className="modal">
            <Button onClick={() => handleShow()} className="modal__close">
              <img src={modalClose} alt="modal_close" />
            </Button>
            <img className="modal__icon" src={modalImage} alt="modal_icon" />
            <h3 className="modal__title">Upgrade now</h3>
            <p className="modal__text">
              You are on limited version which allows viewing up to 100
              contacts. Upgrade your plan to view all pages.
            </p>
            <Button
              className="modal__upgrade-button"
              variant="contained"
              disableElevation
            >
              Upgrade
            </Button>
            <Button
              className="modal__later-button"
              variant="text"
              disableElevation
            >
              Maybe later
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
