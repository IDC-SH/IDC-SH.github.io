import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

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
    <>
      <CssBaseline />
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
              <LinkItem title={"Home"} destination={"/"} />
              <LinkItem title={"Publications"} destination={"/publication"} />
              <LinkItem title={"News"} destination={"/news"} />
              <LinkItem title={"Join Us"} destination={"/joinus"} />
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
