import * as React from "react";
import Container from "@mui/material/Container";

import PublicationList from "../components/PublicationList";

class PublicationPage extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth="lg" sx={{ mt: 10 }}>
          <PublicationList />
        </Container>
      </div>
    );
  }
}

export default PublicationPage;
