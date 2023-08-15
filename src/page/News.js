import * as React from "react";
import Container from "@mui/material/Container";

import ElevateAppBar from "../components/ElevateAppbar";
import NewsList from "../components/NewsList";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <ElevateAppBar />
        <Container maxWidth="lg">
          <NewsList />
        </Container>
      </div>
    );
  }
}

export default NewsPage;
