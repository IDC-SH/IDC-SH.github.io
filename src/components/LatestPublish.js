import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Divider, Grid, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import newpublishs from "../data/newpublic.json";

export default function LatestPublish() {
  return (
    <div>
      <Grid
        container
        spacing={1}
        direction="raws"
        justifyContent="center"
        alignItems="center"
      >
        {newpublishs.map((item, i) => (
          <PublishesItem key={i} item={item} />
        ))}
      </Grid>
    </div>
  );
}

function PublishesItem(props) {
  return (
    <Card sx={{ width: 350, height: 320, m: 1 }}>
      <Grid
        container
        spacing={1}
        direction="columns"
        justifyContent="center"
        alignItems="center"
      >
        <Grid>
          <Box
            sx={{ borderRadius: "16px" }}
            component="img"
            src={props.item.img}
            minHeight={200}
            width="100%"
          />

          <Divider variant="middle" />
        </Grid>

        <Grid sx={{ mt: 1, ml: 3, mb: 0 }} minHeight={60}>
          <Box
            sx={{
              color: "#616161",
              fontStyle: "oblique",
              lineHeight: 1,
              fontWeight: "light",
              fontSize: 18,
            }}
          >
            {props.item.tile}
          </Box>
        </Grid>

        <Grid>
          {/* <Divider variant='middle'/>  */}
          <Box
            sx={{
              ml: 3,
              color: "#9e9e9e",
              fontStyle: "italic",
              fontWeight: "light",
              fontSize: 13,
            }}
          >
            {props.item.author}
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
