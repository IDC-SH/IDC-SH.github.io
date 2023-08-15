import * as React from "react";

import Container from "@mui/material/Container";

import NewsList from "../components/NewsList";

class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <NewsList />
        </Container>
      </div>
    );
  }
}

export default NewsPage;
