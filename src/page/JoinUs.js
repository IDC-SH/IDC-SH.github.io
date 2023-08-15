import * as React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ElevateAppBar from "../components/ElevateAppbar";

class JoinUsPage extends React.Component {
  render() {
    return (
      <div>
        <ElevateAppBar />
        <Container maxWidth="sm">
          <Typography variant="h6" sx={{ marginTop: 10, textAlign: "justify" }}>
            In IDC group@Shanghai AI Laboratory, we are devoted to advance the
            forefront of research in developing and applying AI-based tools for
            content creation and digitization.
          </Typography>
          <Typography sx={{ marginTop: 3, textAlign: "justify" }}>
            Our mission is to empower users to manifest their imagination in a
            better, more efficient and accessible manner.
          </Typography>
          <Typography sx={{ marginTop: 3, textAlign: "justify" }}>
            We are actively seeking top-tier researchers and interns who are
            driven, disciplined, and innovative to embark on this exciting
            journey.
          </Typography>
          <Typography
            sx={{ marginTop: 3, marginBottom: 10, textAlign: "justify" }}
          >
            If you believe you have what it takes, please do not hesitate to
            express your interest to daibo@pjlab.org.cn.
          </Typography>
        </Container>
      </div>
    );
  }
}

export default JoinUsPage;
