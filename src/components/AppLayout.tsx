import * as React from "react";
import { styled } from "@mui/material";
import { HeaderAppBar } from "./HeaderAppBar";
import { CoreLayoutProps } from "react-admin";

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

export const AppLayout: React.FC<CoreLayoutProps> = ({ children }) => (
  <Root>
    <AppFrame>
      <HeaderAppBar />
      <ContentWithSidebar>
        <Content>{children}</Content>
      </ContentWithSidebar>
    </AppFrame>
  </Root>
);
