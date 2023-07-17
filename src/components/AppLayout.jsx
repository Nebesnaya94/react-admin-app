import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { HeaderAppBar } from "./HeaderAppBar";

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  zIndex: 1,
  minHeight: "100vh",
  backgroundColor: "#fff",
  position: "relative",
}));

const AppFrame = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  overflowX: "auto",
}));

const ContentWithSidebar = styled("main")(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 2,
  marginTop: "96px",
}));

export const AppLayout = ({ children }) => (
  <Root>
    <AppFrame>
      <HeaderAppBar />
      <ContentWithSidebar>
        <Content>{children}</Content>
      </ContentWithSidebar>
    </AppFrame>
  </Root>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
