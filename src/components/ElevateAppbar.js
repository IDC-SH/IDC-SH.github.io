import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function ElevateAppBar(props) {
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
              <Grid item xs={2}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
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
                    Home
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={2}>
                <Link to={"/publication"} style={{ textDecoration: "none" }}>
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
                    Publications
                  </Typography>
                </Link>
              </Grid>

              <Grid
                item
                xs={1}
                sx={{ display: { xs: "block", sm: "block", md: "none" } }}
              >
                <Typography
                  component="div"
                  sx={{
                    fontSize: 20,
                    fontStyle: "normal",
                    color: "common.white",
                    textAlign: "center",
                  }}
                ></Typography>
              </Grid>

              <Grid item xs={2}>
                <Link to={"/news"} style={{ textDecoration: "none" }}>
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
                    News
                  </Typography>
                </Link>
              </Grid>

              <Grid item xs={2}>
                <Link to={"/joinus"} style={{ textDecoration: "none" }}>
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
                    {/*sx={{ ml:5, mr:20 }}*/}
                    Join Us
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
