import { Box, Typography } from "@mui/material";
import { PublicationList } from "../components/PublicationList";
export default function PublicationPage() {
  return (
    <Box sx={{ marginTop: 10 }}>
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
          sx={{ color: "white", fontSize: "32px", fontFamily: "Josefin Sans" }}
        >
          Dig Into Your Interests and Find Your Vibe!
        </Typography>
      </Box>
      <PublicationList />
    </Box>
  );
}
