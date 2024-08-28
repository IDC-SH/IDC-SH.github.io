import { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { PublicationList } from "../components/PublicationList";
import publicationsData from "../data/publications.json";
import { Container } from "@mui/system";

export default function PublicationPage() {
  // derive all tags from json data
  var availableTagsAndCounts = { all: 0 };
  publicationsData.map((item) => {
    availableTagsAndCounts.all += 1;
    item.tags.map((tag) => {
      if (!Object.keys(availableTagsAndCounts).includes(tag)) {
        availableTagsAndCounts[tag] = 1;
      } else {
        availableTagsAndCounts[tag] += 1;
      }
    });
  });
  console.log(availableTagsAndCounts);

  // sort
  availableTagsAndCounts = Object.fromEntries(
    Object.entries(availableTagsAndCounts).sort(([, a], [, b]) => b - a)
  );

  // default select all
  const [selectedTag, setSeletectedTag] = useState("all");

  return (
    <>
      <Box
        sx={{ marginTop: 10, justifyItems: "center", alignItems: "center" }}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50%",
            backgroundColor: "rgb(237,195,71)",
            padding: "20px 0",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              fontSize: "32px",
              fontFamily: "Josefin Sans",
            }}
          >
            Dig Into Your Interests and Find Your Vibe!
          </Typography>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Grid
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          sx={{
            marginBottom: 2,
          }}
        >
          {Object.keys(availableTagsAndCounts).map((tag) => {
            return (
              <Button
                variant={selectedTag == tag ? "contained" : "outlined"}
                sx={{
                  marginX: 1,
                  marginY: 1,
                }}
                onClick={() => {
                  setSeletectedTag(tag);
                }}
              >
                {tag} ({availableTagsAndCounts[tag]})
              </Button>
            );
          })}
        </Grid>
      </Container>

      <PublicationList filter_tag={selectedTag} />
    </>
  );
}
