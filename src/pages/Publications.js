import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { PublicationList } from "../components/PublicationList";

export default function PublicationPage() {
  const availableTags = ["city-super", "simulation", "digital human"];
  const [selectedTag, setSeletectedTag] = useState("city-super");

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

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          marginBottom: 2,
        }}
      >
        {availableTags.map((tag) => {
          return (
            <Button
              variant={selectedTag == tag ? "contained" : "outlined"}
              onClick={() => {
                setSeletectedTag(tag);
              }}
            >
              {tag}
            </Button>
          );
        })}
      </Stack>

      <PublicationList filter_tag={selectedTag} />
    </>
  );
}
