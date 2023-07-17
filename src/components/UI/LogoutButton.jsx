import React from "react";
import { forwardRef } from "react";
import { useLogout } from "react-admin";
import MenuItem from "@mui/material/MenuItem";
import logoutIcon from "../../assets/images/icon_logout.svg";

export const LogoutButton = forwardRef((props, ref) => {
  const { redirectTo } = props;
  const logout = useLogout();

  const handleClick = () => logout(null, redirectTo, false);

  return (
    <MenuItem
      className="logout-button"
      onClick={handleClick}
      ref={ref}
      {...props}
    >
      <img src={logoutIcon} alt="logout_icon" /> Logout
    </MenuItem>
  );
});
