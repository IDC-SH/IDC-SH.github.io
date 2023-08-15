import * as React from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

import ElevateAppBar from "../components/ElevateAppbar";
import { Box } from "@mui/system";

import HightlightItems from "../components/HightlightItems";
import LatestPublish from "../components/LatestPublish";
import { Typography } from "@mui/material";

import "./App.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Box>
          <ElevateAppBar />
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
                  @Shanghai AI Laboratory
                </Typography>
              </Box>
            </Container>
          </Box>

          <Container maxHeight={300} maxWidth="lg" sx={{ mt: 5 }}>
            <HightlightItems />
          </Container>

          <Box sx={{ mb: 2, height: 50 }}>
            <Divider sx={{ color: "#000000" }} variant="middle">
              <Box
                sx={{ fontStyle: "normal", fontWeight: "light", fontSize: 40 }}
              >
                Latest Publishes
              </Box>
            </Divider>
          </Box>

          <Container>
            <LatestPublish />
          </Container>
        </Box>
      </div>
    );
  }
}

export default HomePage;
