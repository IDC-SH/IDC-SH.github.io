import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import linksData from "../data/links.json";

function LinkItem({ title, destination }) {
  return (
    <Grid item xs={2}>
      <Link to={destination} style={{ textDecoration: "none" }}>
        <Typography
          component="div"
          sx={{
            fontSize: 20,
            fontStyle: "normal",
            color: "common.white",
            textAlign: "center",
            display: { xs: "none", md: "block", xl: "block" },
          }}
        >
          {title}
        </Typography>
      </Link>
    </Grid>
  );
}

export default function NavigationBar(props) {
  return (
    <AppBar sx={{ height: 60, bgcolor: "common.black" }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {linksData.map((item) => (
              <LinkItem title={item.name} destination={item.link} />
            ))}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
