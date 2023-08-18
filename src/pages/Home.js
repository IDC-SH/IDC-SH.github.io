import { Typography, Container, Divider, Box } from "@mui/material";

import {
  HighlightAnimateDiffCard,
  HighlightLandMarkCard,
} from "../components/Highlights";
import { RecentPublicationList } from "../components/PublicationList";

import backgroundImage from "./images-home/background.jpeg";

function MainIntroduction() {
  return (
    <Box
      component="div"
      height={600}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Typography
            sx={{
              mt: 20,
              fontStyle: "oblique",
              color: "common.white",
              fontSize: 200,
              lineHeight: 0.9,
            }}
          >
            IDC
          </Typography>
          <Typography
            sx={{
              mr: 2,
              fontStyle: "oblique",
              color: "common.white",
              fontSize: 28,
              lineHeight: 0.8,
            }}
          >
            Intelligent Digital Creation
          </Typography>
          <Typography
            sx={{
              color: "common.white",
              fontStyle: "oblique",
              fontSize: 100,
              lineHeight: 1,
            }}
          >
            Group
          </Typography>
          <Typography
            sx={{
              mt: 1,
              mr: 2,
              fontStyle: "oblique",
              color: "common.white",
              fontSize: 12,
              lineHeight: 0.8,
            }}
          >
            @ Shanghai AI Laboratory
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <MainIntroduction />

      <Divider sx={{ margin: 4 }}>
        <Typography variant="h2" textAlign="center">
          Highlights
        </Typography>
      </Divider>
      <HighlightAnimateDiffCard />
      <HighlightLandMarkCard />

      <Divider sx={{ margin: 4 }}>
        <Typography variant="h2" textAlign="center">
          Recents
        </Typography>
      </Divider>
      <RecentPublicationList />
    </>
  );
}
