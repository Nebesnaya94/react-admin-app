import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LogoutIcon from "../assets/images/icon_logout.svg";
import { LogoutModal } from "./pages/contacts/LogoutModal";

export const HeaderAppBar: FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(false);
  };

  return (
    <AppBar className="header">
      <Toolbar className="header__wrapper">
        <h1 className="header__logo">LOGO</h1>
        <Button
          onClick={() => setShowModal(true)}
          variant="text"
          className="header__logout-button"
        >
          <img
            src={LogoutIcon}
            alt="logout-icon"
            className="header__logout-icon"
          />
        </Button>
      </Toolbar>
      <LogoutModal show={showModal} handleShow={handleShowModal} />
    </AppBar>
  );
};
