import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Grid, Container } from "@mui/material";

import pagesData from "../data/pages.json";

function LinkItem({ title, destination }) {
  return (
    <Grid item xs={2}>
      <Link to={destination} style={{ textDecoration: "none" }}>
        <Typography
          component="div"
          sx={{
            fontSize: 32,
            fontStyle: "normal",
            color: "rgb(58,73,177)",
            textAlign: "center",
            display: { xs: "none", md: "block", xl: "block" },
            "&:hover": {
              backgroundColor: "rgb(237,195,71)",
              lineHeight: 1,
              width: "120%",
              height: "20px",
            },
            fontWeight: 900,
            fontFamily: "Titillium Web",
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
    <AppBar sx={{ height: "60px", bgcolor: "common.white", boxShadow: "none" }}>
      <Toolbar>
        <Container maxWidth="lg">
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {pagesData.map((item) => (
              <LinkItem
                key={item.name}
                title={item.name}
                destination={item.link}
              />
            ))}
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
