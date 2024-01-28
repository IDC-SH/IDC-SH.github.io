import React from "react";
import "slick-carousel/slick.jquery.json";
import { Typography, Divider, Box } from "@mui/material";
import HighlightSection from "../components/HighlightSection";
import { RecentPublicationList } from "../components/PublicationList";
// import { Form } from "react-router-dom";

function LabIntroduction() {
  const textStyle1 = {
    fontStyle: "oblique",
    color: "#263238",
    // whiteSpace: "nowrap",
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "Lato",
    lineHeight: 2.5,
    marginTop: "120px",
  };
  const textStyle2 = {
    fontStyle: "oblique",
    color: "white",
    // whiteSpace: "nowrap",
    fontWeight: "bold",
    fontSize: 32,
    fontFamily: "Lato",
    lineHeight: 2.5,
    marginTop: "0px",
  };
  const textStyle3 = {
    fontStyle: "normal",
    color: "#263238",
    // whiteSpace: "nowrap",
    fontWeight: "bold",
    fontSize: 48,
    fontFamily: "Lato",
    lineHeight: 2.5,
    marginTop: "0px",
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(255,253,231,0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "550px",
        overflow: "auto",
        marginTop: "20px",
      }}
    >
      <Typography sx={{ ...textStyle1, fontSize: 60, lineHeight: 1.75 }}>
        Research Group on
      </Typography>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "rgb(53,73,183)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            ...textStyle2,
            display: "inline-block",
            fontSize: 60,
            lineHeight: 2,
            textAlign: "center",
          }}
        >
          Intelligent Digital Creation
        </Typography>
      </Box>
      <Typography
        sx={{
          ...textStyle3,
          fontSize: 54,
          lineHeight: 2,
          position: "relative",
        }}
      >
        Stay tuned with us!
      </Typography>
    </Box>
  );
}

export default function HomePage() {
  return (
    <>
      <LabIntroduction />

      <Divider sx={{ margin: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Condensed",
            color: "rgb(53,73,183)",
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background: "rgb(237,195,71)",
              zIndex: -1,
            },
            "&:hover::after": {
              top: 0,
              bottom: "auto",
              height: "50%",
              background: "rgb(237,195,71)",
            },
          }}
        >
          Highlights
        </Typography>
      </Divider>

      <HighlightSection />

      <Divider sx={{ margin: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontFamily: "Roboto Condensed",
            color: "rgb(53,73,183)",
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "50%",
              background: "rgb(237,195,71)",
              zIndex: -1,
            },
            "&:hover::after": {
              top: 0,
              bottom: "auto",
              height: "50%",
              background: "rgb(237,195,71)",
            },
          }}
        >
          Recents
        </Typography>
      </Divider>
      <RecentPublicationList />
    </>
  );
}
