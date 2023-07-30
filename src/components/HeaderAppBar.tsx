import React, { FC } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const HeaderAppBar: FC = () => {
  return (
    <AppBar className="header">
      <Toolbar className="header__wrapper">
        <h1 className="header__logo">LOGO</h1>
        <Link to="/profile">
          <Button variant="text" className="header__profile">
            KM
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
