import { Grid, Typography, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import highlightsData from "../data/highlights.json";

export default function HighlightList(props) {
  return (
    <>
      <Carousel>
        {highlightsData.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
      <br />
    </>
  );
}

function Item(props) {
  return (
    <Grid
      container
      direction="raw"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={9}>
        <Box
          sx={{ borderRadius: "16px" }}
          component="img"
          src={props.item.img}
          minHeight={350}
          width="100%"
        />
      </Grid>
      <Grid item xs={3}>
        <Box height={300} sx={{ ml: 5 }}>
          <Typography
            sx={{
              mt: 0,
              color: "common.black",
              textAlign: "left",
              fontSize: 15,
              fontWeight: "bold",
              lineHeight: 1.2,
              fontStyle: "normal",
            }}
          >
            {props.item.title}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "common.black",
              textAlign: "justify",
              fontSize: 10,
              fontWeight: "light",
              lineHeight: 1.1,
              fontStyle: "normal",
            }}
          >
            {props.item.description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
