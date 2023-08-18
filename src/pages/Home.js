import { Typography, Container, Divider, Box } from "@mui/material";

import {
  HighlightAnimateDiffCard,
  HighlightLandMarkCard,
} from "../components/Highlights";
import { RecentPublicationList } from "../components/PublicationList";

import backgroundImage from "./images-home/background.jpeg";

function LabIntroduction() {
  const textStyle = {
    fontStyle: "oblique",
    color: "white",
    whiteSpace: "nowrap",
    fontWeight: "bold",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ ...textStyle, fontSize: 160, lineHeight: 1, letterSpacing: 20 }}
      >
        IDC
      </Typography>
      <Typography sx={{ ...textStyle, fontSize: 20, lineHeight: 0.6 }}>
        Intelligent Digital Creation
      </Typography>
      <Typography sx={{ ...textStyle, fontSize: 120, lineHeight: 1.2 }}>
        Group
      </Typography>
      <Typography sx={{ ...textStyle, fontSize: 18, lineHeight: 0.8 }}>
        @ Shanghai AI Laboratory
      </Typography>
    </Box>
  );
}

function RecruitingIntroduction() {
  const textStyle = {
    fontStyle: "oblique",
    color: "white",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            ...textStyle,
            fontFamily: "Comic Sans MS",
            fontSize: 64,
            lineHeight: 2.2,
          }}
        >
          Team is Recruiting
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: 28,
            lineHeight: 2,
            color: "white",
            textAlign: "center",
          }}
        >
          If you believe you have what it takes,
          <br />
          please do not hesitate to express
          <br />
          your interest to <i>daibo@pjlab.org.cn</i>
        </Typography>
      </Box>
    </>
  );
}

function MainIntroduction() {
  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Box
          sx={{
            height: 400,
            backgroundColor: "rgba(232,232,232,0.2)",
            marginTop: 12,
            marginLeft: 5,
            marginRight: 5,
            padding: 4,
          }}
        >
          <LabIntroduction />
        </Box>
        <Box
          sx={{
            height: 400,
            backgroundColor: "rgba(232,232,232,0.2)",
            marginTop: 12,
            marginRight: 5,
            padding: 4,
          }}
        >
          <RecruitingIntroduction />
        </Box>
      </Box>
    </Container>
  );
}

export default function HomePage() {
  return (
    <>
      <Box
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
        <MainIntroduction />
      </Box>

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
