import { FC } from "react";
import { forwardRef } from "react";
import { useLogout } from "react-admin";
import MenuItem from "@mui/material/MenuItem";
import { LogoutProps } from "react-admin";
import { MenuItemProps } from "@mui/material/MenuItem";

export const LogoutButton: FC<LogoutProps & MenuItemProps<"li">> = forwardRef(
  (props, ref) => {
    const { redirectTo } = props;
    const logout = useLogout();

    const handleClick = () => logout(null, redirectTo, false);

    return (
      <MenuItem onClick={handleClick} className="logout" ref={ref} {...props}>
        <span className="logout__text">Logout</span>
      </MenuItem>
    );
  }
);
