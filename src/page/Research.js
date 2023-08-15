import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ElevateAppBar from "../components/ElevateAppbar";
import ResearchList from "../components/ResearchList";
import { Button } from "@mui/material";

class ResearchPage extends React.Component {
  render() {
    return (
      <div>
        <ElevateAppBar />
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <Container>
            <Box sx={{ height: 400, backgroundColor: "primary.light", mb: 5 }}>
              <Typography variant="h1">Intorduction</Typography>
            </Box>
          </Container>

          <ResearchList />
        </Container>
      </div>
    );
  }
}

export default ResearchPage;
