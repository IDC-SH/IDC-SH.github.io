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

import pagesData from "../data/pages.json";

// https://mui.com/material-ui/guides/routing/#system-ListRouter.js
const LinkButton = React.forwardRef(function LinkButton(itemProps, ref) {
  return <Link ref={ref} {...itemProps} role={undefined} />;
});

export default function NavigationDrawer() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  function DrawerList() {
    return (
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onClick={() => {
          setDrawerOpen(false);
        }}
        onKeyDown={() => {
          setDrawerOpen(false);
        }}
      >
        <List>
          {pagesData.map((item) => (
            <ListItemButton
              key={item.name}
              component={LinkButton}
              to={item.link}
            >
              <ListItemText
                primary={item.name}
                style={{ textAlign: "center" }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>
    );
  }

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
            onClick={() => {
              setDrawerOpen(true);
            }}
            sx={{ color: "white" }}
          >
            <MoreVertIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* https://mui.com/material-ui/react-drawer/#system-TemporaryDrawer.js */}
      <Drawer
        anchor={"top"}
        open={isDrawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <DrawerList />
      </Drawer>
    </>
  );
}
