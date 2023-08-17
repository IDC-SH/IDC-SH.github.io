import * as React from "react";
import { Link } from "react-router-dom";
import {
  ListItemButton,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  ListItemText,
  List,
  Drawer,
  Box,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

  const drawerAnchor = "top";

  const DrawerContentComponent = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(drawerAnchor, false)}
      onKeyDown={toggleDrawer(drawerAnchor, false)}
    >
      <List>
        {linksData.map((item) => (
          <ListItemButton key={item.name} component={LinkButton} to={item.link}>
            <ListItemText primary={item.name} style={{ textAlign: "center" }} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar sx={{ height: 60, bgcolor: "common.black" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            IDC Group
          </Typography>
          <IconButton
            size="large"
            aria-label="show contents"
            onClick={toggleDrawer(drawerAnchor, true)}
            sx={{ color: "white" }}
          >
            <MoreVertIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* https://mui.com/material-ui/react-drawer/#system-TemporaryDrawer.js */}
      <Drawer
        anchor={drawerAnchor}
        open={state[drawerAnchor]}
        onClose={toggleDrawer(drawerAnchor, false)}
      >
        {DrawerContentComponent(drawerAnchor)}
      </Drawer>
    </>
  );
}
