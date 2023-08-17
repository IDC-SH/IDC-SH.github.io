import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { ListItemButton } from "@mui/material";

import linksData from "../data/links.json";

// https://mui.com/material-ui/guides/routing/#system-ListRouter.js
const LinkButton = React.forwardRef(function LinkButton(itemProps, ref) {
  return <Link ref={ref} {...itemProps} role={undefined} />;
});

export default function NavigationDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* https://mui.com/material-ui/react-drawer/#system-TemporaryDrawer.js */}
      <List>
        {linksData.map((item) => (
          <ListItemButton
            key={item.name}
            component={LinkButton}
            to={item.link}
            alignItems="center"
          >
            <ListItemText primary={item.name} alignItems="center" />
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </Box>
  );

  const drawerAnchor = "top";

  return (
    <>
      <AppBar sx={{ height: 60, bgcolor: "common.black" }}>
        <Toolbar>
          <IconButton
            aria-label="show contents"
            onClick={toggleDrawer(drawerAnchor, true)}
            sx={{ color: "white" }}
          >
            <DehazeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={drawerAnchor}
        open={state[drawerAnchor]}
        onClose={toggleDrawer(drawerAnchor, false)}
      >
        {list(drawerAnchor)}
      </Drawer>
    </>
  );
}
