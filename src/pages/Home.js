import { Typography, Container, Divider, Box } from "@mui/material";

import HighlightList from "../components/HighlightList";
import RecentPublicationList from "../components/RecentPublicationList";

import "./App.css";

export default function HomePage() {
  return (
    <>
      <Box component="div" className="container" height={900}>
        <Container maxWidth="lg">
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            {/* <Typography sx={{color:"common.white",lineHeight:0.8}}> */}
            <Typography
              sx={{
                mt: 60,
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

      <Divider sx={{ margin: 4 }}>
        <Typography variant="h2" textAlign="center">
          Highlights
        </Typography>
      </Divider>

      <Container maxHeight={300} maxWidth="lg" sx={{ mt: 5 }}>
        <HighlightList />
      </Container>

      <Divider sx={{ margin: 4 }}>
        <Typography variant="h2" textAlign="center">
          Recent Publications
        </Typography>
      </Divider>

      <Container>
        <RecentPublicationList />
      </Container>
    </>
  );
}
