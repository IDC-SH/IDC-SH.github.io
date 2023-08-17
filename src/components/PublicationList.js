import { Grid, Typography, Box, Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

import papersData from "../data/publications.json";

export default function PublicationList() {
  return (
    <>
      {papersData.map((item, i) => (
        <PaperItem key={i} item={item} />
      ))}
    </>
  );
}

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[800]),
  backgroundColor: grey[800],
  "white-space": "nowrap",
  "&:hover": {
    backgroundColor: grey[700],
  },
}));

function PaperItem(props) {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid xs={3}>
          <Box
            sx={{ borderRadius: "16px" }}
            component="img"
            src={props.item.img}
            minHeight={150}
            width="100%"
          />
        </Grid>
        <Grid xs={9}>
          {/* <Grid container spacing={5} direction="column"> */}
          <Grid xs={12}>
            <Typography
              variant="h7"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 2, ml: 2 }}
            >
              {props.item.title}
            </Typography>
          </Grid>
          <Typography variant="body1" sx={{ mt: 2, ml: 2 }}>
            {props.item.author}
          </Typography>
          <Grid xs={12}></Grid>

          <Grid xs={12}>
            <Typography
              variant="body1"
              sx={{ mt: 1, ml: 2, fontStyle: "italic" }}
            >
              {props.item.publish}
            </Typography>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              mt: 1,
              ml: 2,
              mb: 1,
              display: "grid",
            }}
          >
            {props.item.button1 && (
              <Box sx={{ gridRow: "1", mr: 1 }}>
                <ColorButton href={props.item.paper_link}>Paper</ColorButton>
              </Box>
            )}
            {props.item.button2 && (
              <Box sx={{ gridRow: "1", mr: 1 }}>
                <ColorButton href={props.item.code_link}>Code</ColorButton>
              </Box>
            )}
            {props.item.button3 && (
              <Box sx={{ gridRow: "1", mr: 1 }}>
                <ColorButton href={props.item.page_link}>
                  Project page
                </ColorButton>
              </Box>
            )}
            {props.item.button4 && (
              <Box sx={{ gridRow: "1", mr: 1 }}>
                <ColorButton href={props.item.video_link}>Video</ColorButton>
              </Box>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
