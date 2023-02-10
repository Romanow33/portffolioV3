import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import CustomTabs from "../Tabs";

export default function NavBar({ posisionatedTab, setPosisionatedTab }) {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <CustomTabs
          setPosisionatedTab={setPosisionatedTab}
          posisionatedTab={posisionatedTab}
        />
      </Toolbar>
    </AppBar>
  );
}
