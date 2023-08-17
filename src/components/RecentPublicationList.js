import { Divider, Grid, Box, Card } from "@mui/material";

import RecentPublicationListData from "../data/recent-publications.json";

export default function RecentPublicationList() {
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="raws"
        justifyContent="center"
        alignItems="center"
      >
        {RecentPublicationListData.map((item, i) => (
          <PublicationItem key={i} item={item} />
        ))}
      </Grid>
    </>
  );
}

function PublicationItem(props) {
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
