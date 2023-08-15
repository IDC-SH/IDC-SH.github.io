import * as React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import DehazeIcon from "@mui/icons-material/Dehaze";

import linksData from "../data/links.json";

// Reference
// https://mui.com/material-ui/react-drawer/#system-TemporaryDrawer.js

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {linksData.map((item) => (
          <ListItem key={item.name}>
            <Link to={item.link}>
              <ListItemText primary={item.name} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <AppBar sx={{ height: 60, bgcolor: "common.black" }}>
            <Toolbar>
              <IconButton
                aria-label="show contents"
                onClick={toggleDrawer(anchor, true)}
                sx={{ color: "white" }}
              >
                <DehazeIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
